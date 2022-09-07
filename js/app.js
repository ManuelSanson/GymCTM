//Alerts
const alertError = Swal.mixin({
        icon: 'error',
        title: 'Oops...',
        background: 'url(../img/animalprint.jpg)',
        confirmButtonColor: '#000000',
})

//Obtener data de usuario por defecto
const traerDataUsuario = async () => {
    let users = []
    const existingUsers = localStorage.getItem('users')

    if (existingUsers && existingUsers != []) {
        return
    }

    try {
        const response = await fetch('../data/jugadores.json')
        const dataUsuario = await response.json()
        dataUsuario.forEach((dato) => {
            users.push(dato)
        })
        localStorage.setItem('users', JSON.stringify(users))


    } catch (error) {
        alertError.fire({
            text: 'Lo sentimos, ocurrió un error. Intentalo nuevamente.',
        })
        console.log(error)
    }
}
addEventListener('load', traerDataUsuario)

// Acceder a página de registro
const btnRegistrarme = document.querySelector('#btnRegistrarme')

if (btnRegistrarme) {
    btnRegistrarme.addEventListener('click', (e) => {
        e.preventDefault()
        location.href="../otherPages/registro.html"
        //"https://manuelsanson.github.io/GymCTM/otherPages/registro.html"
    })
}

// Formulario registro
const inputRegistrationNombreCompleto = document.querySelector('#registrationNombreCompleto')
const inputRegistrationEdad = document.querySelector('#registrationEdad')
const inputRegistrationDivision = document.querySelector('#registrationDivision')
const inputRegistrationPosicion = document.querySelector('#registrationPosicion')
const inputRegistrationAltura = document.querySelector('#registrationAltura')
const inputRegistrationPeso = document.querySelector('#registrationPeso')
const inputRegistrationEmail = document.querySelector('#registrationEmail')
const inputRegistrationUsername = document.querySelector('#registrationUsername')
const inputRegistrationPassword = document.querySelector('#registrationPassword')
const inputPasswordConfirmation = document.querySelector('#passwordConfirmation')
const btnConfirmarRegistro = document.querySelector('#btnConfirmarRegistro')

if (btnConfirmarRegistro) {
    btnConfirmarRegistro.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputRegistrationEmail.value != '' && inputRegistrationUsername.value != '' && inputRegistrationPassword.value != '' && inputPasswordConfirmation.value != '' && inputRegistrationNombreCompleto.value != '' && inputRegistrationEdad.value != '' && inputRegistrationDivision.value != '' && inputRegistrationPosicion.value != '' && inputRegistrationAltura.value != '' && inputRegistrationPeso.value != '') {
            if (inputRegistrationPassword.value == inputPasswordConfirmation.value) {
                const users = JSON.parse(localStorage.getItem('users'))
                const resultado = users.filter((user) => user.username == inputRegistrationUsername.value)
                const newUser = {username: inputRegistrationUsername.value, password: inputRegistrationPassword.value, email: inputRegistrationEmail.value, nombreCompleto: inputRegistrationNombreCompleto.value, edad: inputRegistrationEdad.value, division: inputRegistrationDivision.value, posicion: inputRegistrationPosicion.value, altura: inputRegistrationAltura.value, peso: inputRegistrationPeso.value}
                if (resultado.length == 0) {
                    users.push(newUser)
                    localStorage.setItem('users', JSON.stringify(users))
                    location.href="../index.html"
                    //"https://manuelsanson.github.io/GymCTM/index.html"
                } else {
                    alertError.fire({
                        text: 'Ya existe un usuario con este nombre de usuario. Por favor, elegí otro.',
                        })
                }
            } else {
                alertError.fire({
                text: 'Las contraseñas son diferentes',
                })
            }
        } else {
            alertError.fire({
                text: 'Completa todos los campos',
            })
        }
    })
}

//Formulario login, verificacion usuario
const registrationUsername = localStorage.getItem('registrationUsername')
const registrationPassword = localStorage.getItem('registrationPassword')
const inputLoginUsername = document.querySelector('#loginUsername')
const inputLoginPassword = document.querySelector('#loginPassword')
const btnIngresar = document.querySelector('#btnIngresar')

if (btnIngresar) {
    btnIngresar.addEventListener('click', (e) => {
        e.preventDefault()
        sessionStorage.setItem('inputLoginUsernameStored', inputLoginUsername.value)
        const users = JSON.parse(localStorage.getItem('users'))

        if (inputLoginUsername.value != '' && inputLoginPassword.value != '') {
            const resultado = users.filter((user) => user.username == inputLoginUsername.value && user.password == inputLoginPassword.value)
            if (resultado.length == 1) {
                Swal.fire({
                    text: ('Bienvenido ' + inputLoginUsername.value),
                    background: 'url(./img/animalprint.jpg)',
                    confirmButtonColor: '#000000',
                }) .then(() => location.href="../otherPages/perfilJugador.html"
                //"https://manuelsanson.github.io/GymCTM/otherPages/perfilJugador.html"
                )
            } else {
                alertError.fire({
                    text: 'Usuario y/o contraseña incorrectos',
                    background: 'url(./img/animalprint.jpg)'
                })
            }
        } else{
            alertError.fire({
                text: 'Debes ingresar tu nombre de usuario y contraseña o registrarte',
                background: 'url(./img/animalprint.jpg)'
            })
        }
    })
}

//Mostrar datos del jugador en el perfil
const nombreJugador = document.querySelector('#nombreJugador')
const datosJugador = document.querySelector('#datosJugador')

const mostrarDataJugadores = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    const inputLoginUsernameStored = sessionStorage.getItem('inputLoginUsernameStored')
    const resultado = users.filter((user) => user.username == inputLoginUsernameStored)
    if (resultado.length == 1) {
        resultado.forEach((dato) => {
            nombreJugador.innerHTML = `
                <h4>${dato.username}</h4>
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
    }
}

if (nombreJugador || datosJugador) {
    mostrarDataJugadores()
}

//Percepción del esfuerzo
const selectDiaRutina = document.querySelector('#selectDiaRutina')
const inputTiempoRutina = document.querySelector('#inputTiempoRutina')
const inputPercepcionRutina = document.querySelector('#inputPercepcionRutina')
const btnRegistroEntrenamiento = document.querySelector('#btnRegistroEntrenamiento')
const selectedDiaRutina = selectDiaRutina.value

if (btnRegistroEntrenamiento) {
    btnRegistroEntrenamiento.addEventListener('click', (e) => {
        e.preventDefault
        if (selectDiaRutina.value != '' && selectDiaRutina.value != 'Seleccionar' && inputTiempoRutina.value != '' && inputPercepcionRutina.value != '') {
            Swal.fire({
                title: '¡Bien entrenado!',
                text: `Hiciste el ${selectDiaRutina.value}. Te llevó ${inputTiempoRutina.value} minutos y tu percepción del esfuerzo fue ${inputPercepcionRutina.value}.`,
                background: 'url(../img/animalprint.jpg)',
                confirmButtonColor: '#000000',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } else{
            alertError.fire({
                text: 'Debes llenar todos los campos',
                background: 'url(../img/animalprint.jpg)'
            })
        }
    })
}

/*
console.log(document.querySelector('#diaRutina option:checked').value)

*/

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

//Cerrar sesion
const btnCerrarSesion = document.querySelector('#btnCerrarSesion')

if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', (e) => {
        e.preventDefault()
        location.href="../index.html"
        //"https://manuelsanson.github.io/GymCTM/index.html"
    })
}