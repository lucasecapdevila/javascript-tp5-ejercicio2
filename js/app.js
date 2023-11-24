//  Variables necesarias
const btnEnviarDatos = document.querySelector('.btn-success')
const btnMostrarDatos = document.querySelector('.btn-primary')
const btnGeneracion = document.querySelector('.btn-warning')
const btnMayorDeEdad = document.querySelector('.btn-danger')
const formularioDatos = document.querySelector('form')
let listaUsuarios = []

formularioDatos.onsubmit = (e) => {
  e.preventDefault()
  const inputNombre = document.getElementById('nombreUsuario').value
  const inputEdad = document.getElementById('edadUsuario').value
  const inputDNI = document.getElementById('dniUsuario').value
  const inputSexo = document.getElementById('sexoUsuario').value
  const inputPeso = document.getElementById('pesoUsuario').value
  const inputAltura = document.getElementById('alturaUsuario').value
  const inputAnioNacimiento = document.getElementById('anioNacimientoUsuario').value
  const inputDomicilio = document.getElementById('domicilioUsuario').value
  const usuario1 = new Persona(inputNombre, inputEdad, inputDNI, inputSexo, inputPeso, inputAltura, inputAnioNacimiento, inputDomicilio)
  listaUsuarios.push(usuario1)
  formularioDatos.reset()

  btnMostrarDatos.className = 'btn btn-primary ancho-btn-responsive d-block'
  btnEnviarDatos.className = 'btn btn-primary ancho-btn-responsive d-none'
}



//  Funciones
btnGeneracion.addEventListener('click', () => {
  listaUsuarios[0].mostrarGeneracion()
})

btnMayorDeEdad.addEventListener('click', () => {
  listaUsuarios[0].esMayorDeEdad()
})

btnMostrarDatos.addEventListener('click', () => {
  listaUsuarios[0].mostrarDatos()
})






class Persona{
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento, domicilio){
    this._nombre = nombre
    this._edad = edad
    this._dni = dni
    this._sexo = sexo
    this._peso = peso
    this._altura = altura
    this._anioNacimiento = anioNacimiento
    this._domicilio = domicilio
  }

  get nombre(){
    return this._nombre
  }

  set nombre(nuevoNombre){
    this._nombre = nuevoNombre
  }
  
  get edad(){
    return this._edad
  }

  set edad(nuevaEdad){
    this._edad = nuevaEdad
  }
  
  get dni(){
    return this._dni
  }

  set dni(nuevoDNI){
    this._dni = nuevoDNI
  }
  
  get sexo(){
    return this._sexo
  }

  set sexo(nuevoSexo){
    this._sexo = nuevoSexo
  }
  
  get peso(){
    return this._peso
  }

  set peso(nuevoPeso){
    this._peso = nuevoPeso
  }
  
  get altura(){
    return this._altura
  }

  set altura(nuevaAltura){
    this._altura = nuevaAltura
  }
  
  get anioNacimiento(){
    return this._anioNacimiento
  }
  
  set anioNacimiento(nuevoAnioNacimiento){
    this._anioNacimiento = nuevoAnioNacimiento
  }
  
  get domicilio(){
    return this._domicilio
  }

  set domicilio(nuevoDomicilio){
    this._domicilio = nuevoDomicilio
  }

  mostrarGeneracion(){
    if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario pertenece a la Generación Silent Generation. Rasgo característico: Austeridad",
        icon: "info"
      });
    } else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario pertenece a la Generación Baby Boom. Rasgo característico: Ambición",
        icon: "info"
      });
    } else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario pertenece a la Generación X. Rasgo característico: Obsesión por el éxito",
        icon: "info"
      });
    } else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario pertenece a la Generación Y (también conocidos como millenials). Rasgo característico: Frustración",
        icon: "info"
      });
    } else if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario pertenece a la Generación Z. Rasgo característico: Irreverencia",
        icon: "info"
      });
    } else{
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario no pertenece a una generación en específico o se ingresó un valor inválido.",
        icon: "info"
      });
    }
  }

  esMayorDeEdad(){
    if (this.edad >= 18) {
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario es mayor de edad",
        icon: "info"
      });
    } else {
      Swal.fire({
        title: `Usuario: ${listaUsuarios[0].nombre}`,
        text: "El usuario es menor de edad",
        icon: "info"
      });
    }
  }
  
  mostrarDatos(){
    Swal.fire({
      title: `<h2>Usuario: ${listaUsuarios[0].nombre}</h2>`,
      html: 
        `<p>Edad del usuario: ${listaUsuarios[0].edad}</p>
        <p>DNI del usuario: ${listaUsuarios[0].dni}</p>
        <p>Sexo del usuario: ${listaUsuarios[0].sexo}</p>
        <p>Peso del usuario: ${listaUsuarios[0].peso}kg</p>
        <p>Altura del usuario: ${listaUsuarios[0].altura}cm</p>
        <p>Año de Nacimiento del usuario: ${listaUsuarios[0].anioNacimiento}</p>
        <p>Domicilio del usuario: ${listaUsuarios[0].domicilio}</p>
        `,
      icon: "info"
    });
  }
}