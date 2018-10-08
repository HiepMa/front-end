import { Monhoc } from "./monhoc.class";

export class Parts {
    id : number;
    iD_MonHoc : number;
    ma : string;
    ten : string;
    hienthi : boolean;
    xoa: boolean;
    nguoitao: number;
    ngaytao: Date;
    nguoiCN : number;
    ngayCN : Date;
    khac : string;
    monHoc : Monhoc;
    
    constructor(id:number,iD_MonHoc : number,ma:string,ten:string,ht:boolean, xoa:boolean,nguoitao:number,nt:Date,ncn:number,ngaycn:Date,khac:string){
        this.id = id;
        this.iD_MonHoc = iD_MonHoc;
        this.ma = ma;
        this.ten = ten;
        this.hienthi = ht;
        this.xoa = xoa;
        this.nguoitao = nguoitao;
        this.ngaytao = nt;
        this.nguoiCN = ncn;
        this.ngayCN = ngaycn;
        this.khac = khac;
    }
}