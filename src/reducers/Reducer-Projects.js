import projects from '../data/projects.json'
import games from '../data/games.json'

const tags = [
    //tootlip disabled checked
    ["Software", false, false,"Turning text into magic!"],
    ["Hackathon", false, false,"24-Hours to cram as many plugins into a project as you can."],
    ["Web", false, false,"Projects just like the one you're looking at now!"],
    ["Audio", false, false,"Anything and everything you can put through a speaker."],
    ["Music", false, false,"Cool sounds that are layered with more cool sounds."]
]



const visibleProjects = projects.map((project) => {
    return project.id;
})


const defaultState = {
    games: games,
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