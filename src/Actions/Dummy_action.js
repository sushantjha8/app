export const ADD_ITEM="ITEMS"



//create dummy action with parametrer id
export function dummy_action(value)
{   
    
    const action ={
        type:ADD_ITEM,
        value:value
    
    }
    
    return action
}