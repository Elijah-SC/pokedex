import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js"

class SandboxService {
  async saveActivePokemon() {
    const pokemonToSave = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemonToSave)
    console.log(`saved pokemon`, response.data);

    const pokemon = new Pokemon(response.data)
    AppState.savedPokemon.push(pokemon)
    console.log(`pokemon saved to AppState is`, pokemon)
  }

}

export const sandboxService = new SandboxService()