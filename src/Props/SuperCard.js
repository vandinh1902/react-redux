import React, { Component } from 'react'

export default class SuperCard extends Component {
    render() {
        const {title, footer} = this.props
        return (
            <div>
                <div class="card">
                    <div class="card-header">
                        {title}
                    </div>
                    <div class="card-body">
                        {this.props.children}
                    </div>
                    <div class="card-footer text-muted">
                        {footer && footer()}
                    </div>
                </div>


            </div>
        )
    }
}


// <SuperCard>
//     <p>ABC</p>
// </SuperCard>