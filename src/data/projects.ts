import icon1 from '../lib/assets/icons/viteboard.png';
import icon2 from '../lib/assets/icons/bingeboard.png';
import icon3 from '../lib/assets/icons/miniblog.png';
import icon4 from '../lib/assets/icons/memegen.png';
import screenshot1 from '../lib/assets/screenshots/viteboard.png';
import screenshot2 from '../lib/assets/screenshots/bingeboard.png';
import screenshot3 from '../lib/assets/screenshots/miniblog.png';
import screenshot4 from '../lib/assets/screenshots/memegen.png';

export interface Project {
	name: string;
	icon: string;
	screenshot: string;
	description: string;
	githubLink: string;
	demoLink: string;
	technologies: string[];
}

export const projects: Project[] = [
	{
		name: 'ViteBoard',
		icon: icon1,
		screenshot: screenshot1,
		description: 'A whiteboard drawing app with a color palette, undo/redo and export options',
		githubLink: 'https://github.com/bhupeshpr25/viteboard',
		demoLink: 'http://viteboard.vercel.app/',
		technologies: ['React.js', 'Redux', 'Typescript', 'CSS']
	},
	{
		name: 'BingeBoard',
		icon: icon2,
		screenshot: screenshot2,
		description: 'A web application that allows users to manage media and media related notes',
		githubLink: 'https://github.com/bhupeshpr25/bingeboard-frontend',
		demoLink: 'http://bingeboard.vercel.app/',
		technologies: ['React', 'Node', 'Typescript', 'PostgreSQL']
	},
	{
		name: 'MiniBlog',
		icon: icon3,
		screenshot: screenshot3,
		description: 'A short blogging platform built to practice MERN stack',
		githubLink: 'https://github.com/bhupeshpr25/miniblog',
		demoLink: 'https://mern-miniblog.herokuapp.com/',
		technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
	},
	{
		name: 'MemeGen',
		icon: icon4,
		screenshot: screenshot4,
		description: 'A meme generator extension for the firefox browser',
		githubLink: 'https://github.com/bhupeshpr25/memegen',
		demoLink: 'https://addons.mozilla.org/en-US/firefox/addon/memegen/',
		technologies: ['Svelte', 'Typescript', 'Vite', 'TailwindCSS']
	}
];
