export class SurveysLocalStorage {
    static NAME_ITEM = "data_survey_local";
    static TIEMPO_MAXIMO = 48; //HORAS

    constructor() {
    }

    static buscarRespuestasUsuario(datos, id) {
        for (let i = 0; i < datos.length; i++) {
            console.log(id)
            if (datos[i].id_user == id) {
                return i;
            }
        }
        return -1;
    }

    static leerLocalStorage() {
        const respuestasGuardadas = localStorage.getItem(this.NAME_ITEM);
        return JSON.parse(respuestasGuardadas)
    }

    static recuperarDatosLocalStorage(id) {
        const datosJson = this.leerLocalStorage();
        console.log(datosJson)
        if (datosJson) {
            let idx_usuario = this.buscarRespuestasUsuario(datosJson, id);
            
            if (idx_usuario != -1) {
                const fechaDeInsercion = datosJson[idx_usuario].fechaDeInsercion
                const fechaActual = Date.now()
                const diffTime = Math.abs(fechaActual - fechaDeInsercion)
                const diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
                if (diffHours <= this.TIEMPO_MAXIMO) {
                    return datosJson[idx_usuario]
                } else {
                    datosJson.splice(idx_usuario, 1) //Elimino las respuestas de ese usuario.
                    if (datosJson.length === 0) {
                        window.localStorage.removeItem(this.NAME_ITEM)
                    }
                    else {
                        localStorage.setItem(this.NAME_ITEM, JSON.stringify(datosJson)); //Guarda en el local storage
                    }
                    return null
                }
            }
        }

        throw "No se encontró información";
    }

    static eliminarDatos(id) {
        const datosJson = this.leerLocalStorage();
        let idx_usuario = this.buscarRespuestasUsuario(datosJson, id);
        if (idx_usuario != -1) {
            datosJson.splice(idx_usuario, 1) //Elimino las respuestas de ese usuario.
            if (datosJson.length === 0) {
                window.localStorage.removeItem(this.NAME_ITEM)
            }
            localStorage.setItem(this.NAME_ITEM, JSON.stringify(datosJson)); //Guarda en el local storage
        }
    }


  static guardarEnLocalStorage(id_user, datos_surveys) {
   // let _datos_surveys = 
        let datos = {
            fechaDeInsercion: Date.now(),
            datosSurveys: datos_surveys,//this.generateJsonToSend(),
            id_user: id_user
        }
        let datosLocalStorage = this.leerLocalStorage();
        if (!datosLocalStorage) {
            datosLocalStorage = []
            datosLocalStorage.push(datos); //Lo agrego al inicio del array para hacer más rápida su busqueda.
        }
        else {
            let idx = this.buscarRespuestasUsuario(datosLocalStorage, id_user);
            if(idx == -1){
                datosLocalStorage.push(datos);
            }else{
                datosLocalStorage[idx] = (datos);
            }
            /*
            if (idx == 1) {
                datosLocalStorage[idx] = datos
            }
            else {
                datosLocalStorage.splice(idx, 1); //Lo muevo al inicio porque hará las futuras inserciones más rápidamente.
                datosLocalStorage.push(datos);
            }*/
        }

        localStorage.setItem(this.NAME_ITEM, JSON.stringify(datosLocalStorage));


    }


}