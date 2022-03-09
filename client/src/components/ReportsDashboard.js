import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGl, { Source, Layer } from 'react-map-gl'
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './subcomponents/MapLayers'

const ReportsDashboard = () => {

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

  return (
    <Pane className='report-page-container'>
      <Heading>Report Dashboard</Heading>
      <Paragraph>Here you can discover reports in our database. All reports are anonymous.</Paragraph>
      <Box className='map-container'>
        <ReactMapGl
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle="mapbox://styles/mapbox/streets-v11"
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

    </Pane>
  )
}

export default ReportsDashboard