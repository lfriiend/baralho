import axios from "axios";

export default async function api(id: any) {
    let poke = id
    const urlPokemon = `https://api.pokemontcg.io/v2/cards/${poke}`

    const pokemon = await axios.get(urlPokemon);

    return pokemon.data;
}