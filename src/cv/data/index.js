import projects from './projects.json';

let skills = projects.reduce((list, {stack}) => {
    stack.split("\n").forEach(s => {
        if(list.has(s)) {
            list.set(s, list.get(s) + 1);
        } else {
            list.set(s, 1);
        }
    })
    return list;
}, new Map())


export {
    skills,
    projects,
}
