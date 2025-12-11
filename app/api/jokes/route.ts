export async function GET() {

    // Obter dados da API externa
    const url = 'https://official-joke-api.appspot.com/jokes/random/400'
    const res = await fetch(url)

    if(!res.ok)
        return Response.json("Erro", {status: res.status})

    const data = await res.json()

    // Enviar os dados ao frontend
    return Response.json(data, {status: 200})
}