import { pokeApi } from "./apiConfig";

export const getPokemon = async (id) => {
    const res = await pokeApi.get(`pokemon/${id}`)
    return res
}