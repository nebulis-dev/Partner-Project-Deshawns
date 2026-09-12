import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWalkers } from "../apiManager";
import { CityFilter } from "../components/CityFilter";

export const WalkerList = () => {
    const [allWalkers, setAllWalkers] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])

    useEffect(() => {
        getWalkers()
        .then((res) => setAllWalkers(res))
    }, [])

    useEffect(() => {
        setFilteredWalkers(allWalkers)
    }, [allWalkers])

    return (
        <>
            <CityFilter
                setFilteredWalkers={setFilteredWalkers}
            />
            <div className="walkerList-container">
                <h2>List of walkers</h2>
                <div className="walkerList">
                    {filteredWalkers.map((walker) => {
                        return (
                            <div className="walker" key={walker.id}>
                                {/* Will add link later */}
                                {walker.name}
                                <button>Assign dogs to walker</button>    
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}