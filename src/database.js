const experiences = [
	{
		company: "Databricks",
		website: "https://databricks.com/",
		location: "San Francisco, California",
		logo: "images/databricks.png",
		terms: [{
			date: "May 2022 - August 2022",
			role: "Incoming Software Engineer Intern",
			description: [],
		}]
	},
	{
		company: "Shopify",
		website: "https://www.shopify.ca/",
		location: "Remote 'Digital by Default'",
		logo: "images/shopify.png",
		terms: [{
			summary: `
				During my term at Shopify, I worked on the Payments Platform "Akatsuki" team. Throughout the term, I learned
				a lot about payments systems and was able to work in-depth on a brand new feature. The highlight of the term was
				our trip to Montreal!
			`,
			date: "September 2021 - December 2021",
			role: "Backend Developer Intern",
			description: [
				`
					Worked end-to-end on GraphQL API, Rails services, and MySQL migrations to add new payment notifications
					flow into the Payments Partners Platform for re-conciliating data updates from payment processors
				`,
				`
					Added new error handling logic for Shopify's payment integration with PayPal and Facebook Marketplace
					for improved visibility across companies
				`,
				`
					Collaborated with team to refactor GraphQL and SQL schemas to improve code clarity and performance
				`
			],
		}]
	},
	{
		company: "Wish",
		website: "https://www.wish.com/companyinfo",
		location: "San Francisco, California",
		logo: "images/wish.png",
		terms: [{
			summary: `
				This was the second term that I worked at Wish. I transfered to the product web team and specifically,
				I worked in the post purchase / customer experience pod where I was able to work on a lot of interesting
				features and solve challenging problems.
			`,
			date: "January 2021 - April 2021",
			role: "Software Engineer Intern  |  Product Web Team",
			description: [
				`
					Built buy-again feed to recommend products based on reorder probability data leading to an increase in company GMV,
					and implemented lazy loading on the order history page to improve buy-again loading times by 50%
				`,
				`
					Developed a React scratch card and backend APIs to integrate with payment systems to distribute
					discount and cashincentives to improve customer retention
				`,
				`
					Worked efficiently in scrum environment across teams with both technical and non-technical stakeholders to
					deliver product features for desktop and mobile clients using Python and TypeScript (React and Redux)
				`,
			],
		}, {
			date: "May 2020 - August 2020",
			role: "Software Engineer Intern  |  Logistics Team",
			summary: `
				The logistics team at Wish works to facilitating shipments throughout the entire process of
				handling deliveries to and from merchants, warehosues, stores, and customers. There were also additional
				challenges facing our supply chain due to the COVID-19 pandemic.
			`,
			description: [
				`
					Created Python services to correct shipment data inconsistencies, identify store pickup performance,
					and optimize item packing for shipping, requiring complex and efficient SQL and MongoDB queries
				`,
				`
					Developed APIs to provide merchants with product recommendations for different
					shipment fulfillment options to improve delivery speed and cost
				`,
				`
					Improved the merchant dashboard by building new shipping fulfillment
					pages with React to create a modern user interface
				`,
			],
		}]
	},
	{
		company: "Youreka Canada",
		website: "https://yourekacanada.org",
		location: "Remote",
		logo: "images/youreka.png",	
		terms: [{
			summary: `
				Youreka is a non-profit organization aiming to provide educational programs for students to get involved
				in scientific research. As a small but growing organization, my role was to provide software solutions to
				streamline their work flows. I worked here remotely as a part time employee for a few school terms.
			`,
			role: "Software Engineer",
			date: "November 2019 - December 2020",
			description: [
				`
					Designed and built a full stack application with Django and MySQL from the ground up, allowing employees to evaluate
					student applications on an end-to-end online platform, increasing the efficiency of application processing by 40%
				`,
				`
					Oversaw site deployment, hosting, and maintenance processes to ensure a smooth roll-out to Youreka employees once recruiting began
				`,
				`
					Worked with organization executives as a technical consultant to identify keys areas to improve through software solutions
				`,
			],
		}]
	},
	{
		company: "Connected",
		website: "https://www.connected.io",
		location: "Toronto, Ontario",
		logo: "images/connected.png",
		terms: [{
			summary: `
				This was my first internship and an great introduction for me to a professional work environment in the
				tech industry. Connected is a medium sized start up with around 200 employees when I worked there. Despite their
				small size, they work on projects for many high profile clients.
			`,
			date: "May 2019 - August 2019",
			role: "QA Automation Developer Intern",
			description: [
				`
					Built a cross platform desktop application using Electron for testing Amazon Alexa voice applications,
					providing a framework to easily test different conversation flows and reduced time spent on writing tests by 30%
				`,
				`
					Spearheaded development of a Python command line tool to automate submitting test suite results, reducing time spent
					on mobile QA testing by 40%
				`,
			],
		}]
	},
];

const projects = [
	{
		name: "Juke Jam",
		link: "http://juke-jam.com",
		website: "juke-jam.com",
		app_type: "Web Application",
		github: "https://github.com/bduge/juke-jam",
		picture: "images/jukejam.png",
		technologies: "React, Redux, Express, SocketIO, MongoDB",
		description: `
			Share the love of music with friends! Juke Jam allows users to create a private room, invite
			their friends, and play music through their Spotify account. Invited guests can add songs
			to the queue where everyone can vote on it! The top voted songs will appear at the top of the
			queue which represents the order that songs will be played in. This app works by making Spotify API calls
			with an Express server. The client side application was created with React and Redux. Finally, everything is
			tied together using SocketIO, which syncs the client and server states in real time.
		`,
	},
	{
		name: "Photo Spot",
		app_type: "Web Application",
		github: "https://github.com/bduge/Photo-Spot",
		picture: "images/photospot.png",
		technologies: "Golang, MongoDB, Bootstrap",
		description: `
			Photo Spot is the perfect website to host, enter, and view photo contests. No matter what photos you're
			interested in, you will find something for you! Users can compete to win contest by submitting their best
			photos. Winners are determined by votes by other users who can view all the entries and choose their favourite.
			The app runs on a Golang server with a full user authentication system using Gorilla's sessions library. Images
			are stored on the servers file system and other data is stored in a NoSQL database using MongoDB.
		`
	},
	{
		name: "Cyberbullying Detection Bot",
		app_type: "Python Bot",
		github: "https://github.com/bduge/Cyberbullying-Detection-Bot",
		picture: "images/reddit.png",
		technologies: "Python, Scikit-Learn",
		description: `
			Online communities provide a great platform for sharing and discussing ideas.
			Unfortunately, cyberbullying is a serious problem in many online groups, which may deter
			users from partipating. This bot aims to tackle this issue in Reddit's comment sections by 
			scrapping comments from top posts on subreddits and running them through our trained nerual network engine
			to detect instances of cyberbullying. The neural network was built using
			Scikit-learn's ML training methods with a dataset of offensive words.
		`,
	},
	{
		name: "Stylist.ai",
		app_type: "Android Application",
		github: "https://github.com/SamYu/stylist.ai",
		picture: "images/stylist.jpeg",
		technologies: "Django, Java, MySQL, Google Cloud, Tensorflow",
		description: `
			Stylist.ai is the perfect app for individuals who want to get their day going in a hurry by saving time
			when finding the perfect outfit. The app stores a database of the user's clothing items and uses the current
			weather and personal preferences to recommend outfits to wear. Personal preferences are trained over time
			in a neural network using tensor flow based on feedback of outfits given by the user. The server
			is written in Python using the Django framework manage the user's data.
		`,
	},
	// {
	// 	name: "Study Buddy",
	// 	app_type: "Mobile Web Application",
	// 	github: "https://github.com/karkevin/Study-Buddies",
	// 	picture: "images/temp.png",
	// 	technologies: "ExpressJS, NodeJS, Firebase, Azure, HMTL, CSS",
	// 	description: `
	// 		College students often find it to maintain friendships while in school. Study
	// 		buddy is an application that helps users make friends/meet people to study with
	// 		by filtering students in the area that are taking similar courses and matches
	// 		students based on their profile. Our applicaiton uses Microsoft Azure's
	// 		machine learning string matching algorithm to provide a similarity rating between student's
	// 		interests to send each student their top matches, helping to build meaningful and helpful connections
	// 		between students.
	// 	`,
	// },
	// {
	// 	name: "Skin Profile",
	// 	app_type: "Web Application",
	// 	github: "https://github.com/menavya16/skinprofile",
	// 	picture: "images/skinprofile.png",
	// 	technologies: "Javascript, PHP, MySQL, HTML, CSS, Bootstrap",
	// 	description: `
	// 		Skin Profile is a web application aimed to help users better manage their skin care
	// 		routine by recommending products at an affordable price. Our application recieves user
	// 		information about their skin type and characteristics, and recommends the most suitable
	// 		products in our database. Winner of a Top 10 Project prize at University of Toronto Hacks VI.
	// 	`,
	// },
	// {
	// 	name: "OCR Word Search Solver",
	// 	app_type: "Desktop Application",
	// 	github: "https://github.com/bduge/OCR-Word-Search-Solver",
	// 	picture: "images/wordsearch1.png",
	// 	technologies: "Python, Tesseract-OCR, Tkinter",
	// 	description:
	// 		"Using the Tesseract-OCR (optical character recognition) engine, this application takes in an image of any word search and is able to replicate its contents in encoded text and find any hidden words. The program then uses Tkinter to generate a GUI that displays the solved word search with words highlighted.",
	// },
];

const skills = [
	{
		name: "Python",
		type: "language",
		level: "experienced",
		icon: "fab fa-python",
	},
	{
		name: "C++",
		type: "language",
		level: "experienced",
		icon: "devicon-cplusplus-plain",
	},
	{
		name: "C",
		type: "language",
		level: "proficient",
		icon: "devicon-c-plain",
	},
	{
		name: "JavaScript",
		type: "language",
		level: "experienced",
		icon: "fab fa-js-square",
	},
	{
		name: "TypeScript",
		type: "language",
		level: "experienced",
		icon: "devicon-typescript-plain",
	},
	{
		name: "Ruby",
		type: "language",
		level: "experienced",
		icon: "devicon-ruby-plain",
	},
	{
		name: "HTML/CSS",
		type: "language",
		level: "experienced",
		icon: "fab fa-html5",
	},
	// {
	// 	name: "CSS",
	// 	type: "language",
	// 	level: "experienced",
	// 	icon: "fab fa-css3-alt",
	// },
	{
		name: "Go",
		type: "language",
		level: "proficient",
		icon: "devicon-go-plain",
	},
	{
		name: "Java",
		type: "language",
		level: "proficient",
		icon: "fab fa-java",
	},
	{
		name: "SQL",
		type: "language",
		level: "proficient",
		icon: "fas fa-database",
	},
	// {
	// 	name: "Bash",
	// 	type: "language",
	// 	level: "proficient",
	// 	icon: "fas fa-dollar-sign",
	// },
	{
		name: "React",
		type: "technology",
		level: "experienced",
		icon: "fab fa-react",
	},
	{
		name: "Redux",
		type: "technology",
		level: "experienced",
		icon: "devicon-redux-original",
	},
	// {
	// 	name: "Node.js",
	// 	type: "technology",
	// 	level: "experienced",
	// 	icon: "fab fa-node",
	// },
	{
		name: "Express",
		type: "technology",
		level: "proficient",
		icon: "devicon-express-original",
	},
	{
		name: "Django",
		type: "technology",
		level: "experienced",
		icon: "devicon-django-plain",
	},
	{
		name: "Bootstrap",
		type: "technology",
		level: "experienced",
		icon: "devicon-bootstrap-plain",
	},
	// {
	// 	name: "MySQL",
	// 	type: "technology",
	// 	level: "proficient",
	// 	icon: "devicon-mysql-plain",
	// },
	{
		name: "MongoDB",
		type: "technology",
		level: "experienced",
		icon: "devicon-mongodb-plain",
	},
	// {
	// 	name: "Google Cloud",
	// 	type: "technology",
	// 	level: "proficient",
	// 	icon: "fas fa-cloud",
	// },
	{
		name: "Ruby on Rails",
		type: "technology",
		level: "experienced",
		icon: "devicon-rails-plain",
	},
	{
		name: "jQuery",
		type: "technology",
		level: "proficient",
		icon: "devicon-jquery-plain",
	},
	// {
	// 	name: "git",
	// 	type: "technology",
	// 	level: "experienced",
	// 	icon: "devicon-git-plain",
	// },
	// {
	// 	name: "Kubernetes",
	// 	type: "technology",
	// 	level: "proficient",
	// 	icon: "devicon-kubernetes-plain",
	// },
	// {
	// 	name: "Docker",
	// 	type: "technology",
	// 	level: "proficient",
	// 	icon: "devicon-docker-plain",
	// },
	{
		name: "AWS",
		type: "technology",
		level: "proficient",
		icon: "devicon-amazonwebservices-original",
	},
	{
		name: "Selenium",
		type: "technology",
		level: "proficient",
		icon: "fas fa-mouse-pointer",
	},
	{
		name: "Electron",
		type: "technology",
		level: "proficient",
		icon: "icofont-electron",
	},
];

const activities = [
	{
		title: "Staying Active",
		image: "images/soccer.jpg",
		description: `
			I'm a huge fan of sports, I've made some great friends
			by playing on teams and it's always been a great way for me to stay fit and have fun.
			I'm a big basketball fan, I love playing with my friends and watching the NBA.
			I also play soccer and badminton and was the captain of both teams in high school although I don't
			have the chance to play as much anymore. Outside of just sports, I place a lot of value in taking care of my body
			which helps me be in a good mood and stay productive. Because of this, I try to workout or go on runs as much as I can. 
		`,
	},
	// {
	// 	title: "Speech + Debate",
	// 	image: "images/debate.jpg",
	// 	description:
	// 		"I first joined debate club to improve my public speaking but I quickly discovered that it was a rewarding and fun extracirricular that helps me stay educated on current events and issues. I participated as a member on my high school's speech and debate team and returned to my middle school as a volunteer coach. I also enjoyed participating in various other events including HSMUN and Mock Trials.",
	// },
	{
		title: "Travelling",
		image: "images/travel.jpeg",
		description: `
			Here's a quote that I really like: "Travel is the only thing you buy that makes you richer".
			I'm often caught up in the stress of work and school, but travelling is something that
			helps me take a break and reflect. This picture was taken by me in Jasper National Park in Canada which is definitely one of my
			favourite places to visit. There's a lot of places I'd like to visit but the two near the
			top of my list right now are Iceland and Japan.
		`,
	},
	{
		title: "Gaming",
		image: "images/gaming.png",
		description: `
			Since I was really young, I've enjoyed playing video games in my free time. One of the first reasons 
			I wanted to learn how to code was to learn how to make my own games. I especially enjoy difficult games that challenge me
			to master their mechanics, which feel very rewarding when they are finally beaten.
			Games are also a great way for me to relieve stress and stay connected with my friends when I can't see them in person.
			Some of my favourite games I've recently played are Hollow Knight, Uncharted, and COD.
		`
	}
];

export { experiences, skills, projects, activities };
