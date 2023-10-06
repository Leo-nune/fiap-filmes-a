"use client"

import { useEffect, useState } from "react"
import { PlusCircleIcon  } from '@heroicons/react/24/solid'
import { PlusCircleIcon as PlusCircleIconOutline } from '@heroicons/react/24/outline'

export default function CardFilme({filme}){
    const [ favorito, setFavorito ] = useState(false) // hooks

    useEffect(() => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(f => f.id === filme.id)
        setFavorito(favorito)
    }, [])

    function favoritar(){
        setFavorito(true)
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        favoritos.push(filme)
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }
    
    function desfavoritar(){
        setFavorito(false) 
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favoritosAtualizado = favoritos.filter(f => f.id !== filme.id )
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado))
    }


    return (
        <div className="flex flex-col items-center gap-1 w-40 m-2">
            

            <span className="font-bold text-lg w-full line-clamp-1 text-center">
                {filme.titulo}
            </span>
            <div className="relative">
             { favorito ? 
                <PlusCircleIcon 
                    className="h-6 w-6 text-green-600 absolute top-1 left-10 cursor-pointer"
                    onClick={desfavoritar}
                 />
                :
                <PlusCircleIconOutline
                    className="h-6 w-6 absolute top-1 left-10 cursor-pointer hover:text-green-600" 
                    onClick={favoritar}
                />
            }
            </div>
            <img className="rounded w-30" src={filme.poster} alt="poster do filme" />
            <div className="flex items-center gap-2">
            </div>
            <a href="../gen1" className="text-amber-400 bg-blue-800 w-full rounded text-center py-1 hover:text-amber-900">
                explorar
            </a>
        </div>
    )
}