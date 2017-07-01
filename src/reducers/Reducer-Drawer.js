const drawerState = 
{
    open: false,
    tags:["test1","test2"]
};

export default (state=drawerState,action)=>{
    if (state==null) return drawerState;
    console.log(state);
    switch(action.type){
        case "TOGGLE_DRAWER":
            drawerState.open = !state.open;
            break;
    }
    return drawerState
}