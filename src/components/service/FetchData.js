export default class FetchData {
    url = 'https://city-mobil.ru/api/cars'

    getResource = async url => {
        const res = await fetch('https://city-mobil.ru/api/cars')

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`)
        }

        return await res.json()
    }

    ge
}