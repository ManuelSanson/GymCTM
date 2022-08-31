//Alerts
const alertError = Swal.mixin({
        icon: 'error',
        title: 'Oops...',
        background: 'url(../img/animalprint.jpg)', 
        confirmButtonColor: '#000000',
})

// Formulario registro
const inputRegistrationEmail = document.querySelector('#registrationEmail')
const inputRegistrationUsername = document.querySelector('#registrationUsername')
const inputRegistrationPassword = document.querySelector('#registrationPassword')
const inputPasswordConfirmation = document.querySelector('#passwordConfirmation')

if (inputRegistrationEmail) {
    inputRegistrationEmail.addEventListener('change', () => {
        localStorage.setItem('registrationEmail', inputRegistrationEmail.value)
    })
}

if (inputRegistrationUsername) {
    inputRegistrationUsername.addEventListener('change', () => {
        localStorage.setItem('registrationUsername', inputRegistrationUsername.value)
    })
}

if (inputPasswordConfirmation) {
    inputPasswordConfirmation.addEventListener('change', () => {
        inputRegistrationPassword.value == inputPasswordConfirmation.value ? localStorage.setItem('registrationPassword', inputRegistrationPassword.value) :
        alertError.fire({
            text: 'Las contraseñas son diferentes',
        })
    })
}


//Formulario login, verificacion usuario
const registrationUsername = localStorage.getItem('registrationUsername')
const registrationPassword = localStorage.getItem('registrationPassword')


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
                Swal.fire({
                    text: ('Bienvenido ' + inputLoginUsername.value),
                    background: 'url(../img/animalprint.jpg)', 
                    confirmButtonColor: '#000000',
                }) .then(() => {btnIngresar.addEventListener('click', location.href="https://manuelsanson.github.io/GymCTM/otherPages/perfilJugador.html")})
            } else {
                alertError.fire({
                    text: 'Usuario y/o contraseña incorrectos',
                })
            }
        } else{
            alertError.fire({
                text: 'Debes ingresar tu nombre de usuario y contraseña o registrarte',
            })
        }
    })
}



//Template literal de los ejercicios
class Ejercicio {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre
    }
}

const ejercicio1 = new Ejercicio(1, 'Sentadillas')
const ejercicio2 = new Ejercicio(2, 'Peso Muerto')
const ejercicio3 = new Ejercicio(3, 'Dominadas')
const ejercicio4 = new Ejercicio(4, 'Pecho Plano')

const ejercicios = [ejercicio1, ejercicio2, ejercicio3, ejercicio4]

const containerEjercicios = document.querySelector('#ejercicios')

ejercicios.forEach((ejercicio) => {
    const nuevaSection = document.createElement('section')
    const idPeso = `inputPeso${ejercicio.id}`
    const idRep = `inputRep${ejercicio.id}`
    const idbtnCalcularRM = `btnCalcularRM${ejercicio.id}`
    const idTextoResultadoRM = `textoResultadoRM${ejercicio.id}`

    nuevaSection.innerHTML = `
        <article class="ejercicio">
            <h3>${ejercicio.nombre}</h3>
            <h6>Peso (kg)</h6>
            <input type="text" class="inputPeso" id="${idPeso}">
            <h6>Repeticiones</h6>
            <input type="text" class="inputRepeticiones" id="${idRep}">
            <button class="btnCalcularRM" id="${idbtnCalcularRM}">Calcular RM</button>
            <h4 id="${idTextoResultadoRM}"> </h4>
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
        const idPeso = `inputPeso${ejercicio.id}`
        const idRep = `inputRep${ejercicio.id}`
        const idbtnCalcularRM = `btnCalcularRM${ejercicio.id}`
        const idTextoResultadoRM = `textoResultadoRM${ejercicio.id}`

    nuevaSection.innerHTML = `
        <article class="ejercicio">
            <h3>${ejercicio.nombre}</h3>
            <h6>Peso (kg)</h6>
            <input type="text" class="inputPeso" id="${idPeso}">
            <h6>Repeticiones</h6>
            <input type="text" class="inputRepeticiones" id="${idRep}">
            <button class="btnCalcularRM" id="${idbtnCalcularRM}">Calcular RM</button>
            <h4 id="${idTextoResultadoRM}"> </h4>
        </article>
        `
        nuevaSection.className = 'ejercicio'
        containerEjercicios.append(nuevaSection)
    })
}

if (buscadorEjercicio) {
    buscadorEjercicio.addEventListener('input', buscarEjercicio)
}


//Calculo de peso maximo
const textoResultadoRMSentadillas = document.querySelector('#textoResultadoRM1')
const textoResultadoRMPM = document.querySelector('#textoResultadoRM2')
const textoResultadoRMDominadas = document.querySelector('#textoResultadoRM3')
const textoResultadoRMPechoPlano = document.querySelector('#textoResultadoRM4')


const calcularRMSentadillas = (peso, numeroReps) => {
    const RMSentadillas = Math.ceil(inputPesoSentadillas.value / (1.0278 - 0.0278 * inputRepSentadillas.value))
    textoResultadoRMSentadillas.innerHTML = `RM (kg): ${RMSentadillas}`
}

const calcularRMPM = (peso, numeroReps) => {
    const RMPM = Math.ceil(inputPesoPM.value / (1.0278 - 0.0278 * inputRepPM.value))
    textoResultadoRMPM.innerHTML = `RM (kg): ${RMPM}`
}

const calcularRMDominadas = (peso, numeroReps) => {
    const RMDominadas = Math.ceil(inputPesoDominadas.value / (1.0278 - 0.0278 * inputRepDominadas.value))
    textoResultadoRMDominadas.innerHTML = `RM (kg): ${RMDominadas}`
}

const calcularRMPechoPlano = (peso, numeroReps) => {
    const RMPechoPlano = Math.ceil(inputPesoPechoPlano.value / (1.0278 - 0.0278 * inputRepPechoPlano.value)) 
    textoResultadoRMPechoPlano.innerHTML = `RM (kg): ${RMPechoPlano}`
}


const inputPesoSentadillas = document.querySelector('#inputPeso1')
const inputRepSentadillas = document.querySelector('#inputRep1')
const btnCalcularRMSentadillas = document.querySelector('#btnCalcularRM1')

const inputPesoPM = document.querySelector('#inputPeso2')
const inputRepPM = document.querySelector('#inputRep2')
const btnCalcularRMPM = document.querySelector('#btnCalcularRM2')

const inputPesoDominadas = document.querySelector('#inputPeso3')
const inputRepDominadas = document.querySelector('#inputRep3')
const btnCalcularRMDominadas = document.querySelector('#btnCalcularRM3')

const inputPesoPechoPlano = document.querySelector('#inputPeso4')
const inputRepPechoPlano = document.querySelector('#inputRep4')
const btnCalcularRMPechoPlano = document.querySelector('#btnCalcularRM4')


if (btnCalcularRMSentadillas) {
    btnCalcularRMSentadillas.addEventListener('click',calcularRMSentadillas)}

if (btnCalcularRMPM) {
    btnCalcularRMPM.addEventListener('click', calcularRMPM)}

if (btnCalcularRMDominadas) {
    btnCalcularRMDominadas.addEventListener('click', calcularRMDominadas)}

if (btnCalcularRMPechoPlano) {
    btnCalcularRMPechoPlano.addEventListener('click', calcularRMPechoPlano)}



    //Obtener data para tabla del jugador
const imgJugador = document.querySelector('#imgJugador')
const nombreJugador = document.querySelector('#nombreJugador')
const datosJugador = document.querySelector('#datosJugador')

const mostrarDataJugadores = async () => {
    try {
        const response = await fetch('../data/jugadores.json')
        const dataJugadores = await response.json()
        dataJugadores.forEach((dato) => {
        
        imgJugador.innerHTML = `
        <img src="${dato.foto}" alt="Imagen de perfil">
        `

        nombreJugador.innerHTML = `
        <h4>${dato.nombreCompleto}</h4>
        `

        datosJugador.innerHTML = `
        <td>${dato.nombreCompleto}</td>
        <td>${dato.division}</td>
        <td>${dato.edad}</td>
        <td>${dato.altura}</td>
        <td>${dato.peso}</td>
        <td>${dato.posicion}</td>
    `
        })

    } catch (error) {
        alertError.fire({
            text: 'Lo sentimos, ocurrió un error. Intentalo nuevamente.',
        })
        console.log(error)
    }
}

if (imgJugador || nombreJugador || datosJugador) {
    mostrarDataJugadores()
}