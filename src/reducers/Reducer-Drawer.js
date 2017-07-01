const defaultDrawerState = 
{
    open: false,
    tags:["test1","test2"]
};




export default (state=defaultDrawerState,action)=>{
    switch(action.type){
        case "TOGGLE_DRAWER":
            state.open = !state.open;
            break;
    }
    return state
}