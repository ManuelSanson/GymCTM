// Formulario registro
const inputRegistrationEmail = document.querySelector('#registrationEmail')
const inputRegistrationUsername = document.querySelector('#registrationUsername')
const inputRegistrationPassword = document.querySelector('#registrationPassword')
const inputPasswordConfirmation = document.querySelector('#passwordConfirmation')

if (inputRegistrationEmail) {
    inputRegistrationEmail.addEventListener('change', () => {
        sessionStorage.setItem('registrationEmail', inputRegistrationEmail.value)
    })
}

if (inputRegistrationUsername) {
    inputRegistrationUsername.addEventListener('change', () => {
        sessionStorage.setItem('registrationUsername', inputRegistrationUsername.value)
    })
}

if (inputPasswordConfirmation) {
    inputPasswordConfirmation.addEventListener('change', () => {
        if (inputRegistrationPassword.value == inputPasswordConfirmation.value) {
            sessionStorage.setItem('registrationPassword', inputRegistrationPassword.value)
        } else {
            alert('Las contraseñas son diferentes')
        }
    })
}


//Formulario login, verificacion usuario
const registrationUsername = sessionStorage.getItem('registrationUsername')
const registrationPassword = sessionStorage.getItem('registrationPassword')


const inputLoginUsername = document.querySelector('#loginUsername')
const inputloginPassword = document.querySelector('#loginPassword')

if (inputLoginUsername) {
    inputLoginUsername.addEventListener('change', () => {
        sessionStorage.setItem('loginUsername', inputLoginUsername.value)
    })
}

if (inputloginPassword) {
    inputloginPassword.addEventListener('change', () => {
        sessionStorage.setItem('loginPassword', inputloginPassword.value)
    })
}

const btnIngresar = document.querySelector('#btnIngresar')

if (btnIngresar) {
    btnIngresar.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputLoginUsername.value != '' & inputloginPassword.value != '') {
            if (inputLoginUsername.value == registrationUsername &  inputloginPassword.value == registrationPassword) {
                alert('Bienvenido ' + inputLoginUsername.value)
                btnIngresar.addEventListener('click', location.href="../otherPages/perfilJugador.html")
            } else {
                alert('Usuario y/o contraseña incorrectos');
            }
        } else{
            alert('Debes ingresar tu nombre de usuario y contraseña o registrarte')
        }
    })
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
    if (containerEjercicios) {
        containerEjercicios.append(nuevaSection)
    }
})


//Buscador de ejercicios
const buscadorEjercicio = document.querySelector('#buscadorEjercicio')

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
                <input type="text" id="peso${ejercicio.nombre}">
                <h6>Repeticiones</h6>
                <input type="text" id="repeticiones${ejercicio.nombre}">
                <h4>RM (kg): Resultado</h4>
            </article>
        `
        nuevaSection.className = 'ejercicio'
        containerEjercicios.append(nuevaSection)
    })
} 

if (buscadorEjercicio) {
    buscadorEjercicio.addEventListener('input', buscarEjercicio)
}


// Funcion calculo de peso maximo
const calcularRM = (peso, numeroReps) => {
    let rm = peso / (1.0278 - 0.0278 * numeroReps)
    console.log('Tu RM en ' + ejercicio + ' es ' + rm)
}

// const ejercicio = prompt('Selecciona el ejercicio (Sentadillas, Peso Muerto, Dominadas o Pecho Plano)').toLowerCase()

// if (ejercicio == 'sentadillas' || ejercicio == 'peso muerto' || ejercicio == 'dominadas' || ejercicio == 'pecho plano') {
//     const peso = prompt('Ingresa el peso')
//     const numeroReps = prompt('Ingresa el número de repeticiones')
//     calcularRM(peso, numeroReps)
// } else {
//     alert('No elegiste correctamente el ejercicio')
// }