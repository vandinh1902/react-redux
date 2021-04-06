import React from 'react'

export default function DanhSachCuoc({tienThuong, danhSachCuoc, xuLyDatCuoc}) {

    const thayDoiCuoc = (item, status) => {
        // status: thue/false <=> tang/giam
        xuLyDatCuoc(item, status);
    }
   
    return (
        <div className="container">
            <div className="row">
                {danhSachCuoc.map(item =>(
                    <div className="col-sm-4" key={item.ten}>
                        <img src={item.hinhAnh} alt="xucSac" width="100%"/>
                        <div className="mt-4 text-center p-2 bg-warning my-5">
                            <span className="mr-2">Cuoc :</span>
                            <button className="btn btn-success" 
                            disabled={!item.diemCuoc}  
                            onClick={() => thayDoiCuoc(item, false)}>-</button>
                            <span className="text-success mx-2">{item.diemCuoc}</span>
                            <button className="btn btn-success" 
                            // Neu tien thuong = 0 -> 0 cho phep tang cuoc
                            disabled={!tienThuong}  
                            onClick={() => thayDoiCuoc(item, true)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
