let pokemonName = document.querySelector(".name")
let frontImg = document.querySelector("#frontImg")
let backImg = document.querySelector("#backImg")
let randomPokemon
function pokemonApiCall() {
    randomPokemon = Math.floor(Math.random() * 1118)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) =>{
            return res.json()
            })
            .then(data => {
                pokemonName.innerHTML = data.name
                frontImg.src = data.sprites.front_default
                backImg.src = data.sprites.back_default
                randomPokemon = Math.floor(Math.random() % 1118)
            })

}
pokemonApiCall()