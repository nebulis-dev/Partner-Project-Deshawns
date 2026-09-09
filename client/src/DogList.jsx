import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getDogs } from "./apiManager.js"

export const DogList = () => {
  const [allDogs, setAllDogs] = useState([])

  useEffect(() => {
    getDogs().then((res) => setAllDogs(res))
  }, [])

  return (
    <>
      <div className="dogList-container">
        <h2>List of dogs</h2>
        <div className="dogList">
          {allDogs.map((dog) => {
            return (
              <div className="dog" key={dog.id}>
                <Link>{dog.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
