export class Monhoc {
    id : number;
    ma : string;
    ten : string;
    hienThi : boolean;
    nguoiTao : number;
    ngayTao : Date;
    nguoiCN: number;
    ngayCN : Date;
    khac : string;

    constructor(ma:string,ten:string,ht:boolean,nguoitao:number,nt:Date,ncn:number,ngaycn:Date,khac:string){
        this.ma = ma;
        this.ten = ten;
        this.hienThi = ht;
        this.nguoiTao = nguoitao;
        this.ngayTao = nt;
        this.nguoiCN = ncn;
        this.ngayCN = ngaycn;
        this.khac = khac;
    }
}