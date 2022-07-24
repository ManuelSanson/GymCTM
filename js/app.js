const bienvenidaUsuario = (username, password) => {
    alert('Login exitoso. Bienvenido ' + username)
}


const username = prompt('Ingrese su username')
const password = prompt('Ingrese su password')
bienvenidaUsuario(username, password)