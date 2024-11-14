import axios from 'axios';
import Global from './Global';

export default class ServiceCoches {

    loginCoches(user) {
        return new Promise(function (resolve) {
            let request = "api/auth/login";
            let url = Global.urlApiCoches + request;

            axios.post(url, user).then((response) => {
                resolve(response);
            })
        })
    }

    getCoches() {
        return new Promise(function (resolve) {
            let coches = [];
            let request = "api/coches"
            let url = Global.urlApiCoches + request;
            // let token = Global.token;

            // axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
            //     console.log("Leyendo coches");
            //     coches = response.data;
            //     resolve(coches);
            // })

            axios.get(url).then(response => {
                console.log("Leyendo coches");
                coches = response.data;
                resolve(coches);
            })
        })
    }

    findCoche(idCoche) {
        return new Promise(function (resolve) {
            let request = `api/Coches/FindCoche/${idCoche}`;
            let url = Global.urlApiCoches + request;
            // let token = Global.token;

            // axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
            //     resolve(response.data);  
            // });

            axios.get(url).then(response => {
                resolve(response.data);  
            });
        });
    }

    insertCoche(coche) {
        return new Promise(function (resolve) {
            let request = "api/Coches/InsertCoche";
            let url = Global.urlApiCoches + request;
            // let token = Global.token;

            // axios.post(url, coche, { headers: { Authorization: "bearer " + token } }).then(response => {
            //     console.log("Insertando Coche");
            //     coche = response.data;
            //     resolve(response)
            // })

            axios.post(url, coche).then(response => {
                console.log("Insertando Coche");
                resolve(response)
            })
        })
    }

    updateCoche(coche) {
        return new Promise(function (resolve) {
            let request = "api/Coches/UpdateCoche";
            let url = Global.urlApiCoches + request;
            // let token = Global.token;
            
            // axios.put(url, coche, { headers: { Authorization: "bearer " + token } })
            //     .then(response => {
            //         console.log("Actualizando Coche");
            //         resolve(response);
            //     });

            axios.put(url, coche)
                .then(response => {
                    console.log("Actualizando Coche");
                    resolve(response);
                });
        });
    }
    deleteCoche(idCoche) {
        return new Promise(function (resolve) {
            let request = `api/Coches/DeleteCoche/${idCoche}`;
            let url = Global.urlApiCoches + request;
            // let token = Global.token;

            // axios.delete(url, { headers: { Authorization: "bearer " + token } })
            //     .then(response => {
            //         console.log("Eliminando Coche");
            //         resolve(response);
            //     });

            axios.delete(url)
                .then(response => {
                    console.log("Eliminando Coche");
                    resolve(response);
                });
        });
    }
}