interface CheckServiceUsercase {
    execute(url: string):Promise<boolean>;
}
type SuecessCallback = () => void;
type ErrorCalback = (error: string) => void;



export class CheckService implements CheckServiceUsercase{
    // esta la inyeccion de dependencias que no es mas que un caso de uso reciba las dependencias que se necesitan utilizar
    // donde aca se le pide que use esa funcion o una de esas funciones para grabar en la bd
    constructor(
        private readonly successCallback: SuecessCallback,
        private readonly errorCallback:ErrorCalback
        
    ){}


    // se inserta la url que quiero probar de mi servicio web
    public async execute(url:string):Promise<boolean>{
        //inyeccion de dependencias
        try {
            const req = await fetch( url );
            if(!req.ok){
                throw new Error (`Error on check services ${url}`);
            }
            this.successCallback();
            
            return true;
        } catch (error) {

            this.errorCallback(`${error}`);
            console.log(`${error}`)
        return false;    
        }
    }
}
