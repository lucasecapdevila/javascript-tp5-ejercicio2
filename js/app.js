const btnDatos = document.querySelector('.btn-success')
const btnGeneracion = document.querySelector('.btn-warning')
const btnMayorDeEdad = document.querySelector('.btn-danger')
const formularioDatos = document.querySelector('form')

const obtenerDatos = (e) => {
  e.preventDefault()
  console.log('En espera');
}

formularioDatos.addEventListener('submit', obtenerDatos)



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
      console.log('La persona pertenece a la Generación Silent Generation. Rasgo característico: Austeridad')
    } else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
      console.log('La persona pertenece a la Generación Baby boom. Rasgo característico: Ambición');        
    } else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
      console.log('La persona pertenece a la Generación X. Rasgo característico: Obsesión por el éxito');
    } else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
      console.log('La persona pertenece a la Generación Y. Rasgo característico: Frustración');
    } else if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
      console.log('La persona pertenece a la Generación Z. Rasgo característico: Irreverencia');
    } else{
      console.log('La persona no pertenece a una generación en específico o se ingresó un valor inválido.');
    }
  }

  esMayorDeEdad(){
    if (this.edad >= 18) {
      console.log('La persona es mayor de edad')
    } else {
      console.log('La persona es menor de edad')
    }
  }

  mostrarDatos(){
    document.write(`
      <h2>Persona: ${this.nombre}</h2>
      <ul>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}kg</li>
        <li>Altura: ${this.altura}cm</li>
        <li>Año de Nacimiento: ${this.anioNacimiento}</li>
        <li>Domicilio: ${this.domicilio}</li>
      </ul>
      <hr>
    `)
  }
}