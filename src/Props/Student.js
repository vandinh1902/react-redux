import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        const {student} = this.props;
        return (
            <div>
                <p>
                    name: {student.name} - Age: {student.age}- score: {student.score}
                </p>
            </div>
        );
    }
}
