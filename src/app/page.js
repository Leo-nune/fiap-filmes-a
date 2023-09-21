import CardFilme from "@/components/CardFilme";
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
  const filmes = [
    {
      titulo: "1ªGeração",
      id: 1,
      poster: "https://images.saymedia-content.com/.image/t_share/MTczOTQwMjUyMTkxMjM3OTg1/best-looking-shiny-pokemon-generation-1.jpg"
    },
    {
      titulo: "2ªGeração",
      id: 2,
      poster: "https://i.ytimg.com/vi/w4FE2FkrtZs/maxresdefault.jpg"
    },
    {
      titulo: "3ªGeração",
      id: 3,
      poster: "https://sm.ign.com/ign_pt/screenshot/default/broll_cbj7.jpg"
    },
    {
      titulo: "4ªGeração",
      id: 4,
      poster: "https://sm.ign.com/t/ign_pt/screenshot/default/gen4-1531453048844-1280w_a7eh.1200.jpg"
    },
    {
      titulo: "5ªGeração",
      id: 5,
      poster: "https://bestreamer.com/wp-content/uploads/2019/12/06-Snivy-Tepig-Oshawott.jpg"
    },
    {
      titulo: "6ªGeração",
      id: 6,
      poster: "https://sm.ign.com/ign_pt/screenshot/default/pokemon-starters_t9be.jpg"
    }
  ]


  return (
    <>

      <div className="flex gap-3">
        <h1 className="text-amber-400 text-4xl font-bold size-30px">Pokemon</h1>
        <ul>
          <li className="flex gap-5">
            <a className="text-cyan-100" href="#">ShinyDex</a>
            <a className="text-cyan-100" href="#">Favoritos</a>
            <a className="text-cyan-100" href="">Sobre</a>
          </li>
        </ul>
      </div>
      <div className="absolute">
        <img src="https://lh3.googleusercontent.com/05JfZ1ZdyzrRNvhJosUFdcjjJRFE7k2KhmeM2ujqeCbrcrCb1hkq7O_JdUBpQ3r9hi0YeSn4WgmKx3Ai8LHdM2SucxSzl9TRZ4fCAqETJ6WtHgE=w1440-e365" className="w-screen h-screen" />
      </div>
      <div className="flex flex-col">
        <section className="flex flex-wrap gap-2 w-full h-screen bg-black bg-opacity-50 blur-1 relative">
          {filmes.map(filme => <CardFilme filme={filme} />)}
        </section>
        <section className="flex flex-wrap gap-2 w-full h-screen bg-black bg-opacity-50 blur-1 relative">
          {pokemons.map(pokemon => <CardPokemon pokemon={pokemon} />)}
        </section>
      </div>

    </>
  )

}



