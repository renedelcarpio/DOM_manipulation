/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice
}

//web api
//Conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
//JSON -> Data -> Renderizar info en el browser
    .then ((responseJson) => {
        const todosLosItems = []
        responseJson.data.forEach(item => {
            //crear imagen
            const imagen = document.createElement("img")
            //URL de la imagen
                imagen.src = `${baseUrl}${item.image}`
                imagen.className = "imagen-palta"
            //crear título
            const title = document.createElement("h2")
                title.textContent = item.name
                title.className = "nombre-palta"
            //crear precio
            const price = document.createElement("div")
                price.textContent = formatPrice(item.price)
                price.className = "precio"
            //contenedor donde pondremos la imagen, el título y el precio
            const container = document.createElement("div")
                container.append(imagen, title, price)
                container.className = "palta"

            todosLosItems.push(container)
        });

        appNode.append(...todosLosItems)
    });