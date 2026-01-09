<script>
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';

	const experiences = [
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
		},
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
		}
	];
</script>

<svelte:head>
	<title>Arham's Website</title>
	<meta name="description" content="Welcome to my personal website and portfolio!" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
	<nav>
		<a href="/">About</a>
		<a href="/">Experience</a>
		<a href="/about">Projects</a>
	</nav>

	<section class="home-section">
		<div class="space-y-0.5">
			<h1 class="text-[48px] font-semibold">Arham Riaz</h1>
			<h4 class=" text-[24px]">Software Developer</h4>
		</div>
	</section>

	<section class="home-section space-y-1">
		<h3 class="section-label pt-15 pb-2 text-[18px]">About</h3>
		<div class="text-sm md:text-base">
			<p>
				Hi!! I’m a software developer with an Honours Bachelor of Computer Science Co-op from
				Carleton University! I made this website to act as a portfolio for my projects and to
				showcase myself to ___ .
			</p>
			<p>Hobbies: Rock Climbing, Film, NBA, Cricket, Gaming</p>

			<p>
				Currently playing: Hollow Knight <img
					src="/hollow knight.jpg"
					alt="hollow knight"
					class="inline-block h-60 w-auto align-middle"
				/>
			</p>
		</div>
		<ExperienceTimeline {experiences} />
	</section>
</div>
