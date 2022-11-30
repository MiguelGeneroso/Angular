export class Usuario {

    constructor(public id_usuario : Number,
        public nombre : String,
        public apellidos : String,
        public correo : String,
        public url : String,
        public password : String){

    }

    public nombreCompleto() : string{

        return this.nombre + " " + this.apellidos;
    }
}
