window.alert("Aceptar en caso de tener 18 años o más");

let mensajeCosto = ""
let continuar = true

const mensajeInicial = "Ingresa el codigo de bebida que te interesa consultar. \n" +
    "a)Cerveza \n" +
    "b)Vino \n" +
    "c)Vodka \n" +
    "d)Gin \n" +
    "e)Fernet \n"

function iniciarConsulta() {
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()
    console.log(seleccion)

    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e") {
        console.warn("Ingresa un codigo valido, por favor.")
        return
    }

    switch (seleccion) {
        case "a":
            mensajeCosto = "Las Cervezas de 1 litro tienen un valor de $40"
            break

        case "b":
            mensajeCosto = "Los Vinos tienen un valor de $650"
            break

        case "c":
            mensajeCosto = "Las Vodka tienen un valor de $400"
            break

        case "d":
            mensajeCosto = "El Gin tiene un valor de $1200"
            break

        case "e":
            mensajeCosto = "El Fernet tiene un valor de $800"
            break

        default:
            console.error("hubo un error no esperado")
            break
    }
    alert(mensajeCosto)
}

function preguntarPrecios() {
    while (continuar) {
        iniciarConsulta()
        continuar = confirm("¿deseas consultar por otras bebidas")
    }
}

