import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => { /* Équivalent de la méthode 'ComponentDidMount()' */
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { setPokemon(result) }) // on détaille l'action à exécuter sur ce JSON
  }, [])

  console.log(pokemon)
  return(
    <>
      <h1>Home</h1>
      {pokemon === null ? "" : 
        <>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
        </>
      }
    </>
  )
}

export default Home