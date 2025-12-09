"use client"

import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'
import tecnologias from '@/data/tecnologias.json'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function TecnologiasPage() {

    // Gestão de Estados
    // Começa com 0 (sem tocar no localStorage no servidor)
    const [gosto, setGosto] = useState(0)
    

    // Event handlers
    function aumentarGosto() {
        setGosto(gosto+1)
    }

    // Efeitos

    // Carrega o valor de localStorage após montar no browser
    useEffect(() => {
        const stored = localStorage.getItem("gosto")
        if (stored) setGosto(Number(stored))
    }, [])

    useEffect(() => {
        console.log("Bemvindo!")
    }, [])

    useEffect(() => {
        console.log("Gosto foi atualizado:", gosto)
        localStorage.setItem('gosto', `${gosto}`)
    }, [gosto])

    // Renderização de Código
    return (
        <>
            <h2>Página Tecnologias</h2>

            <p>Nesta aplicação utilizamos várias tecnologias</p>

            {tecnologias.map((tecnologia, index) => (
                <Link href={`/tecnologias/${index}`} key={index}>
                    <TecnologiaCard
                        nome={tecnologia.nome}
                        criador={tecnologia.criador}
                        ano={tecnologia.ano}
                    />
                </Link>
            ))}

            <p>O quanto eu gosto destas tecnologias: {gosto}</p>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 p-2 rounded-xl"
                onClick={aumentarGosto}
            >
                Gosto ainda mais!
            </button>
        </>
    )
}