import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from "@blueprintjs/core";
import {dummy_action} from '../Actions/Dummy_action';
 class Dash extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                
                {this.props.data.map((items)=>{

                    return  <Button intent="success" text={items.id} onClick={()=>this.props.dummy_action(items.title)} />
                } )} 
                <p>
                {this.props.b_d}</p>
            </div>
                )
            

            
   
    
}
 }

function mapStateToProps(state)
{
    return{
        data:state.dummy_reducers,
        b_d:state.data_reducer
    }
}

export default connect(mapStateToProps,{dummy_action})(Dash) 