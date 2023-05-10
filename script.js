
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

alert("Estos son los tratamientos:\n 1.- Masages\n  2.- Tratamiento Facial\n  3.- Tratamiento Corporal\n");

let tratamiento = parseInt(prompt("Cual deseas realizarte?\n 1.- Masages  2.- Tratamiento Facial  3.- Tratamiento Corporal"));


if(tratamiento == 1){
  
    let dia = prompt("Elige dia de la semana para el tratamiento").toLocaleLowerCase();

    if(dia == "lunes"){

        let  hora = prompt("Elige la hora que desees: ");
        alert(`Tu tratamiento de Masages sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);

    }else if(dia == "miercoles"){

        hora = prompt("Elige la hora que desees: ");

        alert(`Tu tratamiento de Masages sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);

    }else if(dia == "viernes"){
        
        hora = prompt("Elige la hora que desees: ");

        alert(`Tu tratamiento de Masages sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else{
        alert(`No hay turnos disponibles para el ${dia}`);
    }

}else if(tratamiento == 2){

    let dia = prompt("Elige dia de la semana para el tratamiento").toLocaleLowerCase();

    if(dia == "lunes"){

          hora = prompt("Elige la hora que desees: ");

        alert(`Tu Tratamiento Facial sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else if(dia == "miercoles"){
          hora = prompt("Elige la hora que desees: ");

        alert(`Tu Tratamiento Facial sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else if(dia == "viernes"){
          hora = prompt("Elige la hora que desees: ");

        alert(`Tu Tratamiento Facial sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else{
        alert(`No hay turnos disponibles para el ${dia}`);
    }

}else if(tratamiento == 3){

    let dia = prompt("Elige dia de la semana para el tratamiento").toLocaleLowerCase();

    if(dia == "lunes"){
          hora = prompt("Elige la hora que desees: ");

        alert(`Tu Tratamiento Corporal sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else if(dia == "miercoles"){
          hora = prompt("Elige la hora que desees: ");

        alert(`Tu Tratamiento Corporal sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else if(dia == "viernes"){
          hora = prompt("Elige la hora que desees: ");

        alert(`Tu Tratamiento Corporal sera el dia ${dia} a las ${hora}, en caso de cualquier imprevisto nuestro personal te llamara`);
    }else{
        alert(`No hay turnos disponibles para el ${dia}`);
    }
    
}else{
    alert("Opcion Incorrecta");
}


//Algoritmo para pagar

alert(`${nombre} Espero te hallas relajado y quedado como nuevo.\nPasa por recepcion para que canceles los tratamientos.`);

function pagoTotal(tratamientos, precio){
    alert(`Sumamos: ${tratamientos} a tu pago total`);

    itemTratamiento += `${tratamientos} \n`;
    precioTramiento += precio;
}

let tratamientoElegido = parseInt(prompt("Me indicas los tratamientos que te realizaste?\n 1. Masage -> $3000\n 2. Tratamiento Facil -> $5000\n 3. Tratamiento Corporal -> $8000\n 4. Terminar pago."));

let itemTratamiento = "";
let precioTramiento = 0;


while(tratamientoElegido != 4){
    switch(tratamientoElegido){
        case 1:

            pagoTotal("Masage", 3000);
        break;

        case 2:
            pagoTotal("Tratamiento Facial", 5000);
        break;

        case 3:
            pagoTotal("Tratamiento Corporal", 8000);
        break;

        default:
            alert("opcion incorrecta");
          
    }

    tratamientoElegido = parseInt(prompt("Otro tratamientos adicional?\n 1. Masage -> $3000\n 2. Tratamiento Facil -> $5000\n 3. Tratamiento Corporal -> $8000\n 4. Terminar pago."));

}

alert(`Tus tratamiento son:\n ${itemTratamiento}\n y el costo a pagar es de $${precioTramiento}`);