export function useProjects() {

    const projects = [
        {
            title: 'Drip Campaign',
            site: 'https://app.sales.rocks',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, fusce ultricies elit nec.',
            image: '/images/screenshot-light.png'
        },
        {
            title: 'Labchess',
            site: 'https://labchess.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, fusce ultricies elit nec.',
            image: '/images/labchess.03.png'
        },
        {
            title: 'Nebbo',
            site: 'http://16.171.148.142/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, fusce ultricies elit nec.',
            image: '/images/todo-app-03.png'
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