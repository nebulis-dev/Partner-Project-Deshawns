import { useEffect, useState } from "react"
import { createNewDog, getAllCities } from "../apiManager.js"
import { Navigate, useNavigate } from "react-router-dom"

export const AddDog = () => {
  const navigate = useNavigate()
  const [cities, setCities] = useState([])
  const [newDog, setNewDog] = useState({
    Name: "",
    CityId: 0,
  })

  useEffect(() => {
    getAllCities().then((res) => setCities(res))
  }, [])

  const dogInput = (event) => {
    const stateClone = { ...newDog }
    console.log(event.target.name)
    stateClone[event.target.name] = event.target.value
    setNewDog(stateClone)
  }

  const submitDog = (event) => {
    event.preventDefault()
    createNewDog(newDog).then((res) => navigate(`/dogProfile/${res.id}`))
  }

  return (
    <div className="addDog-container">
      <form
        className="addDog-form"
        onSubmit={(event) => {
          submitDog(event)
        }}
      >
        <div className="addDog-input">
          Dog Name:
          <input
            required
            type="text"
            placeholder="Name"
            name="Name"
            onChange={(event) => dogInput(event)}
          />
        </div>
        <div className="addDog-input">
          Dog's City:
          <select
            name="CityId"
            onChange={(event) => {
              dogInput(event)
            }}
          >
            {cities.map((c) => {
              return (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              )
            })}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
