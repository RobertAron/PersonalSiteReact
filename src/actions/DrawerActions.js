export const toggleDrawer =(toggleBool)=>{
    console.log("NEW ACTION!");
    return{
        type: "TOGGLE_DRAWER",
        payload: toggleBool
    }
}