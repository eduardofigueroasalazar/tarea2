var variableTarea = {
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    eliminarMascota: function (tipoDeMascota){
        var encontrado = this.mascotas.indexOf(tipoDeMascota)
        var siEncuentra = -1
        if (encontrado != siEncuentra){
            this.mascotas.splice(encontrado, 1)
            console.log('Tipo de mascota '+tipoDeMascota+' ha sido eliminado del arreglo.')
            return this.mascotas;
        }else{
            console.log('Tipo de mascota '+tipoDeMascota+' no ha sido encontrado en arreglo.')
            return this.mascotas;
        } 
    },
    eliminarUltimaMascota: function (){
        this.mascotas.pop();
        console.log('Se elimino ultimo elemento del arreglo.')
        return this.mascotas;
    },
    agregarMascota: function (tipoNuevoMascota){
        this.mascotas.splice(this.mascotas.length, 1, tipoNuevoMascota)
        console.log('Se agrego '+tipoNuevoMascota+' al arreglo mascotas.')
        return this.mascotas;
    },
    contadorMascotas: function (){
        var mensajeFuncion  = '';
        var cantidad        = 0;
        var cadenaBuscar    = 'os';
        this.mascotas.forEach(function(valorCadena, indiceCadena, arreglo){
            if (valorCadena.slice(-2) == cadenaBuscar){
                cantidad++
            }
        })
        mensajeFuncion = "En el arreglo hay "+cantidad+" mascotas que terminan con 'os'.";
        return mensajeFuncion;
    },
}

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}

const functionMensaje1 = function ({nombre, empresa, cargo, gustos, hijos}){
    var empresasTrabajador  = empresa.datos.nombre;
    var gustosTrabajador    = '';
    var hijosTrabajador     = '';
    var mensaje             = '';
    if (hijos == null){
        hijosTrabajador = '(no tiene hijos)'
    }
    gustos.forEach(function (gusto, indiceGusto){
        gustosTrabajador = gustosTrabajador+gusto+', '
    })
    mensaje = 'El trabajador '+ nombre +' trabaja en '+empresasTrabajador+' con cargo '+cargo+' y le gusta '+gustosTrabajador+''+''+hijosTrabajador+'.'
    console.log(mensaje)
}

const functionMensaje2 = function ({nombre, empresa, cargo, gustos, hijos}){
    var empresasTrabajador  = '';
    var mensaje             = '';
    empresa.clientes.forEach(function (empresas, indiceEmpresa){
        if (indiceEmpresa == 0){
            empresasTrabajador  = empresas+' y '
        }else{
            empresasTrabajador = empresasTrabajador+empresas
        }
    })
    mensaje = 'El trabajador '+nombre+' va a su trabajo en '+empresa.ubicación.comuna+', es '+cargo+', en el puesto '+empresa.ubicación.puesto+', trabaja con '+empresasTrabajador
    console.log(mensaje)
}