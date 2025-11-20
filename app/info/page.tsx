
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'

export default function InfoPage() {
    return (
        <>
            <h2>Página Info</h2>

            <p>Nesta aplicação utilizamos várias tecnologias</p>

            <TecnologiaCard 
                nome="HTML"
                criador="Tim Berners-Lee"
                ano={1991}
            />
            
            <TecnologiaCard 
                nome="CSS"
                criador="Hanok Wum Lie"
                ano={1996}
            />
            
            <TecnologiaCard 
                nome="JavaScript"
                criador="Brnadan Eich"
                ano={1995}
            />

            <TecnologiaCard 
                nome="React"
                criador="Facebook"
                ano={2013}
            />

        </>
    )
}