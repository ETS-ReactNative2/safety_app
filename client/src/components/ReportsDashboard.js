import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ReportsDashboard = () => {

  const [ reportData, setReportData ] = useState({})

  const getData = async () => {
    try {
      const { data } = await axios.get('api/reports/all')
      setReportData(data.data)
      console.log(reportData)
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(getData, [])

  return(
    <>
    </>
  )
}

export default ReportsDashboard