
import dummy_data from '../data/test.json'
import {ADD_ITEM} from '../Actions/Dummy_action'
export  function dummy_reducers(state=dummy_data,actions){

    return state
}

export function data_reducer(state=[],action){
    switch (action.type) {
        case ADD_ITEM:
            
            return action.value
    
        default:
            return state
    }
}