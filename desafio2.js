const fs = require('fs');


class Contenedor{
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    
    async save(data) {
        try{
            const array = await this.getAll();
            if (array.length == 0){
                data.id = 1
            }
            else{
                data.id = array[array.length - 1].id + 1;
            }
            array.push(data);
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(array));
            console.log(`Se guardo el producto ${data.title} con id ${data.id}`);
            return data.id;
        }
        catch(error){
            console.log(error);
        }
}
    async getAll() {
        try{
            const info = await fs.promises.readFile(this.nombreArchivo, 'utf8');
            return JSON.parse(info);
        }
        catch(error){
            console.log(error);
        }
    }
    async getById(id) {
        try{
            const array = await this.getAll();
            const resultado = array.find(item => item.id === id);
            if (resultado){
                console.log(resultado)
                return resultado;
            }
            else{
                console.log(`No se encontro el id ${id}`);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async deleteById(deleteId){
        try{
            const array = await this.getAll();
            const resultado = array.find(item => item.id === deleteId);
            if (resultado){
                const newArray = array.filter(item => item.id !== deleteId);
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(newArray));
                console.log(`Se elimino el archivo ${this.title} con id ${deleteId}`);
            }
            else{
                console.log(`No se encontro el id ${deleteId}`);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async deleteAll(){
        try{
            const array = [];
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(array));
            console.log(`Se eliminaron todos los archivos`);
        }
        catch(error){
            console.log(error);
        }
    }
}

module.exports = Contenedor