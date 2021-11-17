import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemon, setPokemon] = useState(null)
  
  useEffect(() => { /* Équivalent de la méthode 'ComponentDidMount()' */
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { setPokemon(result) }) // on détaille l'action à exécuter sur ce JSON
  }, [])

  const Random = () => {
    const min = 1
    const max = 151
    const pokemonID = Math.floor(Math.random() * (max - min + 1) + min) // donnera un nombre aléatoire entre 1 et 10
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { setPokemon(result) }) // on détaille l'action à exécuter sur ce JSON
  }
  // console.log(types)
  return(
    <>
        <h1>Home</h1>
        <button type="button" className="btn btn-outline-primary" onClick={() => Random()}>Random</button>
        {pokemon === null ? "" : 
          <>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>
            {pokemon.types.map(element => element.type.name)}
          </>
        }
    </>
  )
}

export default Home