import React from 'react'

export default function XucXac({xucXac, xuLyXucXac}) {
    return (
        <div>
            {xucXac.map(item => (
                <img className="mx-2 " height="50px" width="70px" src={item.hinhAnh} alt="XucXac"/>
            ))}
            <img src="./imgbaucua/soc.png" alt="soc" className="mt-5" width="60%" onClick={xuLyXucXac}/>
        </div>
    )
}
