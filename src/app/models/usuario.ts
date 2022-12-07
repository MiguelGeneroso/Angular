export class Usuario {

    constructor(public id_usuario : number,
        public nombre : String,
        public apellidos : String,
        public correo : String,
        public foto : String,
        public pass : String){

    }

    public nombreCompleto() : string{

        return this.nombre + " " + this.apellidos;
    }
}
