const defaultState = 
{
    open: false
};




export default (state=defaultState,action)=>{
    console.log("in reducer drawer state",state);
    switch(action.type){
        case "TOGGLE_DRAWER":
            state = {...state,open:!state.open};
            break;
    }
    return state
}