import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandBoxController.js";
import { Pop } from "../utils/Pop.js";

export class SandboxController {
  constructor() {


  }

  async savePokemon() {
    try {
      console.log(`saving`, AppState.activePokemon)
      await sandboxService.saveActivePokemon()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }
}