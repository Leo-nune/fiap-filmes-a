import Pokedex from 'pokedex-promise-v2';

export default async function CardPokemon({pokemon}){
//     const options = {
//         protocol: 'https',
//         hostName: 'localhost:443',
//         versionPath: '/api/v2/',
//         cacheLimit: 100 * 1000, // 100s
//         timeout: 5 * 1000 // 5s
// }
    // const P = new Pokedex(options);

    const response = await fetch(pokemon.url) 
    const pokemon2 = await response.json()

    return (
        <div className="flex flex-col items-center justify-between gap-1 w-40 m-2 relative">
           
            <img className="rounded h-56" src={pokemon2?.sprites?.versions['generation-vi']['x-y'].front_default} alt="foto pokemon" />
            <span className="font-bold text-lg w-full line-clamp-1 text-center">
                {pokemon.name}
            </span>
        </div>

    )

    
}