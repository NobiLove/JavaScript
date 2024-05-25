import axios from 'axios'

const UsePokeApi = async (pokemonName) => {
  const formatedName = pokemonName.toLowerCase()
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formatedName}`)
    return data
  } catch (error) {
    throw new Error('error al consultar api')
  }
}

export default UsePokeApi
