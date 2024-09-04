import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
  setActivePokemon() {
    throw new Error("Method not implemented.")
  }
  async getPokemon() {
    const response = await pokeApi.get(`pokemon?limit=151`)
    console.log(`got pokemon`, response.data.results)


    AppState.pokemon = response.data.results
    console.log(`Getting pokemon into the appSate`, AppState.pokemon);

  }

}

export const pokemonService = new PokemonService()