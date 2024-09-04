import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
  constructor() {
    console.log(`Pokemon Controller is loaded`);

    this.getPokemon()
  }


  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }
}