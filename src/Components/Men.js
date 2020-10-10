import React, { Component } from 'react'

export default class Men extends Component {
    constructor(props) {
        super(props);
        this.state = {items:["men-watch","mens-shoes"]};
      }
    render() {
        return (
            <div>
                this is men section
                <p>
                {this.state.items.map((item,index)=>(
                    <p> {item}----------{index}</p>
        ))}
                </p>
                
            </div>
        )
    }
}
