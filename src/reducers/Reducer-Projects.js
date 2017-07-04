const projects = [
    {
        id: 1,
        imageSrc: "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404",
        projectTitle: "Test Title",
        projectInfo: "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card.",
        tag: ["test1", "test2"]
    },
    {
        id: 2,
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/419DmOmkSeL._SL500_AC_SS350_.jpg",
        projectTitle: "Lil Pup",
        projectInfo: "Who is a good pupper this is a good pupper what a good lil pup.",
        tag: ["test1", "test3"]
    },
    {
        id: 3,
        imageSrc: "https://s-media-cache-ak0.pinimg.com/originals/a5/ff/e2/a5ffe2dec6a3e4f98964b7170f3b2e25.png",
        projectTitle: "Sly Pup",
        projectInfo: "Thats one sly lil pup yup, dat pup is a sly one. That pup is a good pup, but they're also real sly",
        tag: ["test1", "test2"]
    },
    {
        id: 4,
        imageSrc: "https://i.imgur.com/P8lIeYU.jpg",
        projectTitle: "Evolve Pup",
        projectInfo: "who knew such a small lil pup could turn into a larger pup wow what a g o o d b o i",
        tag: ["test6", "test2"],
    },
    {
        id: 5,
        imageSrc: "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404",
        projectTitle: "Test Title",
        projectInfo: "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card.",
        tag: ["test1", "test2"]
    },
    {
        id: 6,
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/419DmOmkSeL._SL500_AC_SS350_.jpg",
        projectTitle: "Lil Pup",
        projectInfo: "Who is a good pupper this is a good pupper what a good lil pup.",
        tag: ["test1", "test3"]
    },
    {
        id: 7,
        imageSrc: "https://s-media-cache-ak0.pinimg.com/originals/a5/ff/e2/a5ffe2dec6a3e4f98964b7170f3b2e25.png",
        projectTitle: "Sly Pup",
        projectInfo: "Thats one sly lil pup yup, dat pup is a sly one. That pup is a good pup, but they're also real sly",
        tag: ["test1", "test2"]
    },
    {
        id: 8,
        imageSrc: "https://i.imgur.com/P8lIeYU.jpg",
        projectTitle: "Evolve Pup",
        projectInfo: "who knew such a small lil pup could turn into a larger pup wow what a g o o d b o i",
        tag: ["test6", "test2"],
    }
]

const tags = [
    //tootlip visibility checked
    ["tag1", true, false],
    ["tag2", true, false],
    ["tag3", true, false],
    ["tag4", true, false],
    ["tag5", true, false],
    ["tag6", true, false]
]



const visibleProjects = projects.map((project) => {
    return project.id;
})


const defaultState = {
    projects: projects,
    tags: tags,
    visibleProjects: visibleProjects
}


export default (state = defaultState, action) => {
    console.log("in reducer projects state", state);
    switch (action.type) {
        case "TOGGLE_TAG":
            state = { ...state };
            const updateTags = state.tags.map((tag)=>{
                if(tag[0]==action.payload){
                    tag[2]=!tag[2];
                }
                return tag;
            })
            state.tags = updateTags;
            break;
    }
    return state
}