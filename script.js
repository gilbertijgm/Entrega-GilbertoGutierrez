



//algoritmo para bienvenida al spa y reservar usando if else
alert("Bienvenidos a mi Spa");

let cliente = prompt("Eres cliente de nuestro Spa? SI/NO").toLocaleLowerCase();

if(cliente == "si"){
    
    let nombre = prompt("Me indicas tu nombre");
    alert(`Bienvenido ${nombre} es un placer tenerte de nuevo en nuestras instalaciones`);
}else if(cliente == "no"){
    nombre = prompt("Me indicas tu nombre");
    alert(`Bienvenido ${nombre} es un placer conocerte, tenemos muchos tratamientos para que te sientas como nuev@`)
}


//Algoritmo para elegir tratamiento
class Tratamientos{
    constructor(id,tratamiento,precio){
        this.id = id,
        this.tratamiento = tratamiento,
        this.precio = precio
    }
}

const tratamiento1 = new Tratamientos(1,"Masages", 5000);
const tratamiento2 = new Tratamientos(2,"Tratamiento Facial", 8000);
const tratamiento3 = new Tratamientos(3,"Tratamiento Corporal", 12000);

const TRATAMIENTOS = [tratamiento1,tratamiento2,tratamiento3];

function selecTratamiento(){
    let selecTrata = "Estos son los tratamientos, Cual deseas realizarte?: \n "
    //mostramos la informacion de los tratamientos disponibles al usuario
    TRATAMIENTOS.forEach(e => {
        selecTrata += `${e.id} - ${e.tratamiento} - $${e.precio} \n`
    })
    //obtenemos opcion del usuario
    let opcionTratamiento = parseInt(prompt(selecTrata));

    //individualizamos tratamientos escogidos por el usuario
    return TRATAMIENTOS.find(elem => elem.id === opcionTratamiento)

}


//algoritnmo para elegir dia y hora del tratamiento
class Agenda{
    constructor(id,dia, hora){
        this.id = id
        this.dia = dia,
        this.hora = hora
        
    }
}

const agenda1 = new Agenda(1,"Lunes","10:00");
const agenda2 = new Agenda(2,"Martes","12:00");
const agenda3 = new Agenda(3,"Miercoles","14:00");
const agenda4 = new Agenda(4,"Jueves","16:00");
const agenda5 = new Agenda(5,"Viernes","18:00");
const agenda6 = new Agenda(6,"Sabado","20:00");

const agendas = [agenda1,agenda2,agenda3,agenda4,agenda5,agenda6];

function fechaHora(){
    let fechas = "Estas son las fechas y horarios disponibles, seleccione el dia segun su id: \n";
    //mostramos la informacion de las fechas disponibles al usurio
    agendas.forEach(e => {
        fechas += `${e.id} - ${e.dia} - ${e.hora} \n`
    })
    //obtenemos opcion del usuario
    let opcionFecha = parseInt(prompt(fechas));

    //individualizamos fecha escogida por el usuario
    return agendas.find(elem => elem.id === opcionFecha)
}


//esta funcion recibe lo datos del los elementos individualizados
function mensajeFinal(tratamiento, fecha){
    
    alert(`Se teh agendo el dia ${fecha.dia} a las ${fecha.hora} para realizarte un ${tratamiento.tratamiento}. El costo que debes pagar es de $${tratamiento.precio}.`)
}

const tratamientoSeleccionada = selecTratamiento();
const fechaSeleccionada = fechaHora();
mensajeFinal(tratamientoSeleccionada, fechaSeleccionada);

alert("¡Te esperamos con todo el entusiasmo para hacerte sentir como nuevo!");


