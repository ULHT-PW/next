
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'
import tecnologias from '@/data/tecnologias.json'
import Link from 'next/link'

export default function TecnologiasPage() {
    return (
        <>
            <h2>Página Tecnologias</h2>

            <p>Nesta aplicação utilizamos várias tecnologias</p>

            {tecnologias.map((tecnologia, index) => (
                <Link href={`/tecnologias/${index}`}>
                    <TecnologiaCard
                        nome={tecnologia.nome}
                        criador={tecnologia.criador}
                        ano={tecnologia.ano}
                    />
                </Link>
            ))}
        </>
    )
}