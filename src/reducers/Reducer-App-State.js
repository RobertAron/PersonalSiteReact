const defaultState = 
{
    open: false,
    projectState: false
};




export default (state=defaultState,action)=>{
    switch(action.type){
        case "TOGGLE_DRAWER":
            state = {...state,open:!state.open};
            return state;
        case "SET_PROJECT_STATE":
            if(action.payload===true) {state = {...state,projectState:true}}
            else {state = {...state,projectState:false}};
            return state;
    }
    console.log(state);
    return state;
}