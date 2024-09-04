import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokemonController {
  constructor() {
    console.log(`Pokemon Controller is loaded`);
    AppState.on(`pokemon`, this.drawPokemon)

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

  drawPokemon() {
    const pokemon = AppState.pokemon
    let pokemonHTML = ``
    pokemon.forEach(mon => pokemonHTML += `<button onclick="app.PokemonController.setActivePokemon('${mon.name}')" class="w-100 my-1 btn btn-outline-danger">${mon.name}</button>`)
    setHTML(`pokemonList`, pokemonHTML)
  }

  async setActivePokemon(pokemonName) {
    try {
      console.log(`Setting Active Pokemon`, pokemonName);
      await pokemonService.setActivePokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }
}