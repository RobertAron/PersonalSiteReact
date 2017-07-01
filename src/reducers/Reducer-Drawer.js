const defaultState = 
{
    open: false,
    tags:["test1","test2"]
};




export default (state=defaultState,action)=>{
    switch(action.type){
        case "TOGGLE_DRAWER":
            state = {...state,open:!state.open};
            break;
    }
    return state
}