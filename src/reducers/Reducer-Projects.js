const projects = [
    {
        id: 1,
        imageSrc: "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404",
        projectTitle: "Test Title",
        projectInfo: "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card.",
        tags: ["test1", "test2"],
        links:{
            Github: "https://github.com/RobertAron/JuceCustomGraphics",
            Youtube: "https://www.youtube.com/watch?v=BAgfJFeEHvk&ab_channel=HeyImRige",
            Devpost: "https://devpost.com/software/eco-drivr"

        }
    },
    {
        id: 2,
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/419DmOmkSeL._SL500_AC_SS350_.jpg",
        projectTitle: "Lil Pup",
        projectInfo: "Who is a good pupper this is a good pupper what a good lil pup.",
        tags: ["test1", "test3"],
        links:{

        }
    },
    {
        id: 3,
        imageSrc: "https://s-media-cache-ak0.pinimg.com/originals/a5/ff/e2/a5ffe2dec6a3e4f98964b7170f3b2e25.png",
        projectTitle: "Sly Pup",
        projectInfo: "Thats one sly lil pup yup, dat pup is a sly one. That pup is a good pup, but they're also real sly",
        tags: ["test1", "test2"],
        links:{

        }
    },
    {
        id: 4,
        imageSrc: "https://i.imgur.com/P8lIeYU.jpg",
        projectTitle: "Evolve Pup",
        projectInfo: "who knew such a small lil pup could turn into a larger pup wow what a g o o d b o i",
        tags: ["test6", "test2"],
        links:{

        }
    },
    {
        id: 5,
        imageSrc: "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404",
        projectTitle: "Test Title",
        projectInfo: "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card.",
        tags: ["test1", "test2"],
        links:{

        }
    },
    {
        id: 6,
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/419DmOmkSeL._SL500_AC_SS350_.jpg",
        projectTitle: "Lil Pup",
        projectInfo: "Who is a good pupper this is a good pupper what a good lil pup.",
        tags: ["test1", "test3"],
        links:{

        }
    },
    {
        id: 7,
        imageSrc: "https://s-media-cache-ak0.pinimg.com/originals/a5/ff/e2/a5ffe2dec6a3e4f98964b7170f3b2e25.png",
        projectTitle: "Sly Pup",
        projectInfo: "Thats one sly lil pup yup, dat pup is a sly one. That pup is a good pup, but they're also real sly",
        tags: ["test1", "test2"],
        links:{

        }
    },
    {
        id: 8,
        imageSrc: "https://i.imgur.com/P8lIeYU.jpg",
        projectTitle: "Evolve Pup",
        projectInfo: "who knew such a small lil pup could turn into a larger pup wow what a g o o d b o i",
        tags: ["test6", "test2"],
        links:{

        }
    }
]

const tags = [
    //tootlip disabled checked
    ["test1", false, false],
    ["test2", false, false],
    ["test3", false, false],
    ["test4", false, false],
    ["test5", false, false],
    ["test6", false, false]
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
    switch (action.type) {
        case "TOGGLE_TAG":
            //change the state for the newly checked/unchecked tag
            state = { ...state };
            let updateTags = state.tags.map((tag) => {
                if (tag[0] === action.payload) {
                    tag[2] = !tag[2];
                }
                return tag;
            })
            
            //set the tag to disabled if if will not filter any more projects
            const filteredProjects = state.projects.filter((project) => {
                for (let i = 0; i < state.tags.length; i++) {
                    const tag = state.tags[i];
                    if (tag[2] === true) {
                        //if the tag is not included
                        if (!project.tags.includes(tag[0])) {
                            return false;
                        }
                    }
                }
                return true;
            })
            updateTags = updateTags.map((tag)=>{
                for(let i = 0;i<filteredProjects.length;i++){
                    const currentProject = filteredProjects[i];
                    if(currentProject.tags.includes(tag[0])){
                        tag[1] = false;
                        return tag;
                    }
                }
                tag[1] = true;
                return tag;
            });
            state.tags = updateTags;
            return state;
        default: return state;

    }
}