import type ProjectData from '@/types/ProjectData';

class ProjectService {

    projects: ProjectData[] = [
        {
            title: 'Drip Campaign',
            site: 'https://app.sales.rocks',
            description: 'Software for running email campaigns. It delivers statistics like email opens, link clicks, and many other features.',
            long: 'The drip campaign is part of the SalesRocks platform, and the clients use it to automate email or LinkedIn campaigns. You may create your campaigns using email or LinkedIn actions, delays, and conditions. It delivers statistics like email opens, link clicks, replies, and bounces. ',
            built: 'The drip campaign system is crafted with Laravel/PHP and Vue.js/Javascript, supplemented by Python for email reply/bounce detection, and empowered by AWS Step Functions for seamless orchestration.',
            image: '/images/drip-campaign.png'
        },
        {
            title: 'Labchess',
            site: 'https://labchess.com',
            description: 'Gamified app for improving your chess endgame, includes courses and puzzles.',
            long: 'Labchess is an application used for improving your chess endgame. It has close to 5000 registered users. It includes written courses and over 2000 training endgame positions that you can solve. The users may compete with each other and analyze their solutions using Stockfish, an open-source chess engine. The project includes a free and paid version. The payment is handled using Paddle.',
            built: 'Labchess is built using Laravel/PHP and Vue.js/Javascript, with AWS for hosting.',
            image: '/images/labchess.png'
        },
        {
            title: 'Nebbo',
            site: 'https://todo.nebojsha.com/',
            description: 'To-do app that I\'ve built for myself, inspired by the book "Deep Work" by Cal Newport.',
            long: 'Nebbo is a simple to-do app inspired by the book "Deep Work" by Cal Newport. It includes task time-blocking and three task statuses: to-do, in-progress, and finished. You may add tasks for today or tomorrow and view your task history.\n',
            built: 'Nebbo is built using Laravel/PHP and Vue.js/Javascript, with AWS for hosting.',
            image: '/images/todo-app.png'
        }
    ];

    get(projectTitle: string): ProjectData | null {
        for (let i: number = 0; i < this.projects.length; i++) {
            if (this.projects[i].title.toLowerCase() === projectTitle.toLowerCase()){
                return this.projects[i];
            }
        }
        return null;
    }
}

export default new ProjectService();