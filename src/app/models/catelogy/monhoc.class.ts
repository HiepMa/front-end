export class Monhoc {
    id : number;
    ma : string;
    ten : string;
    hienthi : boolean;
    nguoitao : number;
    ngaytao : Date;
    nguoiCN: number;
    ngayCN : Date;
    khac : string;

    constructor(ma:string,ten:string,ht:boolean,nguoitao:number,nt:Date,ncn:number,ngaycn:Date,khac:string){
        this.ma = ma;
        this.ten = ten;
        this.hienthi = ht;
        this.nguoitao = nguoitao;
        this.ngaytao = nt;
        this.nguoiCN = ncn;
        this.ngayCN = ngaycn;
        this.khac = khac;
    }
}