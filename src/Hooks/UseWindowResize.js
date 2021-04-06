import React, {useState, useEffect} from 'react'

export default function UseWindowResize() {

    // Neu useState nhan vao tham so la 1 function no se chi chay 1 lan duy nhat khi khoi tao
    // const [size, setSize] = useState ({
        
    //         width: window.innerWidth,
    //         heght: window.innerHight  
    // });
    const [size, setSize] = useState(() => {
        return{
            width: window.innerWidth,
            height: window.innerHeight,
        }
    });


    useEffect(() => {
       window.addEventListener("resize", handleResive)
      }, []);


      const handleResive = () => {
          const {innerWidth, innerHeight} = window;
          console.log(innerWidth, innerHeight);

          setSize({
              width: innerWidth,
              heght: innerHeight,
          })
      }
    //   Custom hook se tra ve data thay vi jsx
    return{width: size.width, height: size.height}
}
