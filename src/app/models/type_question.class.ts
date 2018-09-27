export class Type_Question{
    id : number;
    maLoai : string;
    tenLoai : String;
    hienThi : boolean;
    khac : string;

    constructor(maLoai : string,TenLoai : string,ht:boolean,khac:string){
        this.maLoai = maLoai;
        this.tenLoai = TenLoai;
        this.hienThi =ht;
        this.khac = khac;
    }
}