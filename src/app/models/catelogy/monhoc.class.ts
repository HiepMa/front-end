export class Monhoc {
    id : number;
    ma : string;
    ten : string;
    hienThi : boolean;
    xoa: boolean;
    nguoiTao : number;
    ngayTao : Date;
    nguoiCN: number;
    ngayCN : Date;
    khac : string;

    constructor(id: number,ma:string,ten:string,ht:boolean, xoa:boolean,nguoitao:number,nt:Date,ncn:number,ngaycn:Date,khac:string){
        this.id = id;
        this.ma = ma;
        this.ten = ten;
        this.hienThi = ht;
        this.xoa = xoa;
        this.nguoiTao = nguoitao;
        this.ngayTao = nt;
        this.nguoiCN = ncn;
        this.ngayCN = ngaycn;
        this.khac = khac;
    }
}