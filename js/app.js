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



// Datos de los jugadores
const jugadores = [
    {nombreCompleto: 'Manuel Sanson', division: 'Primera', edad: 27, altura: 168, peso: 70, posicion: 'Medioscrum'},
    {nombreCompleto: 'Juan Pedro Torres', division: 'Primera', edad: 28, altura: 175, peso: 82, posicion: 'Centro'},
    {nombreCompleto: 'Facundo Suarez', division: 'Primera', edad: 30, altura: 182, peso: 120, posicion: 'Pilar'},
]
console.log(jugadores)

jugadores.push({nombreCompleto: 'Ignacio Iltis', division: 'Primera', edad: 23, altura: 178, peso: 75, posicion: 'Fullback'})
console.log(jugadores)

for (const jugador of jugadores) {
    console.log(jugador.nombreCompleto, jugador.peso)
}