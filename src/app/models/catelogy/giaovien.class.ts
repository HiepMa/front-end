export class GiaoVien{
    id : number;
    id_Cq : number;
    ma : string;
    ho : string;
    ten: string;
    matKhau : string;
    gioiTinh : string;
    email : string;
    dienThoai : string;
    diaChi : string;
    ngaySinh : Date;
    hienThi : boolean;
    xoa: boolean;
    nguoiTao : number;
    ngayTao : Date;
    nguoiCN : number;
    ngayCN : Date;
    khac_GV :string;
    constructor(id:number,ma : string,ho : string, ten: string, matKhau : string, gioitinh : string, email : string, dienThoai : string, diaChi : string, ngaySinh : Date, hienThi : boolean,xoa : boolean, nguoiTao : number, ngayTao : Date, nguoiCN : number, ngayCN : Date, khac_GV :string){
        this.id = id;
        this.ma = ma
        this.ho = ho;
        this.ten= ten;
        this.matKhau = matKhau;
        this.gioiTinh = gioitinh;
        this.email = email;
        this.dienThoai = dienThoai;
        this.diaChi = diaChi;
        this.ngaySinh = ngaySinh;
        this.hienThi = hienThi;
        this.xoa = xoa;
        this.nguoiTao = nguoiTao;
        this.ngayTao = ngayTao;
        this.nguoiCN = nguoiCN;
        this.ngayCN = ngayCN;
        this.khac_GV = khac_GV;
    }

}