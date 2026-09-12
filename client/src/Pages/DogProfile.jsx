import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDog } from "../apiManager"

export function DogProfile() {
  const { dogId } = useParams()
  const [dog, setDog] = useState(null)

  useEffect(() => {
    getDog(dogId).then(setDog)
  }, [dogId])

  if (!dog) return <p>Loading...</p>

  return (
    <>
      <h1>{dog.name}</h1>

      <h2>Walked by:</h2>
      <h2>{dog.walker ? dog.walker.name : "Nobody"}</h2>
    </>
  )
}
