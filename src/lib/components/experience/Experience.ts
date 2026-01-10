export interface Experience {
	company: string;
	role: string;
	dates: string;
	bullets: string[];
	tech: string[];
}

export const experiences: Experience[] = [
	{
		company: 'Bridge Wireless Solutions',
		role: 'Software Developer ',
		dates: 'Jun 2025 – Present',
		bullets: [
			'Engineered core full-stack features using TypeScript, React, and Kotlin for an AWS-deployed mobile application, supporting scalable deployment and reliable data storage through Amplify, Lambda, S3, and DynamoDB, while enforcing secure access via IAM roles and least-privilege policies.',
			'Built a customer-facing device buyback widget using React and TypeScript, integrating with existing buyback infrastructure and backend APIs to streamline the user experience and increase device buybacks by 20%.',
			'Administered and supported the company’s ERP system by managing and optimizing S3 storage and EC2 usage, monitoring resource utilization with CloudWatch, and reducing monthly AWS infrastructure costs by 15%.'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'Kotlin', 'AWS', 'MSSQL']
	},
	{
		company: 'Ross Video',
		role: 'Full Stack Software Developer Co-op',
		dates: 'Sep 2022 – Aug 2023',
		bullets: [
			'Developed and maintained full-stack features using TypeScript and React for internal dashboard applications',
			'Worked extensively in pair programming environments, collaborating daily with senior developers',
			'Applied test-driven development practices, writing unit and integration tests to improve code reliability',
			'Participated in code reviews and agile ceremonies, contributing to high-quality, production-ready releases'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TDD']
	}
];
