import { api_key } from "./constants"

const getAsteroids = async (): Promise<any> => {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${api_key}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

// TODO: поменять any и засунуть number

const getAsteroid = async (number: string): Promise<any> => {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${api_key}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export const fetchAsteroids = { getAsteroid, getAsteroids } 
