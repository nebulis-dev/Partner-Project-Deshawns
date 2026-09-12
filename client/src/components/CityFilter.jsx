import { getAllCities, getCity } from "../apiManager"
import { useEffect, useState } from "react"

export const CityFilter = ({ setFilteredWalkers }) => {
    const [city, setCity] = useState()
    const [cities, setCities] = useState([])

    useEffect(() => {
        getAllCities()
        .then(setCities)
    }, [])

    useEffect(() => {
        setFilteredWalkers(city?.walkers)
    }, [city])

    function filterWalkers (event) {
        getCity(event.target.value)
        .then(setCity)
    }

    return(
        <div className="filter-bar">
            <select onChange={(event) => {filterWalkers(event)}}>
                <option value="">Select a City</option>
                {cities.map(city => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    )
}