import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class SandboxService {
  async saveActivePokemon() {
    const pokemonToSave = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemonToSave)
    console.log(`saved pokemon`, response.data);


  }

}

export const sandboxService = new SandboxService()