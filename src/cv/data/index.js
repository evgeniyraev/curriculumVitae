import projects from './projects.json';
import carrer from './career.json';

let skills = projects.reduce((list, {stack}) => {
    stack.forEach(s => {
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
    carrer
}
