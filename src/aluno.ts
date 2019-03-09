export class Aluno{

    constructor (private ra:number,private nome:string){
        
    }

    mostra():void{
        console.log(this.ra,this.nome);

    }

}