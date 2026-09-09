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

//Walkers
export const getWalkers = async () => {
  const res = await fetch("/api/walkers")
  return res.json()
}
