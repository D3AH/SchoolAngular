export class Person {
    public nombre: string;
    public segundoNombre: string;
    public apellido: string;
    public segundoApellido: string;
    public apellidoCasada: string;
    public fechaNacimiento: string;
    public religión: string;
    public email: string;
    public genero: string;
    public departamento: string;
    public municipio: string;
    public zona: string;
    public colonia: string;
    public avenida: string;
    public calle: string;
    public sector: string;
    public numeroCasa: string;
    public numeroCelular: number;
    public numeroDomicilio: number;
    public numeroOtro: number;


    constructor();

    constructor(
        nombre?: string,
        segundoNombre?: string,
        apellido?: string,
        segundoApellido?: string,
        apellidoCasada?: string,
        fechaNacimiento?: string,
        religión?: string,
        email?: string,
        genero?: string,
        departamento?: string,
        municipio?: string,
        zona?: string,
        colonia?: string,
        avenida?: string,
        calle?: string,
        sector?: string,
        numeroCasa?: string,
        numeroCelular?: number,
        numeroDomicilio?: number,
        numeroOtro?: number
    ) {}
}