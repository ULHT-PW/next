'use client'

import { Joke } from "@/models/interfaces"
import { useParams } from "next/navigation"
import { useState } from "react"
import useSWR from 'swr'

// 
// Função auxiliar
const fetcher = async (url: string) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Erro: ${res.status}`)
    }
    return res.json()
}

export default function JokePage() {

    // Variaveis e Estados
    const params = useParams() // params = { id: '246' }
    const id = params.id
    const [visivel, setVisivel] = useState(false)

    // Fetch de dados
    const url = '/api/jokes/' + id
    const { data: joke, error, isLoading } = useSWR<Joke>(url, fetcher)

    //
    // Renderizacao

    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>A descarregar dados</p>
    if (!joke) return <p>Não existe a anedota!</p>

    return (
        <article 
            className="min-h-[70vh] p-5 rounded-xl flex flex-col items-center justify-center bg-yellow-500"
        >
            <button 
                className="font-bold"
                onClick={()=>setVisivel(!visivel)}
            >
                {joke.setup}
            </button>
            { visivel && <p>{joke.punchline}</p> }
        </article>
    )
}