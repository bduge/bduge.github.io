(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=(a(14),a(15),a(1)),s=a(2),c=a(4),m=a(3),p=a(5),u=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-md fixed-top py-0"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("a",{className:"navbar-brand",href:"#header"},i.a.createElement("img",{id:"logo",className:"img-fluid",src:"/images/logo.png",alt:"logo"})),i.a.createElement("button",{className:"navbar-toggler nav-button py-2",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle Navigation"},i.a.createElement("i",{className:"fas fa-bars"}))),i.a.createElement("div",{id:"navbarContent",className:"collapse navbar-collapse"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#experience"},"Experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#skills"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#projects"},"Projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"resume/resume.pdf",target:"_blank",rel:"noreferrer noopener"},"Resume")))))}}]),t}(n.Component)),d=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"header",className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row d-flex justify-content-center fader"},i.a.createElement("div",{className:"col-md-4 col-7"},i.a.createElement("img",{className:"img-fluid headshot mb-3 pb-1",src:"/images/headshot.jpg",alt:"Headshot"}))),i.a.createElement("div",{className:"row d-flex justify-content-center"},i.a.createElement("h1",null,"Bill DuGe")),i.a.createElement("div",{className:"row d-flex justify-content-center my-2"},i.a.createElement("a",{href:"https://github.com/bduge/",className:"mx-2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github highlight"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/bill-duge/",className:"mx-2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-linkedin highlight"})),i.a.createElement("a",{href:"mailto:billduge11@gmail.com",className:"mx-2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fas fa-envelope highlight"})," ")),i.a.createElement("div",{className:"row d-flex justify-content-center fader"},i.a.createElement("div",{className:"col-10 col-md-8"},i.a.createElement("p",null,"Hi there, thanks for visiting my website! My name is Bill and I'm a ",i.a.createElement("strong",null,"software engineer"),". I'm currently in my 3rd year of studying ",i.a.createElement("strong",null,"Computer Science")," in the Co-op program at the ",i.a.createElement("strong",null,"University of Waterloo"),"."),i.a.createElement("p",null,"I'm seeking a ",i.a.createElement("strong",null,"4 month internship "),"for Fall 2021 starting in ",i.a.createElement("strong",null,"September 2021"),". Scroll down to check out my previous work experiences and projects! If you're interested in working with me or just want to chat, feel free to send me an email at",i.a.createElement("strong",null," billduge11@gmail.com")," or a message on LinkedIn.")))))}}]),t}(n.Component)),h=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.description.map((function(e){return i.a.createElement("p",{key:e},"\u2022 ",e)}));return i.a.createElement("div",{className:"row d-flex justify-content-center justify-content-md-between my-5 fader"},i.a.createElement("div",{className:"col-12 col-md-4 px-5 mx-5 mx-md-0 px-md-0"},i.a.createElement("a",{href:this.props.website,target:"_blank",rel:"noreferrer noopener",className:"github-link"},i.a.createElement("img",{className:"img-fluid mb-4 mb-md-0",src:this.props.logo,alt:this.props.company}))),i.a.createElement("div",{className:"col-11 col-md-7"},i.a.createElement("div",{className:"row d-flex justify-content-between align-items-end"},i.a.createElement("h4",null,this.props.company),i.a.createElement("h6",{className:"d-none d-md-block float-right"},this.props.location)),i.a.createElement("div",{className:"row d-flex justify-content-between align-items-end"},i.a.createElement("h5",null,this.props.role),i.a.createElement("h6",{className:"float-left float-md-right"},this.props.date)),i.a.createElement("div",{className:"job-description"},e)))}}]),t}(n.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.experiences.map((function(e){return i.a.createElement(h,{key:e.company,company:e.company,location:e.location,date:e.date,logo:""+e.logo,role:e.role,description:e.description,website:e.website})}));return i.a.createElement("div",{id:"experience",className:"jumptarget"},i.a.createElement("h2",{className:"highlight ml-2 ml-sm-0"},"Experience"),i.a.createElement("div",null,e))}}]),t}(n.Component),f=(a(19),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row d-flex justify-content-center justify-content-md-between my-5 fader"},i.a.createElement("div",{className:"col-11 col-md-7"},i.a.createElement("div",{className:"row d-flex justify-content-end align-items-center"},i.a.createElement("h3",{className:"mr-auto mb-0"},this.props.name),i.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noreferrer noopener",className:"mr-3"},i.a.createElement("i",{className:"fab fa-github project-link"})),this.props.link?i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noreferrer noopener",className:"github-link"},i.a.createElement("h4",null,this.props.website)):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"row d-flex justify-content-between"},i.a.createElement("h6",null,this.props.technologies),i.a.createElement("h6",{className:"d-none d-md-block float-right"},this.props.app_type)),i.a.createElement("div",{className:"row"},this.props.description)),i.a.createElement("div",{className:"col-12 col-md-5 px-md-2"},i.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("img",{className:"img-fluid picture my-2 mx-2",src:this.props.picture,alt:this.props.name}))))}}]),t}(n.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return i.a.createElement(f,{key:e.name,name:e.name,app_type:e.app_type,technologies:e.technologies,picture:""+e.picture,github:e.github,description:e.description,link:e.link,website:e.website})}));return i.a.createElement("div",{id:"projects",className:"jumptarget"},i.a.createElement("h2",{className:"highlight ml-2 ml-sm-0"},"Projects"),i.a.createElement("div",null,e))}}]),t}(n.Component),b=(a(7),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row d-flex justify-content-around my-3 fader"},i.a.createElement("div",{className:"col-3 icon"},i.a.createElement("i",{className:this.props.icon})),i.a.createElement("div",{className:"col-6 d-flex align-items-center"},this.props.name))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderSkills",value:function(e){return e.map((function(e){return i.a.createElement(b,{key:e.name,icon:e.icon,name:e.name})}))}},{key:"render",value:function(){var e=this.props.skills,t=e.filter((function(e){return"language"===e.type&&"experienced"===e.level})),a=e.filter((function(e){return"language"===e.type&&"proficient"===e.level})),n=e.filter((function(e){return"technology"===e.type&&"experienced"===e.level})),r=e.filter((function(e){return"technology"===e.type&&"proficient"===e.level}));return i.a.createElement("div",{id:"skills",className:"jumptarget"},i.a.createElement("h2",{className:"highlight ml-2 ml-sm-0"},"Skills"),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-12 col-md-6"},i.a.createElement("h3",{className:"mt-2 mb-3"},"Lanugages"),i.a.createElement("div",{className:"row d-flex justify-content-between"},i.a.createElement("div",{className:"col-5 col-md-6 d-flex flex-column d-md-block align-items-center"},i.a.createElement("h5",null,"Experienced"),i.a.createElement("div",null,this.renderSkills(t))),i.a.createElement("div",{className:"col-5 col-md-6 d-flex flex-column d-md-block align-items-center"},i.a.createElement("h5",null,"Proficient"),i.a.createElement("div",null,this.renderSkills(a))))),i.a.createElement("div",{className:"col-12 col-md-6"},i.a.createElement("h3",{className:"mt-2 mb-3"},"Technologies"),i.a.createElement("div",{className:"row d-flex justify-content-between"},i.a.createElement("div",{className:"col-5 col-md-6 d-flex flex-column d-md-block align-items-center"},i.a.createElement("h5",null,"Experienced"),i.a.createElement("div",null,this.renderSkills(n))),i.a.createElement("div",{className:"col-5 col-md-6 d-flex flex-column d-md-block align-items-center"},i.a.createElement("h5",null,"Proficient"),i.a.createElement("div",null,this.renderSkills(r)))))))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row d-flex justify-content-center justify-content-md-between my-5 fader"},i.a.createElement("div",{className:"col-12 col-md-3 mx-md-0 px-md-0"},i.a.createElement("img",{className:"img-fluid picture mb-4 mb-md-0",src:this.props.image,alt:this.props.title})),i.a.createElement("div",{className:"col-12 col-md-8"},i.a.createElement("h4",null,this.props.title),i.a.createElement("div",null,this.props.description)))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.activities.map((function(e){return i.a.createElement(E,{key:e.title,title:e.title,image:e.image,description:e.description})}));return i.a.createElement("div",{id:"about",className:"jumptarget pb-5"},i.a.createElement("h2",{className:"highlight my-4 ml-2 ml-sm-0"},"About Me"),i.a.createElement("p",{className:"ml-2 ml-sm-0"},"I'm a passionate software engineer but there's also a lot more to life than working. Please feel free to read through this section if you're interested in learning a bit more about me personally. Don't hesitate to reach out if you want to chat about something non-work related!"),i.a.createElement("div",null,e))}}]),t}(n.Component),k=[{company:"Wish",website:"https://www.wish.com/companyinfo",location:"San Francisco, California",date:"May 2020 - August 2020 / January 2021 - April 2021",logo:"images/wish.png",role:"Software Engineer Intern",description:["Built buy-again feature to recommend products with high reorder probability to customers by implementing APIs and managing recommendation data in Redux state, resulting in increased item purchases","Developed user facing web features on both desktop and mobile clients using React and Redux in TypeScript, improving the post-purchase user experience","Created Python services to resolve shipment issues, gather shipping data, and optimize item packaging to facilitate efficient shipping","Developed APIs to generate product recommendations for different shipment fulfillment options that merchants can use to improve delivery speed"]},{company:"Youreka Canada",website:"https://yourekacanada.org",location:"Remote",date:"November 2019 - December 2020",logo:"images/youreka.png",role:"Software Engineer",description:["Designed and built a full stack application with Django and MySQL from the ground up, allowing employees to evaluate program applicants on an organized platform, increasing the efficiency of application processing by 30%","Acted as technical consultant in meetings with organization executives to identify target areas which can be improved through software solutions"]},{company:"Connected",website:"https://www.connected.io",location:"Toronto, Ontario",date:"May 2019 - August 2019",logo:"images/connected.png",role:"QA Automation Developer Intern",description:["Spearheaded development of a Python command line tool to automate submitting test results online, reducing time spent on QA testing by over 40%","Built desktop application using Electron to test Alexa voice applications, providing a framework to easily test different conversation flows and quickly view results after executing tests"]},{company:"University of Waterloo Robotics Team",website:"https://uwrobotics.uwaterloo.ca/",location:"Waterloo, Ontario",date:"October 2018 - April 2019",logo:"images/uw_robotics.png",role:"Software Engineer",description:["Developed C++ software for a Mars rover to compete in the University Rover Challenge","Created GUI for the rover's control interface that displays real time input from an XBOX 360 controller using ROS and C++, providing a seamless interface for drivers"]}],j=[{name:"Juke Jam",link:"http://juke-jam.com",website:"juke-jam.com",app_type:"Web Application",github:"https://github.com/bduge/juke-jam",picture:"images/jukejam.png",technologies:"React, Redux, Express, SocketIO, MongoDB",description:"\n\t\t\tShare the love of music with friends! Juke Jam allows users to create a private room, invite\n\t\t\ttheir friends, and play music through their Spotify account. Invited guests can add songs\n\t\t\tto the queue where everyone can vote on it! The top voted songs will appear at the top of the\n\t\t\tqueue which represents the order that songs will be played in. This app works by making Spotify API calls\n\t\t\twith an Express server. The client side application was created with React and Redux. Finally, everything is\n\t\t\ttied together using SocketIO, which syncs the client and server states in real time.\n\t\t"},{name:"Cyberbullying Detection Bot",app_type:"Python Bot",github:"https://github.com/bduge/Cyberbullying-Detection-Bot",picture:"images/reddit.png",technologies:"Python, Scikit-Learn",description:"\n\t\t\tOnline communities provide a great platform for sharing and discussing ideas.\n\t\t\tUnfortunately, cyberbullying is a serious problem in many online groups, which may deter\n\t\t\tusers from partipating. This bot aims to tackle this issue in Reddit's comment sections by \n\t\t\tscrapping comments from top posts on subreddits and running them through our trained nerual network engine\n\t\t\tto detect instances of cyberbullying. The neural network was built using\n\t\t\tScikit-learn's ML training methods with a dataset of offensive words.\n\t\t"},{name:"Stylist.ai",app_type:"Mobile Application",github:"https://github.com/SamYu/stylist.ai",picture:"images/stylist.jpeg",technologies:"Django, Java, MySQL, Google Cloud, Tensorflow",description:"\n\t\t\tStylist.ai is the perfect app for individuals who want to get their day going in a hurry by saving time\n\t\t\twhen finding the perfect outfit. The app stores a database of the user's clothing items and uses the current\n\t\t\tweather and personal preferences to recommend outfits to wear. Personal preferences are trained over time\n\t\t\tin a neural network using tensor flow based on feedback of outfits given by the user. The server\n\t\t\tis written in Python using the Django framework manage the user's data.\n\t\t"},{name:"Study Buddy",app_type:"Mobile Web Application",github:"https://github.com/karkevin/Study-Buddies",picture:"images/temp.png",technologies:"ExpressJS, NodeJS, Firebase, Azure, HMTL, CSS",description:"\n\t\t\tCollege students often find it to maintain friendships while in school. Study\n\t\t\tbuddy is an application that helps users make friends/meet people to study with\n\t\t\tby filtering students in the area that are taking similar courses and matches\n\t\t\tstudents based on their profile. Our applicaiton uses Microsoft Azure's\n\t\t\tmachine learning string matching algorithm to provide a similarity rating between student's\n\t\t\tinterests to send each student their top matches, helping to build meaningful and helpful connections\n\t\t\tbetween students.\n\t\t"}],N=[{name:"Python",type:"language",level:"experienced",icon:"fab fa-python"},{name:"C++",type:"language",level:"experienced",icon:"devicon-cplusplus-plain"},{name:"C",type:"language",level:"proficient",icon:"devicon-c-plain"},{name:"JavaScript",type:"language",level:"experienced",icon:"fab fa-js-square"},{name:"TypeScript",type:"language",level:"experienced",icon:"devicon-typescript-plain"},{name:"HTML/CSS",type:"language",level:"experienced",icon:"fab fa-html5"},{name:"Go",type:"language",level:"proficient",icon:"devicon-go-plain"},{name:"Java",type:"language",level:"proficient",icon:"fab fa-java"},{name:"SQL",type:"language",level:"proficient",icon:"fas fa-database"},{name:"Bash",type:"language",level:"proficient",icon:"fas fa-dollar-sign"},{name:"React",type:"technology",level:"experienced",icon:"fab fa-react"},{name:"Redux",type:"technology",level:"experienced",icon:"devicon-redux-original"},{name:"Express",type:"technology",level:"experienced",icon:"devicon-express-original"},{name:"Django",type:"technology",level:"experienced",icon:"devicon-django-plain"},{name:"Bootstrap",type:"technology",level:"experienced",icon:"devicon-bootstrap-plain"},{name:"MongoDB",type:"technology",level:"experienced",icon:"devicon-mongodb-plain"},{name:"jQuery",type:"technology",level:"proficient",icon:"devicon-jquery-plain"},{name:"Kubernetes",type:"technology",level:"proficient",icon:"devicon-kubernetes-plain"},{name:"Docker",type:"technology",level:"proficient",icon:"devicon-docker-plain"},{name:"AWS",type:"technology",level:"proficient",icon:"devicon-amazonwebservices-original"},{name:"Selenium",type:"technology",level:"proficient",icon:"fas fa-mouse-pointer"},{name:"Electron",type:"technology",level:"proficient",icon:"icofont-electron"}],x=[{title:"Sports",image:"images/soccer.jpg",description:"\n\t\t\tI'm a huge fan of sports. I've made some of my best friends\n\t\t\tthrough sports and it has always been a great way for me to stay fit and have fun.\n\t\t\tI'm a huge basketball fan, I love playing pick up with friends and watching/talking\n\t\t\tabout the NBA.\n\t\t\tI also play soccer and badminton and was the captain of both teams in high school although I don't\n\t\t\thave the chance to play as much anymore. Unless I'm super busy, I try to regularly go to the gym for workouts\n\t\t\taround 3-4 times a week to help me stay in shape. \n\t\t"},{title:"Travel",image:"images/travel.jpeg",description:"\n\t\t\tA great quote I like is \"travel is the only thing you buy that makes you richer\".\n\t\t\tI can often become lost in the haze of busy or stressful days. Travelling is something that\n\t\t\thelps me take a break, reflect, and remember the important things in life. The picture\n\t\t\tshown here was taken by me in Jasper National Park in Canada which is definitely one of my\n\t\t\tfavourite places to visit. There's many places I'd like to visit but the two near the\n\t\t\ttop of my list right now are Iceland and Japan.\n\t\t"},{title:"Gaming",image:"images/gaming.png",description:"\n\t\t\tEver since I was really young, I enjoyed playing video games in my free time. In fact,\n\t\t\tone of the original reasons why I wanted to learn coding was so I could make my own video games.\n\t\t\tI love being able to immerse myself in a game's world, which all have different things to do and explore.\n\t\t\tSome games are also a great way to have fun with friends, especially when you can't do things together in\n\t\t\tperson. Some of my favourite games I've recently played are Hollow Knight, Uncharted,\n\t\t\tand Call of Duty.\n\t\t"}];var O=function(){return i.a.createElement("div",null,i.a.createElement(u,null),i.a.createElement(d,null),i.a.createElement("div",{className:"container"},i.a.createElement(g,{experiences:k}),i.a.createElement(v,{skills:N}),i.a.createElement(y,{projects:j}),i.a.createElement(w,{activities:x})))};o.a.render(i.a.createElement(O,null),document.getElementById("root"));var S=document.querySelectorAll(".fader"),I=new IntersectionObserver((function(e,t){e.forEach((function(e){var t=e.target;e.isIntersecting?(t.classList.remove("fade-out"),t.classList.add("fade-in")):(t.classList.add("fade-out"),t.classList.remove("fade-in"))}))}),{threshold:.3,rootMargin:"-75px 0px 0px 0px"});S.forEach((function(e){I.observe(e)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a8d82e1a.chunk.js.map