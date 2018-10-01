export class loginResp{
    id : number;
    id_Cq : number;
    fullName : string;
    token : string;
    constructor(id : number,id_cq: number,full : string,token : string){
        this.id = id;
        this.id_Cq = id_cq;
        this.fullName =full;
        this.token =token;
    }
}