export const ADD_ITEM="ITEMS"



//create dummy action with parametrer id
export function dummy_action(id)
{   
    
    const action ={
        type:ADD_ITEM,
        value:id
    
    }
    console.log(id)
    return action
}