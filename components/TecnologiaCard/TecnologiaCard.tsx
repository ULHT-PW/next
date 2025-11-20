
interface TecnologiaProps {
    nome: string
    criador: string
    ano: number
}

export default function TecnologiaCard(props: TecnologiaProps) {

    return (
        <>
            <div className="flex flex-col items-center bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white p-3 m-2 rounded-full">
                <h2>{props.nome}</h2>
            </div>
        </>
    )
}