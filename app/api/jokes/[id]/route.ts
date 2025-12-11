export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
 
    const { id } = await params;

    // Obter os dados da API
    const url = 'https://official-joke-api.appspot.com/jokes/' + id

    const res = await fetch(url)
    const data = await res.json()

    // Enviar os dados para o frontend
    return Response.json(data, {status: 200})
}