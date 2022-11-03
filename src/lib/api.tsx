import axios from "axios";

export default async function api(id: any) {
    const urlPokemon = `https://api.pokemontcg.io/v2/cards/${id}`

    const pokemon = await axios.get(urlPokemon);

    return pokemon.data.data;
}
