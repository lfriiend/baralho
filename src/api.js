
export default async function api(id) {
    let poke = id
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${poke}`

    const pokemon = await fetch(urlPokemon)
        .then(res => res.json())
        .then(res => {
            return res;
        })
}
