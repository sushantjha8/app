import React, { Component } from 'react'
import { connect } from 'react-redux'

import {dummy_action} from '../Actions/Dummy_action'
 class Dash extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    {console.log(this.props)}
                {this.props.data.map((items,index)=>{
                 return <li key={items.id} onClick={()=>this.props.dummy_action(items.id)}>------------<b>{items.title}</b></li>
    })}
              </ul>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        data:state.dummy_reducers
    }
}

export default connect(mapStateToProps,{dummy_action})(Dash) 