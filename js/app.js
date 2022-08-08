// Funcion login y bienvenida
/*
const bienvenidaUsuario = (username, password) => {
    alert('Login exitoso. Bienvenido ' + username)
}

const username = prompt('Ingresa tu nombre de usuario')
const password = prompt('Ingresa tu contraseña')
bienvenidaUsuario(username, password)
*/

// Datos de los jugadores
/*
const jugadores = [
    {nombreCompleto: 'Manuel Sanson', division: 'Primera', edad: 27, altura: 168, peso: 70, posicion: 'Medioscrum'},
    {nombreCompleto: 'Juan Pedro Torres', division: 'Primera', edad: 28, altura: 175, peso: 82, posicion: 'Centro'},
    {nombreCompleto: 'Facundo Suarez', division: 'Primera', edad: 30, altura: 182, peso: 120, posicion: 'Pilar'},
]

jugadores.push({nombreCompleto: 'Ignacio Iltis', division: 'Primera', edad: 23, altura: 178, peso: 75, posicion: 'Fullback'})
console.log(jugadores)

for (const jugador of jugadores) {
    console.log(jugador.nombreCompleto, jugador.peso)
}
*/

// Funcion para buscar jugadores por posicion
/*
const posicionJugador = jugadores.filter((jugador) => jugador.posicion == 'Pilar')
console.log(posicionJugador)
*/

// Funcion calculo de peso maximo
const calcularRM = (peso, numeroReps) => {
    let rm = peso / (1.0278 - 0.0278 * numeroReps)
    console.log('Tu RM en ' + ejercicio + ' es ' + rm)
}

const ejercicio = prompt('Selecciona el ejercicio (Sentadillas, Peso Muerto, Dominadas o Pecho Plano)').toLowerCase()

if (ejercicio == 'sentadillas' || ejercicio == 'peso muerto' || ejercicio == 'dominadas' || ejercicio == 'pecho plano') {
    const peso = prompt('Ingresa el peso')
    const numeroReps = prompt('Ingresa el número de repeticiones')
    calcularRM(peso, numeroReps)
} else {
    alert('No elegiste correctamente el ejercicio')
}


//Template literal de los ejercicios
class Ejercicio {
    constructor(nombre) {
        this.nombre = nombre
    }
}

const ejercicio1 = new Ejercicio('Sentadillas')
const ejercicio2 = new Ejercicio('Peso Muerto')
const ejercicio3 = new Ejercicio('Dominadas')
const ejercicio4 = new Ejercicio('Pecho Plano')

const ejercicios = [ejercicio1, ejercicio2, ejercicio3, ejercicio4]

const containerEjercicios = document.querySelector('#ejercicios')

ejercicios.forEach((ejercicio) => {
    const nuevaSection = document.createElement('section')
    nuevaSection.innerHTML = `
        <article class="ejercicio">
            <h3>${ejercicio.nombre}</h3>
            <h6>Peso (kg)</h6>
            <input type="Peso">
            <h6>Repeticiones</h6>
            <input type="Repeticiones">
            <h4>RM (kg): Resultado</h4>
        </article>
    `
    nuevaSection.className = 'ejercicio'
    containerEjercicios.append(nuevaSection)
})


//Buscador de ejercicios
const buscadorEjercicio = document.querySelector('#buscadorEjercicio')
console.log(buscadorEjercicio)

const buscarEjercicio = () => {
    document.querySelectorAll('.ejercicio').forEach(ejercicio => ejercicio.remove())

    const busqueda = buscadorEjercicio.value
    const resultadoBusqueda = ejercicios.filter((ejercicio) => ejercicio.nombre.toLowerCase().includes(busqueda))

    resultadoBusqueda.forEach((ejercicio) => {
        const nuevaSection = document.createElement('section')
        nuevaSection.innerHTML = `
            <article class="ejercicio">
                <h3>${ejercicio.nombre}</h3>
                <h6>Peso (kg)</h6>
                <input type="Peso">
                <h6>Repeticiones</h6>
                <input type="Repeticiones">
                <h4>RM (kg): Resultado</h4>
            </article>
        `
        nuevaSection.className = 'ejercicio'
        containerEjercicios.append(nuevaSection)
    })
} 

buscadorEjercicio.addEventListener('input', buscarEjercicio)