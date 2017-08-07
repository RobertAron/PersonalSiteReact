const projects = [
    {
        id: 1,
        thumbnail: "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "NOT TEST Title",
        projectInfo: [["Overview", "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card."],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum arcu vitae turpis viverra, eget facilisis sem iaculis. Curabitur finibus eros at elit elementum, eu varius nisi tincidunt. Quisque odio sapien, viverra id turpis id, dictum semper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc velit lacus, fringilla eu nunc in, blandit imperdiet ligula. Etiam vestibulum, urna ut congue pellentesque, metus augue tempus quam, vel luctus ante diam porta libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus, enim vitae sollicitudin auctor, sem dui finibus orci, quis efficitur nunc est at felis. Duis dictum elit non purus semper feugiat. Nam iaculis felis non tortor accumsan, et gravida enim consectetur. Aenean at ligula odio. Maecenas placerat non justo varius viverra. Nullam gravida tortor sit amet pellentesque gravida. Quisque tristique enim ornare, ultricies velit non, fermentum mauris. Sed eros lectus, lacinia eu nulla quis, mattis condimentum ex. Vestibulum fermentum justo vitae velit iaculis venenatis. Pellentesque vel accumsan mauris, posuere sagittis diam. Maecenas hendrerit quam risus, ac fermentum urna feugiat eget. Suspendisse consectetur malesuada lorem, ac pulvinar nunc tincidunt vel. Sed."]],
        tags: ["test1", "test2"],
        links: {
            github: "https://github.com/RobertAron/JuceCustomGraphics",
            youtube: "cM09hWIPUqY",
            devpost: "https://devpost.com/software/eco-drivr"

        }
    },
    {
        id: 2,
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/419DmOmkSeL._SL500_AC_SS350_.jpg",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Lil Pup",
        projectInfo: [["Overview", "Who is a good pupper this is a good pupper what a good lil pup."],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "This is a bit more information that might explain some more things. Hopefully it clears stuff up"]],
        tags: ["test1", "test3"],
        links: {

        }
    },
    {
        id: 3,
        thumbnail: "https://s-media-cache-ak0.pinimg.com/originals/a5/ff/e2/a5ffe2dec6a3e4f98964b7170f3b2e25.png",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Sly Pup",
        projectInfo: [["OverView", "Thats one sly lil pup yup, dat pup is a sly one. That pup is a good pup, but they're also real sly"],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "This is a bit more information that might explain some more things. Hopefully it clears stuff up"]],
        tags: ["test1", "test2"],
        links: {

        }
    },
    {
        id: 4,
        thumbnail: "https://i.imgur.com/P8lIeYU.jpg",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Evolve Pup",
        projectInfo: [["Overview", "who knew such a small lil pup could turn into a larger pup wow what a g o o d b o i"],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "This is a bit more information that might explain some more things. Hopefully it clears stuff up"]],
        tags: ["test6", "test2"],
        links: {

        }
    },
    {
        id: 5,
        thumbnail: "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Test Title",
        projectInfo: [["Overview", "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card."],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum arcu vitae turpis viverra, eget facilisis sem iaculis. Curabitur finibus eros at elit elementum, eu varius nisi tincidunt. Quisque odio sapien, viverra id turpis id, dictum semper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc velit lacus, fringilla eu nunc in, blandit imperdiet ligula. Etiam vestibulum, urna ut congue pellentesque, metus augue tempus quam, vel luctus ante diam porta libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus, enim vitae sollicitudin auctor, sem dui finibus orci, quis efficitur nunc est at felis. Duis dictum elit non purus semper feugiat. Nam iaculis felis non tortor accumsan, et gravida enim consectetur. Aenean at ligula odio. Maecenas placerat non justo varius viverra. Nullam gravida tortor sit amet pellentesque gravida. Quisque tristique enim ornare, ultricies velit non, fermentum mauris. Sed eros lectus, lacinia eu nulla quis, mattis condimentum ex. Vestibulum fermentum justo vitae velit iaculis venenatis. Pellentesque vel accumsan mauris, posuere sagittis diam. Maecenas hendrerit quam risus, ac fermentum urna feugiat eget. Suspendisse consectetur malesuada lorem, ac pulvinar nunc tincidunt vel. Sed."]],
        tags: ["test1", "test2"],
        links: {

        },
        video:"https://www.youtube.com/embed/dHg50mdODFM" 
    },
    {
        id: 6,
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/419DmOmkSeL._SL500_AC_SS350_.jpg",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Lil Pup",
        projectInfo: [["Overview", "Who is a good pupper this is a good pupper what a good lil pup."],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "This is a bit more information that might explain some more things. Hopefully it clears stuff up"]],
        tags: ["test1", "test3"],
        links: {

        }
    },
    {
        id: 7,
        thumbnail: "https://s-media-cache-ak0.pinimg.com/originals/a5/ff/e2/a5ffe2dec6a3e4f98964b7170f3b2e25.png",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Sly Pup",
        projectInfo: [["Overview", "Thats one sly lil pup yup, dat pup is a sly one. That pup is a good pup, but they're also real sly"],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "This is a bit more information that might explain some more things. Hopefully it clears stuff up"]],
        tags: ["test1", "test2"],
        links: {

        }
    },
    {
        id: 8,
        thumbnail: "https://i.imgur.com/P8lIeYU.jpg",
        images: ["https://i.imgur.com/0sPXWzT.jpg","https://i.imgur.com/6H9ow2P.jpg","https://i.imgur.com/QZ7COcc.jpg"],
        projectTitle: "Evolve Pup",
        projectInfo: [["Overivew", "who knew such a small lil pup could turn into a larger pup wow what a g o o d b o i"],
        ["Sub Title 1", "here is some sub title stuff. It will talk about the catagory that the subtitle talked about"],
        ["Sub Title 2", "This is a bit more information that might explain some more things. Hopefully it clears stuff up"]],
        tags: ["test6", "test2"],
        links: {

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
            updateTags = updateTags.map((tag) => {
                for (let i = 0; i < filteredProjects.length; i++) {
                    const currentProject = filteredProjects[i];
                    if (currentProject.tags.includes(tag[0])) {
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