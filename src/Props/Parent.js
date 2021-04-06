import React, { Component } from 'react'
import Card from './Card'
import Child from './Child'
import Student from './Student'
import SuperCard from './SuperCard'

export default class Parent extends Component {


    constructor(props){
        super(props)
        this.state={
            student:[
                {id: 1, name: "Dinh", age: 23, score: 8.5},
                {id: 2, name: "Dinh1", age: 23, score: 8.5},
                {id: 3, name: "Dinh2", age: 23, score: 8.5}

            ],
            product:[
                {id: 1, name: "XS MAX", price: 10000000},
                {id: 2, name: "11 PRO MAX", price: 20000000},
                {id: 3, name: "12 PRO MAX", price: 30000000}
            ]
        }
    }

    render() {
        return (
            <div className="container">
                {/* Props-name="value" */}
                <Child message="Cybersoft"/>
                <Child message="FE62"/>
                <Child message="Reactjs"/>
                <h1>Student</h1>
                <div className="row">
                
                {this.state.student.map(student => {
                    return(
                        <div className="col-sm-4">
                            <Card key={student.id} student={student}/>
                        </div>
                        
                    )
                })}
                </div>
                <h1>Sử dụng props children</h1>
                <div className="row">
                
                {this.state.student.map(student => {
                    return(
                        <div className="col-sm-4" key={student.id}>
                            <SuperCard  title="Hello" footer={() => (
                                <button className="btn btn-success">Chi tiết</button>
                            )}>
                                <h3 className="text-secondary">{student.name}</h3>
                                <p className="text-success">{student.age}</p>
                                
                            </SuperCard>
                        </div>
                        
                    )
                })}
                </div>
                <h1>DINH STORY</h1>
                <div className="row">
                
                {this.state.product.map(product => {
                    return(
                        <div className="col-sm-4" key={product.id}>
                            <SuperCard  title="Products" footer={() => (
                                <button className="btn btn-success">Chi tiết</button>
                            )}>
                                <h3 className="text-secondary">{product.name}</h3>
                                <p className="text-success">{product.price}</p>
                                
                            </SuperCard>
                        </div>
                        
                    )
                })}
                </div>
            </div>
        )
    }
}
