import React from 'react'

export default function DataBindingFunction() {

    let a = "hello";
    let content = "Hello Cybersoft";

    const xuatThongTin = (name, age) => {
        return(
            <>
            <p>{name}</p>
            <p>{age}</p>

            
            </>
        )
    }
    return (
        <div>
            <p>{a}</p>
            <p>{content}</p>
            {xuatThongTin('Dinh Ngo', 23)}
        </div>
    )
}
