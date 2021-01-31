const experiences = [
	{
		company: "Wish",
		website: "https://www.wish.com/companyinfo",
		location: "San Francisco, California",
		date: "May 2020 - August 2020 / January 2021 - April 2021",
		logo: "images/wish.png",
		role: "Software Engineer Intern",
		description: [
			"Built buy-again feature to recommend products with high reorder probability to customers by implementing APIs and managing recommendation data in Redux state, resulting in increased item purchases",
			"Developed user facing web features on both desktop and mobile clients using React and Redux in TypeScript, improving the post-purchase user experience",
			"Created Python services to resolve shipment issues, gather shipping data, and optimize item packaging to facilitate efficient shipping",
			"Developed APIs to generate product recommendations for different shipment fulfillment options that merchants can use to improve delivery speed",
		],
	},
	{
		company: "Youreka Canada",
		website: "https://yourekacanada.org",
		location: "Remote",
		date: "November 2019 - December 2020",
		logo: "images/youreka.png",
		role: "Software Engineer",
		description: [
			"Designed and built a full stack application with Django and MySQL from the ground up, allowing employees to evaluate program applicants on an organized platform, increasing the efficiency of application processing by 30%",
			"Acted as technical consultant in meetings with organization executives to identify target areas which can be improved through software solutions",
		],
	},
	{
		company: "Connected",
		website: "https://www.connected.io",
		location: "Toronto, Ontario",
		date: "May 2019 - August 2019",
		logo: "images/connected.png",
		role: "QA Automation Developer Intern",
		description: [
			"Spearheaded development of a Python command line tool to automate submitting test results online, reducing time spent on QA testing by over 40%",
			"Built desktop application using Electron to test Alexa voice applications, providing a framework to easily test different conversation flows and quickly view results after executing tests",
		],
	},
	{
		company: "University of Waterloo Robotics Team",
		website: "https://uwrobotics.uwaterloo.ca/",
		location: "Waterloo, Ontario",
		date: "October 2018 - April 2019",
		logo: "images/uw_robotics.png",
		role: "Software Engineer",
		description: [
			"Developed software for a Mars rover to compete in the University Rover Challenge",
			"Created GUI for the rover's control interface that displays real time input from an XBOX 360 controller using ROS and C++, providing a seamless interface for drivers",
		],
	},
];

const projects = [
	{
		name: "Juke Jam",
		link: "http://juke-jam.com",
		website: "juke-jam.com",
		app_type: "Web Application",
		github: "https://github.com/bduge/juke-jam",
		picture: "images/juke-jam.png",
		technologies: "React, Redux, Express, SocketIO, MongoDB",
		description: `
			Share the love of music with friends! Juke Jam allows users to create a private room, invite
			their friends, and play music through their Spotify account. Invited guests can all add songs
			to the queue where everyone can vote on it! The top voted ones will be pushed to the top of the
			queue which determines the order songs are played in. This app works by making Spotify API calls
			with an Express server. The client side application is created with React and Redux. Finally, everything is
			tied together using SocketIO, which syncs the client and server states in real time.
		`,
	},
	{
		name: "Cyberbullying Detection Bot",
		app_type: "Python Bot",
		github: "https://github.com/bduge/Cyberbullying-Detection-Bot",
		picture: "images/reddit.png",
		technologies: "Python, Scikit-Learn",
		description: `
			Online communities provide a great platform for sharing and discussing ideas.
			Unfortunately, cyberbullying remains a prevalent problem in many online groups.
			This bot aims to tackle this issue in Reddit's comment sections by scrapping comments
			from top posts on subreddits and running them through our trained nerual network engine
			to detect instances of cyberbullying. The neural network was built using
			Scikit-learn's ML training methods with a dataset of offensive words.
		`,
	},
	{
		name: "Stylist.ai",
		app_type: "Mobile Application",
		github: "https://github.com/SamYu/stylist.ai",
		picture: "images/stylist.jpeg",
		technologies: "Django, Java, MySQL, Google Cloud, Tensorflow",
		description: `
			Stylist.ai is the perfect app for individuals who want to get their day going in a hurry and stay
			stylish at the same time. The app stores a database of the user's clothing items and uses the current
			weather and personal preferences to recommend outfits to wear. Personal preferences are trained over time
			in a neural network using tensor flow based on feedback of outfits given by the user. The server
			is written in Python using the Django framework to store each user's data.
		`,
	},
	{
		name: "Study Buddy",
		app_type: "Mobile Web Application",
		github: "https://github.com/karkevin/Study-Buddies",
		picture: "images/temp.png",
		technologies: "ExpressJS, NodeJS, Firebase, Azure, HMTL, CSS",
		description: `
			College students often find it to maintain friendships while in school. Study
			buddy is an application that helps users make friends/meet people to study with
			by filtering students in the area that are taking the similar courses and matches
			students based on their profile. Our applicaiton uses Microsoft Azure's
			machine learning string matching algorithm to provide a similarity rating between student's
			interests to send each student their top matches, helping build meaningful and helpful connections
			between students.
		`,
	},
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
	{
		name: "Bash",
		type: "language",
		level: "proficient",
		icon: "fas fa-dollar-sign",
	},
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
		level: "experienced",
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
	{
		name: "Kubernetes",
		type: "technology",
		level: "proficient",
		icon: "devicon-kubernetes-plain",
	},
	{
		name: "Docker",
		type: "technology",
		level: "proficient",
		icon: "devicon-docker-plain",
	},
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
		title: "Sports",
		image: "images/soccer.jpg",
		description: `
			I'm a huge fan of sports. I've made some of my best friends
			through sports and it has always been a great way for me to stay fit and have fun.
			I'm a huge basketball fan and always try to play pick up with friends when we have time, and I love watching and talking
			about the NBA.
			I played soccer and badminton and served as the captain of both teams in high school although I don't
			have the chance to play as much anymore. Unless I'm super busy, I try to regularly go to the gym for workouts
			around 3-4 times a week to help me stay in shape.
		`,
	},
	// {
	// 	title: "Speech + Debate",
	// 	image: "images/debate.jpg",
	// 	description:
	// 		"I first joined debate club to improve my public speaking but I quickly discovered that it was a rewarding and fun extracirricular that helps me stay educated on current events and issues. I participated as a member on my high school's speech and debate team and returned to my middle school as a volunteer coach. I also enjoyed participating in various other events including HSMUN and Mock Trials.",
	// },
	{
		title: "Travel",
		image: "images/travel.jpeg",
		description: `
			Travelling is an awesome way for me to spend time with my family since
			I'm away studying in University. We can often become lost in our daily lives and forget
			about the beautiful places that exist around us in the world. Travelling is something that
			helps me remember this, and reminds me of the important things in life. The picture shown here was taken by me
			in Jasper National Park in Canada which is definitely one of my favourite places to visit.
			Some other great places that I've visited before are Italy, France, Yellowstone, and Hawaii.
		`,
	},
	{
		title: "Gaming",
		image: "images/gaming.png",
		description: `
			Ever since I was a really young, I enjoyed playing video games in my free time. In fact,
			one of the original reasons why I wanted to learn coding was so I could make my own video games.
			I love the idea of being able to immerse myself in a game's world, which all have different things to do
			and quirks to discover. Some games are also a great way to have fun with friends, especially when you do
			things together in person. Some of my favourite games I've recently played are Hollow Knight, Uncharted,
			and Call of Duty!
		`
	}
];

export { experiences, skills, projects, activities };
