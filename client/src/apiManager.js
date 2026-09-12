import { json } from "react-router-dom"

export const getGreeting = async () => {
  const res = await fetch("/api/hello")
  return res.json()
}

//Dogs
export const getDogs = async () => {
  const res = await fetch("/api/dogs")
  return res.json()
}

export const getDog = async (id) => {
  const res = await fetch(`/api/dogs/${id}`)
  return res.json()
}

export const createNewDog = async (dog) =>{
  return fetch("/api/dog",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(dog)
  }).then(res=>res.json())
}

//Walkers
export const getWalkers = async () => {
  const res = await fetch("/api/walkers")
  return res.json()
}


//City
export const getAllCities = async ()=>{
  const res = await fetch("/api/cities")
  return res.json()
}

export const getCity = async (id) => {
  const res = await fetch(`/api/cities/${id}`)
  return res.json()
}