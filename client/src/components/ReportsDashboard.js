import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pane, Heading, Paragraph, Button } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGl, { Source, Layer } from 'react-map-gl'
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from '../helpers/mapLayers'
import { isUserAuthenticated, getTokenFromLocal } from '../helpers/auth'


const ReportsDashboard = () => {
  const navigate = useNavigate()

  const user = getTokenFromLocal()

  const [viewPort, setViewPort] = useState(null)

  const [reportData, setReportData] = useState([])

  const [mapData, setMapData] = useState({
    type: 'Reports',
    features: []
  })

  useEffect(() => {

    const geojsonFeatureArr = reportData.map((report) => {
      return { type: 'Feature', geometry: { type: 'Point', coordinates: [report.latitude, report.longitude] } }
    })
    setMapData({ ...mapData, features: geojsonFeatureArr })

  }, [reportData])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/reports/all/')
        console.log(data)
        setReportData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()

    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setViewPort({ latitude, longitude })
    })
  }, [])

  const percentageReportCalculator = () => {
    const reportedYes = reportData.filter(report => report.has_reported.toLowerCase() === 'yes')
    return (reportedYes.length / reportData.length * 100).toFixed(2)
  }

  const getAllOwnedReports = () => {
    const ownedReports = reportData.filter(report => report.owner === user)
    return ownedReports.length
  }

  return (
    <Pane className='report-page-container'>
      <Heading fontFamily='DM Serif Display' fontSize='x-large' marginBottom={20}>Report Dashboard</Heading>
      {/* <Paragraph color='black' fontSize='medium'>Here you can discover reports in our database.</Paragraph> */}
      {!!reportData.length &&
        <Box className='statistics'>
          <Heading color='black'>Total reports:<br /><span className='statistics-number'>{reportData.length}</span></Heading>
          <Heading color='black'>Reported to the police:<br /><span className='statistics-number'>{percentageReportCalculator()}%</span></Heading>
          {/* <Heading color='black'>Your reports:<br /><span className='statistics-number'>{getAllOwnedReports()}</span></Heading> */}
        </Box>}

      {isUserAuthenticated() ?
        <Box className='map-container'>
          <ReactMapGl
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            height='100%'
            width='100%'
            mapStyle="mapbox://styles/essikarj/cl0jxwvsc000k14mrzpxr4a5n"
            interactiveLayerIds={[clusterLayer.id]}
            zoom={1}
            {...viewPort}
            onMove={e => setViewPort(e.viewState)}
          >
            <Source
              id='reports'
              type='geojson'
              data={mapData}
              cluster={true}
              clusterMaxZoom={14}
              clusterRadius={50}
            >
              <Layer {...clusterLayer} />
              <Layer {...clusterCountLayer} />
              <Layer {...unclusteredPointLayer} />
            </Source>

          </ReactMapGl>

        </Box>
        :
        <Box className='not-user-error'>
          <Heading>This is for logged in users only.</Heading>
          <Button onClick={() => navigate('/register')}>Register</Button>
        </Box>
      }

    </Pane>
  )
}

export default ReportsDashboard