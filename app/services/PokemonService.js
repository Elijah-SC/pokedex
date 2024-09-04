import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
  async setActivePokemon(pokemonName) {
    const response = await pokeApi.get(`pokemon/${pokemonName}`)
    console.log(`got pokemon details`, response.data)

    const newPokemon = new Pokemon(response.data)
    AppState.activePokemon = newPokemon
    console.log(`active Pokemon set to`, AppState.activePokemon)
  }
  async getPokemon() {
    const response = await pokeApi.get(`pokemon`)
    console.log(`got pokemon`, response.data.results)


    AppState.pokemon = response.data.results
    console.log(`Getting pokemon into the appSate`, AppState.pokemon);

  }

}

export const pokemonService = new PokemonService()