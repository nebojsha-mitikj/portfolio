export function useProjects() {

    const projects = [
        {
            title: 'Drip Campaign',
            site: 'https://app.sales.rocks',
            description: 'Software for running email campaigns. It delivers statistics like email opens, link clicks, and many other features.',
            image: '/images/drip-campaign.png'
        },
        {
            title: 'Labchess',
            site: 'https://labchess.com',
            description: 'Gamified app for improving your chess endgame, includes courses and puzzles.',
            image: '/images/labchess.png'
        },
        {
            title: 'Nebbo',
            site: 'http://16.171.148.142/',
            description: 'To-do app that I\'ve built for myself, inspired by the book "Deep Work" by Cal Newport.',
            image: '/images/todo-app.png'
        }
    ];

    function getProject(projectTitle){
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].title.toLowerCase() === projectTitle.toLowerCase()){
                return projects[i];
            }
        }
        return null;
    }

    return { projects, getProject }
}