import { pokemonApi } from "./AxiosService.js"

class PokemonService {
  async getPokemon() {
    const response = await pokemonApi.get(`api/v2/pokemon`)
    console.log(`got pokemon`, response.data.results)
  }

}

export const pokemonService = new PokemonService()