// combine reducers here


import { combineReducers } from 'redux'
import {dummy_reducers }from './dummy_reducer'
import {data_reducer }from './dummy_reducer'


//combine reducers
export default combineReducers({
   dummy_reducers:dummy_reducers,
    data_reducer:data_reducer
    

})