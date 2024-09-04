import { AuthController } from './controllers/AuthController.js';
import { PokemonController } from "./controllers/PokemonController.js";
import { SandboxController } from "./controllers/SandBoxControler.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  SandboxController = new SandboxController()
  PokemonController = new PokemonController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
