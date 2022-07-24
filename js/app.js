// Funcion login y bienvenida
const bienvenidaUsuario = (username, password) => {
    alert('Login exitoso. Bienvenido ' + username)
}

const username = prompt('Ingresa tu nombre de usuario')
const password = prompt('Ingresa tu contraseña')
bienvenidaUsuario(username, password)


// Funcion calculo de peso maximo
const calcularRM = (peso, numeroReps) => {
    let rm = peso / (1.0278 - 0.0278 * numeroReps)
    alert('Tu RM en ' + ejercicio + ' es ' + rm)
}

const ejercicio = prompt('Selecciona el ejercicio (Sentadillas, Peso Muerto, Dominadas o Pecho Plano)')
const peso = prompt('Ingresa el peso')
const numeroReps = prompt('Ingresa el número de repeticiones')
calcularRM(peso, numeroReps)


// Datos del jugador
class Jugador{
    constructor(nombreCompleto, division, edad, altura, peso, posicion){
        this.nombreCompleto = nombreCompleto
        this.division = division
        this.edad = edad
        this.altura = altura
        this.peso = peso
        this.posicion = posicion
    }
}