import React, { Component } from 'react'

export default class Fillters extends Component {
    constructor(props){
        super(props);
        this.state={brand:["beast"],
                    
                    gender:["men","women","kids","child","boys","girls"]
                            }
                        
                        }
    render() {
        return (
            <div>
              {this.state.gender.map((items,index)=>(
                  <p>{items}------------{index}</p>
              ))}
            </div>
        )
    }
}
