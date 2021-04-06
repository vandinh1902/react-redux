import React,{useState, useEffect} from 'react'
import { CarouselCaption } from 'reactstrap';
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';

const danhSachXucSac = [
    {ten:'Nai',
    hinhAnh:'./imgbaucua/nai.png',
    },
    {ten:'Bau',
    hinhAnh:'./imgbaucua/bau.png',
    },
    {ten:'Ga',
    hinhAnh:'./imgbaucua/ga.png',
    },
    {ten:'Ca',
    hinhAnh:'./imgbaucua/ca.png',
    },
    {ten:'Cua',
    hinhAnh:'./imgbaucua/cua.png',
    },
    {ten:'Tom',
    hinhAnh:'./imgbaucua/tom.png',
    },
    
    
    
]

export default function BauCua() {
    const [tienThuong, setTienThuong] = useState(500)
    const [danhSachCuoc, setDanhSachCuoc] = useState(()=> {
        return danhSachXucSac.map((item) => ({
            ...item,
            diemCuoc: 0,
        })) 
    });
    const [xucXac, setXucXac] = useState([
        {ten:'Bau',
    hinhAnh:'./imgbaucua/bau.png',
    },
    {ten:'Bau',
    hinhAnh:'./imgbaucua/bau.png',
    },
    {ten:'Bau',
    hinhAnh:'./imgbaucua/bau.png',
    },
    ])

    const xuLyDatCuoc = (item, status) => {
        const newDSCuoc = danhSachCuoc.map((cuoc) => {
            if(cuoc.ten === item.ten) {
                return{...cuoc,
                diemCuoc: status ? cuoc.diemCuoc + 100 : cuoc.diemCuoc - 100,}
            }
            return cuoc;
        })
        setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
        setDanhSachCuoc(newDSCuoc);
    };

    const xuLyXucXac = () => {
        const newXucXac = xucXac.map(item => {
            // Math.random() = (max + 1) + min
            const random = Math.floor(Math.random() * 6);
            return danhSachXucSac[random];
        })
        setXucXac(newXucXac);
    };

    useEffect(() => {
        const danhSachDatCuoc = danhSachCuoc.filter(item => item.diemCuoc)
        let tongDiem = 0

        danhSachDatCuoc.forEach(item => {
            const found = xucXac.find(cuoc => cuoc.ten === item.ten)
            // Tim thay xuc xac trung voi item trong danh sach dat cuoc
            if(found){
                tongDiem += item.diemCuoc;
            }
            // Duyet qua mang xucXac de tinh tien thang cuoc

           
        })
        xucXac.forEach((item) =>{
            const found = danhSachDatCuoc.find((cuoc) => cuoc.ten === item.ten);

            if(found){
                tongDiem += found.diemCuoc;
            }
        })

        const newDSCuoc = danhSachCuoc.map((item) => ({
            ...item,
            diemCuoc: 0,
            
        }))
        setDanhSachCuoc(newDSCuoc)
        setTienThuong(tienThuong + tongDiem)
    }, [xucXac])
    return (
        <div className="bg-secondary baucua-container">
            <div className="baucua-logo w-75 mx-auto">
                <img src="./imgbaucua/Logo.png" alt="Logo" width="100%"/>
            </div>
            <div className="bg-warning w-25 mx-auto">
                <p style={{fontSize:"25px", border:"1px solid rgb(0,0,0)", textAlign:"center"}}> Tien Thuong : {tienThuong}</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 ">
                        <DanhSachCuoc tienThuong={tienThuong} danhSachCuoc = {danhSachCuoc} xuLyDatCuoc={xuLyDatCuoc}/>
                    </div>
                    <div className="col-sm-4">
                        <XucXac xucXac={xucXac} xuLyXucXac={xuLyXucXac}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
