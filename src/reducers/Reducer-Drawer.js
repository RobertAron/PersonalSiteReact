const defaultState = 
{
    open: false
};




export default (state=defaultState,action)=>{
    switch(action.type){
        case "TOGGLE_DRAWER":
            state = {...state,open:!state.open};
            return state;
        default: return state;
    }
}