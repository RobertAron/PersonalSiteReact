export const toggleDrawer =(toggleBool)=>{
    console.log("Drawer Action");
    return{
        type: "TOGGLE_DRAWER",
        payload: toggleBool
    }
}