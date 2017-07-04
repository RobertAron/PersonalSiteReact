export const toggleDrawer =()=>{
    return{
        type: "TOGGLE_DRAWER"
    }
}

export const toggleTag =(tagId)=>{
    return{
        type: "TOGGLE_TAG",
        payload: tagId
    }
}