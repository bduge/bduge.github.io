const experiences = [
	// {
	// 	company: "Wish",
	// 	location: "San Francisco, California",
	// 	date: "May 2020 - Present",
	// 	logo: "images/wish.png",
	// 	role: "Software Engineer Intern",
	// 	description: [],
	// },
	{
		company: "Youreka Canada",
		location: "Remote",
		date: "November 2019 - Present",
		logo: "images/youreka.png",
		role: "Software Developer",
		description: [
			"Developed full stack web application using Django to organize the submission and evaluation of applicants, greatly increasing efficiency of application processing",
			"Acting as technical consultant in meetings with organization executives to identify target areas which can be improved through software solutions",
		],
	},
	{
		company: "Connected",
		location: "Toronto, Ontario",
		date: "May 2019 - August 2019",
		logo: "images/connected.png",
		role: "QA Automation Developer Intern",
		description: [
			"Spearheaded creation of command line framework to automate submissions to the cloud platform TestRail, decreasing time for smoke and regression test suites by 40%",
			"Developed electron application to automate voice testing Alexa skills, allowing developers to easily create test cases and visualize conversations with Alexa",
			"Performed testing and on mobile application for multi-billionaire music speaker company",
		],
	},
	{
		company: "University of Waterloo Robotics Club",
		location: "Waterloo, Ontario",
		date: "October 2018 - April 2019",
		logo: "images/uw_robotics.png",
		role: "Software Developer",
		description: [
			"Developed software for a Mars rover to compete in the University Rover Challenge",
			"Created GUI for the rover's control interface that displays real time input from an XBOX 360 controller using ROS and C++, providing a seamless interface for drivers",
		],
	},
];

const projects = [
	{
		name: "Stylist.ai",
		app_type: "Android Application",
		github: "https://github.com/SamYu/stylist.ai",
		picture: "images/stylist.jpeg",
		technologies: "Django, Java, MySQL, Google Cloud, Tensorflow",
		description:
			"Stylist.ai is the perfect app for individuals who want to get their day going in a hurry and stay stylish at the same time. The app stores a database of the user's clothing items and uses the current weather and personal preferences to recommend outfits to wear. Personal preferences are trained over time in a neural network using tensor flow based on feedback of outfits given by the user.",
	},
	{
		name: "Study Buddies",
		app_type: "Mobile Web Application",
		github: "https://github.com/karkevin/Study-Buddies",
		picture: "images/temp.png",
		technologies: "ExpressJS, NodeJS, Firebase, Azure, HMTL, CSS",
		description:
			"College students often find it to maintain friendships while in school. Study buddy is an application that helps users make friends/meet people to study with by filtering students in the area that are taking the similar courses and matches students based on similar interests. Our applicaiton implements Microsoft Azure's machine learning matching algorithm to provide the best possible matches.",
	},
	{
		name: "Reddit Cyberbullying Detection Bot",
		app_type: "Python Script",
		github: "https://github.com/bduge/Cyberbullying-Detection-Bot",
		picture: "images/reddit.png",
		technologies: "Python, Scikit-Learn",
		description:
			"Online communities provide a great platform for sharing and discussing ideas. Unfortunately, cyberbullying remains a prevalent problem in many online groups. This bot aims to tackle this issue in Reddit's comment sections by scrapping comments from top posts on subreddits and running them through our trained nerual network engine aimed to detect cyberbulling.",
	},
	{
		name: "Skin Profile",
		app_type: "Web Application",
		github: "https://github.com/menavya16/skinprofile",
		picture: "images/skinprofile.png",
		technologies: "Javascript, PHP, MySQL, HTML, CSS, Bootstrap",
		description:
			"Skin Profile is a web applicatino aimed to help users better manage their skin care routine by recommending products at an affordable price. Our application stores user information about their skin type and characteristics and based on this information recommends the most suitable products in our database. Winner of Top 10 project prize at University of Toronto Hacks VI.",
	},
	{
		name: "OCR Word Search Solver",
		app_type: "Desktop Application",
		github: "https://github.com/bduge/OCR-Word-Search-Solver",
		picture: "images/wordsearch1.png",
		technologies: "Python, Tesseract-OCR, Tkinter",
		description:
			"Using the Tesseract-OCR (optical character recognition) engine, this application takes in an image of any word search and is able to replicate its contents in encoded text and find any hidden words. The program then uses Tkinter to generate a GUI that displays the solved word search with words highlighted.",
	},
];

const skills = [
	{
		name: "Python",
		type: "language",
		level: "experienced",
		icon: "fab fa-python",
	},
	{
		name: "JavaScript",
		type: "language",
		level: "experienced",
		icon: "fab fa-js-square",
	},
	{
		name: "C++",
		type: "language",
		level: "experienced",
		icon: "devicon-cplusplus-plain",
	},
	{
		name: "HTML",
		type: "language",
		level: "experienced",
		icon: "fab fa-html5",
	},
	{
		name: "CSS",
		type: "language",
		level: "experienced",
		icon: "fab fa-css3-alt",
	},
	{
		name: "C",
		type: "language",
		level: "proficient",
		icon: "devicon-c-plain",
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
		level: "proficient",
		icon: "fab fa-react",
	},
	{
		name: "Node.js",
		type: "technology",
		level: "experienced",
		icon: "fab fa-node",
	},
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
	{
		name: "MySQL",
		type: "technology",
		level: "proficient",
		icon: "devicon-mysql-plain",
	},
	{
		name: "MongoDB",
		type: "technology",
		level: "proficient",
		icon: "devicon-mongodb-plain",
	},
	{
		name: "Google Cloud",
		type: "technology",
		level: "proficient",
		icon: "fas fa-cloud",
	},
	{
		name: "jQuery",
		type: "technology",
		level: "proficient",
		icon: "devicon-jquery-plain",
	},
	{
		name: "git",
		type: "technology",
		level: "experienced",
		icon: "devicon-git-plain",
	},
	{
		name: "Electron",
		type: "technology",
		level: "proficient",
		icon: "icofont-electron",
	},
	{
		name: "Selenium",
		type: "technology",
		level: "proficient",
		icon: "fas fa-mouse-pointer",
	},
	{
		name: "Racket",
		type: "language",
		level: "proficient",
		icon: "fas fa-star-of-life",
	},
];

const activities = [
	{
		title: "Being Active",
		image: "images/soccer.jpg",
		description:
			"I've always loved playing sports. I've made some of my best friends through sports and it's also a great way to stay healthy and have fun. I played club soccer and badminton and served as the captain of the soccer and badminton teams at my high school. I no longer play organized sports but I still regularly go on runs, play pickup basketball, and work out.",
	},
	{
		title: "Speech + Debate",
		image: "images/debate.jpg",
		description:
			"I first joined debate club to improve my public speaking but I quickly discovered that it was a rewarding and fun extracirricular that helps me stay educated on current events and issues. I participated as a member on my high school's speech and debate team and returned to my middle school as a volunteer coach. I also enjoyed participating in various other events including HSMUN and Mock Trials.",
	},
	{
		title: "Travel",
		image: "images/travel.jpeg",
		description:
			"I find travelling to be a great way to spend time with my family since I'm away studying in University. Some of my fondest memories are discovering beautiful scenes in different corners of the world. Everyone needs breaks and sometimes taking a step away from work to recharge is the best way of staying productive.",
	},
];

export { experiences, skills, projects, activities };
