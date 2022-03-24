
//contiene los parametros que le asignamos de la llamada a las rutas de la api que necesito
export default async function apicall({
    url,
    method = "get",
    body,
    headers,
}) {
    try {
        const response = await fetch(url, {
            method,
            body,
            headers,
        });
        return response.json();
    } catch (err) {
        console.error(err);
    }
}