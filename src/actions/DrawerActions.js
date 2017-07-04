export const toggleDrawer =()=>{
    return{
        type: "TOGGLE_DRAWER"
    }
}

export const toggleTag =(tagId)=>{
    console.log("inside toggle tag");
    return{
        type: "TOGGLE_TAG",
        payload: tagId
    }
}