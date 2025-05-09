import type ExperienceData from '@/types/ExperienceData';

class ExperienceService {

    length(): number {
        return this.get().length;
    }

    get(): ExperienceData[] {
        return [
            {
                image: '/images/logos/lifepanel.png',
                alt: 'Lifepanel logo',
                title: 'Full Stack Web Developer',
                start: '2025-01-01',
                end: null,
                company: 'Lifepanel · Full-time',
                location: 'Remote',
                skills: 'PHP · Laravel · JavaScript · Vue.js · MySQL · Amazon Web Services (AWS) · Bootstrap'
            },
            {
                image: '/images/logos/sales.rocks.logo.png',
                alt: 'SalesRocks Logo',
                title: 'Full Stack Web Developer',
                company: 'Sales.Rocks · Full-time',
                start: '2019-12-01',
                end: null,
                location: 'Remote',
                skills: 'PHP · Laravel · JavaScript · Vue.js · MySQL · MongoDB · Amazon Web Services (AWS) · Python (Programming Language) · Tailwind CSS · Bootstrap'
            },
            {
                image: '/images/logos/sample.solutions.logo.png',
                alt: 'SampleSolutions Logo',
                title: 'Full Stack Web Developer',
                start: '2019-09-01',
                end: '2019-11-30',
                company: 'Sample Solutions BV · Full-time',
                location: 'On-site',
                skills: 'PHP · Laravel · JavaScript · Vue.js · MySQL · Amazon Web Services (AWS) · Bootstrap'
            }
        ]
    }

}

export default new ExperienceService();