import { useState, useEffect } from "react"
import { getSeriesAiringToday, getSeriesUpcoming, getTopSeries } from "../../services/getData"
import Slider from "../../components/Slider"

function Series() {
  const [topSeries, setTopSeries] = useState()
  const [seriesUpcoming, setSeriesUpcoming] = useState()
  const [seriesAiringToday, setSeriesAiringToday] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getTopSeries(),
        getSeriesAiringToday(),
        getSeriesUpcoming()
      ]).then(
        ([
          topSeries,
          seriesAiringToday,
          SeriesUpcoming
        ]) => {
          setTopSeries(topSeries),
          setSeriesAiringToday(seriesAiringToday),
          setSeriesUpcoming(SeriesUpcoming)
        }
      )
    }
    getAllData()
  }, [])
  
  return (
    <div style={{marginTop: '100px'}}>
      {topSeries && <Slider info={topSeries} title={'Top Séries'}/>}
      {seriesAiringToday && <Slider info={seriesAiringToday} title={'Exibindo hoje'}/>}
      {seriesUpcoming && <Slider info={seriesUpcoming} title={'Próximas Séries'}/>}
    </div>
  )
}

export default Series
