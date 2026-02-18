document.getElementById('indipokemon')


const kantoPokemons = [
    {
        name: "Charmander",
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        imageUrl:
            "https://easycdn.es/1/poke/i/pokedex/ken/4.png"
    },
    {
        name: "Bulbasaur",
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        imageUrl:
            "https://easycdn.es/1/poke/i/pokedex/ken/1.png"
    },
    {
        name: "Squirtle",
        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        imageUrl:
            "https://easycdn.es/1/poke/i/pokedex/ken/7.png"
    },
];

function showPokemons(pokemons) {
    const div = document.querySelector('#indipokemon');
    let rows = "";

    for (const pokemon of pokemons) {
        rows += `
      <div>
                    <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
                <ul class="infop">
                    <li><strong>Name:</strong> ${pokemon.name}</li>
                    <li><strong>HP:</strong> ${pokemon.hp}</li>
                    <li><strong>ATK:</strong> ${pokemon.attack}</li>
                    <li><strong>DEF:</strong> ${pokemon.defense}</li>
                    <li><strong>SPD:</strong> ${pokemon.speed}</li>
                </ul> 
            </div>
`}
    div.innerHTML = rows
}

showPokemons(kantoPokemons)

// Pictures taken from https://easycdn.es/1/poke/i/pokedex/ken/6.png



function calculateMostPowerfull(pokemon) {
    const div = document.querySelector('#recomendation');
    let gigaChad = []


    for (const pokemon of pokemons) {
        Power = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.speed
        gigaChad.push(pokemon.name)

        // In this foor loop I will create a new element for the class gigachad, but right now is a array
    }


}