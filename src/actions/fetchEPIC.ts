import { TEPIC } from "@/interface/EPIC";
import { api_key } from "./constants"

const getData = (el: string): string => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate() - 2).padStart(2, '0');

    return `${year}${el}${month}${el}${day}`
}

const getEPIC = async (): Promise<TEPIC> => {
    const dataToDay = getData("-")
    const res = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${dataToDay}?api_key=${api_key}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const result = await res.json()
    return result
}

type getEPICimgR = {
    arrUrl: string[],
    dataToDay: string
}

const getEPICimg = async (): Promise<getEPICimgR> => {
    const dataToDay = getData("/")
    const data = await getEPIC()
    const arrUrl: string[] = []

    data?.map(el => arrUrl.push(`https://api.nasa.gov/EPIC/archive/natural/${dataToDay}/png/${el.image}.png?api_key=${api_key}`))
    return {arrUrl, dataToDay}
}


const fetchEPIC = { getEPICimg }

export default fetchEPIC
