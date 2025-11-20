"use client"

import Link from 'next/link'
import { useParams } from "next/navigation"
import tecnologias from '@/data/tecnologias.json'

export default function TecnologiaPage() {

    const params = useParams()
    const index = Number(params.tecnologia)

    return (
        <div className="flex flex-col justify-center items-center">
            <h2>Tecnologia {tecnologias[index].nome}</h2>
            <p>Criado por {tecnologias[index].criador} em {tecnologias[index].ano}.</p>

            <Link href="/tecnologias" className="mt-5">Voltar</Link>
        </div>
    )
}