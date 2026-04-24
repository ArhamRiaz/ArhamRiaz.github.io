import logo from '$lib/assets/logo.png';

export interface Project {
	id: string;
	name: string;
	description: string;
	github: string;
	tech: string[];
	thumbnail: string;
	link?: string;
	video?: string;
}

export const projects: Project[] = [
	{
		id: 'album',
		name: 'Album Tracking Web App',
		description:
			'A website designed to allow users to track what music albums they have listened to and want to listen to. Built and deployed using AWS (Amplify, Lambda, DynamoDB, Route53) to gain experience.',
		github: 'https://github.com/ArhamRiaz/AlbumListProject',
		tech: ['JavaScript', 'Node.js', 'DynamoDB', 'Amplify', 'Lambda'],
		thumbnail: './album-tracker.png',
		link: 'https://www.album-tracker.com/'
	},
	{
		id: 'wordle',
		name: 'Wordle Solving Agent',
		description:
			'A Reinforcement Learning project designed to solve the popular game Wordle. Consists of a custom Gymnasium environment and multiple agents designed around different Reinforcement Learning algorithms - Monte Carlo, A2C, PPO and SARSA.  ',
		github: 'https://github.com/TonyTu02/COMP4010ProjectHangman/tree/Riaz',
		tech: ['Python', 'Gymnasium', 'PyTorch', 'Reinforcement Learning'],
		thumbnail: './wordle-fail.png'
	},
	{
		id: 'hoopboard',
		name: 'Hoopboard',
		description:
			'An App where you can see the results of the currents days or previous days NBA games, including the box scores of your favourite players and whether they played or not',
		github: 'https://github.com/ArhamRiaz/Hoopboard',
		tech: ['Python', 'Javascript', 'Flask'],
		thumbnail: './hoopboard.png'
	},
	{
		id: 'expanding-minesweeeper',
		name: 'Expanding Minesweeper',
		description:
			'A version of Minesweeper that expands the board from beginner to intermediate to expert once a board has been beaten, built with Java.',
		github: 'https://github.com/ArhamRiaz/expanding-minesweeper',
		tech: ['Java'],
		thumbnail: './minesweeper.png'
	}
	// {
	// 	id: 'personal-website',
	// 	name: 'This Website!!',
	// 	description:
	// 		"The website you are currently on, built with SvelteKit, Typescript, TailwindCSS and good ol' HTML.",
	// 	github: 'https://github.com/ArhamRiaz/riaz-website',
	// 	tech: ['SvelteKit', 'TypeScript', 'Tailwind', 'HTML'],
	// 	thumbnail: logo
	// }
];
