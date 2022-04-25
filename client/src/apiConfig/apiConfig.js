import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2/"

export const pokeApi = axios.create({
    baseURL: pokemonUrl
})