'use client'

import { Joke } from '@/models/interfaces'
import { Bold } from 'lucide-react'
import { useEffect, useState } from 'react'
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


export default function JokesPage() {


    //
    // Estados
    const [type, setType] = useState('programming')
    const [filteredJokes, setFilteredJokes] = useState<Joke[]>([])

    //
    // Obter (fetch) dados
    const url = 'https://official-joke-api.appspot.com/jokes/random/100'
    const { data: jokes, error, isLoading } = useSWR<Joke[]>(url, fetcher)

    //
    // Efeitos
    useEffect(()=>{
        if(!jokes) return
        setFilteredJokes(jokes.filter(joke => joke.type === type))
    }, [type, jokes])

    //
    // Renderizacao

    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>A descarregar dados</p>
    if (!filteredJokes) return <p>Não existem anedotas</p>

    return (
        <>
            {/* <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="text-2xl p-2 m-2 font-bold bg-blue-400 rounded-xl"
            >
                <option value="programming">Programming Jokes</option>
                <option value="general">General Jokes</option>
            </select> */}

            <button
                className={`p-2 m-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-xl ${type=='programming' ? 'font-bold': ''}`}
                onClick={() => setType('programming')}
            >
                Programming Jokes
            </button>

            <button
                className={`p-2 m-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-xl ${type=='general' ? 'font-bold': ''}`}
                onClick={() => setType('general')}
            >
                General Jokes
            </button>

            {filteredJokes.map(joke => (
                <div className="py-2 px-4 m-2 bg-yellow-400 rounded-2xl">
                    <p className="font-bold"> {joke.setup}</p>
                    <p> {joke.punchline}</p>
                </div>
            ))}
        </>
    )
}