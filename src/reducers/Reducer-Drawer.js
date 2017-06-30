export default (state=null,action)=>{
    const drawerState = 
    {
        open: false,
        tags:["test1","test2"]
    };
    if (state==null) return drawerState;
    switch(action.type){
        case "TOGGLE_DRAWER":
            drawerState.open = !state.open;
            break;
    }
    return drawerState
}