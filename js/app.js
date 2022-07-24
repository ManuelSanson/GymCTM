// Funcion login y bienvenida

const bienvenidaUsuario = (username, password) => {
    alert('Login exitoso. Bienvenido ' + username)
}

const username = prompt('Ingresa tu nombre de usuario')
const password = prompt('Ingresa tu contraseña')
bienvenidaUsuario(username, password)



// Funcion calculo de peso maximo
const calcularRM = (peso, numeroReps) => {
    let rm = peso * numeroReps
    alert('Tu RM en este ejercicio es ' + rm)
}

const peso = prompt('Ingresa el peso')
const numeroReps = prompt('Ingresa el número de repeticiones')
calcularRM(peso, numeroReps)