export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default
  }


  get activePokemonTemplate() {
    return `
    <div>
    <img src="${this.img}" alt="">
      <h1>${this.name}</h1>
      <button onclick="app.PokemonController.savePokemon('${this.name}')" class="my-2 btn btn-outline-primary">Save</button>
      </div>
    `
  }
}