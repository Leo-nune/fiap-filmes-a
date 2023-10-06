

import CardPokemon from "@/components/CardPokemon";

async function carregarPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}


export default async function Home() {

  const pokemons = await carregarPokemon()
  //mock

  return (<>
        <section className="flex flex-wrap gap-2 w-full h-screen bg-black bg-opacity-50 blur-1 relative">
          {pokemons.map(pokemon => <CardPokemon pokemon={pokemon} />)}
        </section>
    </>
  )

}
