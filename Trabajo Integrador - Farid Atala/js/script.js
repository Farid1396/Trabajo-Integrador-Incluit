import Form from './modules/form-by-steps/form.js';

class Main extends Form {

    constructor() {
        super();
        console.log('Script init');
        
    // // En el paso 2 al seleccionar los hijos menores de 18 años debe mostrar
    // // los datos a completar de los hijos según el número de los mismos, por
    // // lo tanto se deberia copiar la fila Child #1 y generar para los demás,
    // // si se cambia nuevamente el número de hijos éste debe cambiar también por
    // // lo que si selecciona None o al inicio no debe mostrar dicha fila Child #1

    }
}

let main = new Main();