
import { fetchAsteroids } from "@/actions/fetchAsteroids"
import { AsteroidsProps } from "./Asteroids.type"
import getCurrentDate from "@/actions/getDay"

const Asteroids =  ({activeKilometers}: AsteroidsProps) => {
    const {getAsteroids} = fetchAsteroids
   const day = getCurrentDate(0)
      
    // const data = await getAsteroids(day)
  return (
    <></>
  )
}

export default Asteroids