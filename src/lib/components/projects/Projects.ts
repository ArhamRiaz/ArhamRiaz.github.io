import logo from '$lib/assets/logo.png';

export interface Project {
	id: string;
	name: string;
	description: string;
	github: string;
	tech: string[];
	thumbnail: string;
	link?: string;
}

export const projects: Project[] = [
	{
		id: 'album',
		name: 'Album Tracking Website',
		description:
			'A website designed to allow users to track what music albums they have listened to and want to listen to.',
		github: 'https://github.com/ArhamRiaz/AlbumListProject',
		tech: ['JavaScript', 'Node.js', 'DynamoDB', 'Amplify', 'Lambda'],
		thumbnail: '/album-tracker.png',
		link: 'https://www.album-tracker.com/'
	},
	{
		id: 'personal-website',
		name: 'This Website!!',
		description:
			"The website you are currently on, built with SvelteKit, Typescript, TailwindCSS and good ol' HTML.",
		github: 'https://github.com/ArhamRiaz/riaz-website',
		tech: ['SvelteKit', 'TypeScript', 'Tailwind', 'HTML'],
		thumbnail: logo
	}
];
