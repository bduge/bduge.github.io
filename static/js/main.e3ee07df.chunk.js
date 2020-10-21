(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=(a(14),a(15),a(1)),s=a(2),c=a(4),m=a(3),p=a(5),d=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-md fixed-top py-0"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("a",{className:"navbar-brand",href:"#header"},i.a.createElement("img",{id:"logo",className:"img-fluid",src:"/images/logo.png",alt:"logo"})),i.a.createElement("button",{className:"navbar-toggler nav-button py-2",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle Navigation"},i.a.createElement("i",{className:"fas fa-bars"}))),i.a.createElement("div",{id:"navbarContent",className:"collapse navbar-collapse"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#experience"},"Experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#skills"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#projects"},"Projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"#about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link shortcut highlight",href:"resume/resume.pdf",target:"_blank",rel:"noreferrer noopener"},"R\xe9sum\xe9")))))}}]),t}(n.Component)),u=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"header",className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row d-flex justify-content-center fader"},i.a.createElement("div",{className:"col-md-4 col-7"},i.a.createElement("img",{className:"img-fluid headshot mb-3 pb-1",src:"/images/headshot.jpg",alt:"Headshot"}))),i.a.createElement("div",{className:"row d-flex justify-content-center"},i.a.createElement("h1",null,"Bill DuGe")),i.a.createElement("div",{className:"row d-flex justify-content-center my-2"},i.a.createElement("a",{href:"https://github.com/bduge/",className:"mx-2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github highlight"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/bill-duge/",className:"mx-2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-linkedin highlight"})),i.a.createElement("a",{href:"mailto:billduge11@gmail.com",className:"mx-2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fas fa-envelope highlight"})," ")),i.a.createElement("div",{className:"row d-flex justify-content-center fader"},i.a.createElement("div",{className:"col-10 col-md-8"},i.a.createElement("p",null,"Hi there, thanks for visiting my website! My name is Bill and I'm a ",i.a.createElement("strong",null,"software engineer"),". I'm currently in my 3rd year of studying ",i.a.createElement("strong",null,"Computer Science")," in the Co-op program at the ",i.a.createElement("strong",null,"University of Waterloo"),"."),i.a.createElement("p",null,"I'm seeking a ",i.a.createElement("strong",null,"4 month internship "),"for Winter 2021 starting in ",i.a.createElement("strong",null,"January 2021"),". Scroll down to check out my previous work experiences and projects! If you're interested in working with me or just want to chat, feel free to send me an email at",i.a.createElement("strong",null," billduge11@gmail.com")," or a message on LinkedIn.")))))}}]),t}(n.Component)),h=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.description.map((function(e){return i.a.createElement("p",{key:e},"\u2022 ",e)}));return i.a.createElement("div",{className:"row d-flex justify-content-center justify-content-md-between my-5 fader"},i.a.createElement("div",{className:"col-12 col-md-4 px-5 mx-5 mx-md-0 px-md-0"},i.a.createElement("img",{className:"img-fluid mb-4 mb-md-0",src:this.props.logo,alt:this.props.company})),i.a.createElement("div",{className:"col-11 col-md-7"},i.a.createElement("div",{className:"row d-flex justify-content-between align-items-end"},i.a.createElement("h4",null,this.props.company),i.a.createElement("h6",{className:"d-none d-md-block float-right"},this.props.location)),i.a.createElement("div",{className:"row d-flex justify-content-between align-items-end"},i.a.createElement("h5",null,this.props.role),i.a.createElement("h6",{className:"float-left float-md-right"},this.props.date)),i.a.createElement("div",{className:"job-description"},e)))}}]),t}(n.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.experiences.map((function(e){return i.a.createElement(h,{key:e.company,company:e.company,location:e.location,date:e.date,logo:""+e.logo,role:e.role,description:e.description})}));return i.a.createElement("div",{id:"experience",className:"jumptarget"},i.a.createElement("h2",{className:"highlight ml-2 ml-sm-0"},"Experience"),i.a.createElement("div",null,e))}}]),t}(n.Component),f=(a(19),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row d-flex justify-content-center justify-content-md-between my-5 fader"},i.a.createElement("div",{className:"col-12 col-md-7"},i.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noreferrer noopener",className:"github-link"},i.a.createElement("h3",{className:""},this.props.name)),i.a.createElement("h6",{className:"float-lg-right italicise"},this.props.technologies),i.a.createElement("h6",null,this.props.app_type),i.a.createElement("p",null,this.props.description)),i.a.createElement("div",{className:"col-12 col-md-5 d-flex align-items-center"},i.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("img",{className:"img-fluid picture my-2",src:this.props.picture,alt:this.props.name}))))}}]),t}(n.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return i.a.createElement(f,{key:e.name,name:e.name,app_type:e.app_type,technologies:e.technologies,picture:""+e.picture,github:e.github,description:e.description})}));return i.a.createElement("div",{id:"projects",className:"jumptarget"},i.a.createElement("h2",{className:"highlight ml-2 ml-sm-0"},"Projects"),i.a.createElement("div",null,e))}}]),t}(n.Component),y=(a(7),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row d-flex justify-content-around my-3 fader"},i.a.createElement("div",{className:"col-3 icon"},i.a.createElement("i",{className:this.props.icon})),i.a.createElement("div",{className:"col-6 d-flex align-items-center"},this.props.name))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderSkills",value:function(e){return e.map((function(e){return i.a.createElement(y,{key:e.name,icon:e.icon,name:e.name})}))}},{key:"render",value:function(){var e=this.props.skills,t=e.filter((function(e){return"language"===e.type&&"experienced"===e.level})),a=e.filter((function(e){return"language"===e.type&&"proficient"===e.level})),n=e.filter((function(e){return"technology"===e.type&&"experienced"===e.level})),r=e.filter((function(e){return"technology"===e.type&&"proficient"===e.level}));return i.a.createElement("div",{id:"skills",className:"jumptarget"},i.a.createElement("h2",{className:"highlight ml-2 ml-sm-0"},"Skills"),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-12 col-md-6"},i.a.createElement("h3",{className:"mt-2 mb-3 ml-3 ml-md-0"},"Lanugages"),i.a.createElement("div",{className:"row d-flex justify-content-around"},i.a.createElement("div",{className:"col-5 col-md-6 d-flex flex-column d-md-block align-items-center"},i.a.createElement("h5",null,"Experienced"),i.a.createElement("div",null,this.renderSkills(t))),i.a.createElement("div",{className:"col-5 d-flex flex-column d-md-block justify-content-center"},i.a.createElement("h5",null,"Proficient"),i.a.createElement("div",null,this.renderSkills(a))))),i.a.createElement("div",{className:"col-12 col-md-6"},i.a.createElement("h3",{className:"mt-2 mb-3 ml-3 ml-md-0"},"Technologies"),i.a.createElement("div",{className:"row d-flex justify-content-around"},i.a.createElement("div",{className:"col-5 col-md-6 d-flex flex-column d-md-block align-items-center"},i.a.createElement("h5",null,"Experienced"),i.a.createElement("div",null,this.renderSkills(n))),i.a.createElement("div",{className:"col-5 d-flex flex-column d-md-block justify-content-center"},i.a.createElement("h5",null,"Proficient"),i.a.createElement("div",null,this.renderSkills(r)))))))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row d-flex justify-content-center justify-content-md-between my-5 fader"},i.a.createElement("div",{className:"col-12 col-md-3 mx-md-0 px-md-0"},i.a.createElement("img",{className:"img-fluid picture mb-4 mb-md-0",src:this.props.image,alt:this.props.title})),i.a.createElement("div",{className:"col-12 col-md-8"},i.a.createElement("h4",null,this.props.title),i.a.createElement("div",null,this.props.description)))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.activities.map((function(e){return i.a.createElement(E,{key:e.title,title:e.title,image:e.image,description:e.description})}));return i.a.createElement("div",{id:"about",className:"jumptarget pb-5"},i.a.createElement("h2",{className:"highlight my-4 ml-2 ml-sm-0"},"About Me"),i.a.createElement("p",{className:"ml-2 ml-sm-0"},"I'm very passionate about software engineering but there are a lot of other things I like to do with my free time. Feel free to read through this section if you're interested in learning a bit more about me personally!"),i.a.createElement("div",null,e))}}]),t}(n.Component),k=[{company:"Wish",location:"San Francisco, California",date:"May 2020 - August 2020",logo:"images/wish.png",role:"Software Engineer Intern",description:["Built front end components and APIs for merchant facing web application used for managing products, shipments, and logistics tasks","Wrote one-off and scheduled scripts to complete database queries used to facilitate international and domestic shipping logistics"]},{company:"Youreka Canada",location:"Remote",date:"November 2019 - Present",logo:"images/youreka.png",role:"Software Engineer",description:["Developed full stack web application using Django to organize the submission and evaluation of applicants, greatly increasing efficiency of application processing","Acting as technical consultant in meetings with organization executives to identify target areas which can be improved through software solutions"]},{company:"Connected",location:"Toronto, Ontario",date:"May 2019 - August 2019",logo:"images/connected.png",role:"QA Automation Developer Intern",description:["Spearheaded creation of command line framework to automate submissions to the cloud platform TestRail, decreasing time for smoke and regression test suites by 40%","Developed electron application to automate voice testing Alexa skills, allowing developers to easily create test cases and visualize conversations with Alexa","Performed testing and on mobile application for multi-billionaire music speaker company"]},{company:"University of Waterloo Robotics Club",location:"Waterloo, Ontario",date:"October 2018 - April 2019",logo:"images/uw_robotics.png",role:"Software Engineer",description:["Developed software for a Mars rover to compete in the University Rover Challenge","Created GUI for the rover's control interface that displays real time input from an XBOX 360 controller using ROS and C++, providing a seamless interface for drivers"]}],N=[{name:"Stylist.ai",app_type:"Android Application",github:"https://github.com/SamYu/stylist.ai",picture:"images/stylist.jpeg",technologies:"Django, Java, MySQL, Google Cloud, Tensorflow",description:"Stylist.ai is the perfect app for individuals who want to get their day going in a hurry and stay stylish at the same time. The app stores a database of the user's clothing items and uses the current weather and personal preferences to recommend outfits to wear. Personal preferences are trained over time in a neural network using tensor flow based on feedback of outfits given by the user."},{name:"Study Buddies",app_type:"Mobile Web Application",github:"https://github.com/karkevin/Study-Buddies",picture:"images/temp.png",technologies:"ExpressJS, NodeJS, Firebase, Azure, HMTL, CSS",description:"College students often find it to maintain friendships while in school. Study buddy is an application that helps users make friends/meet people to study with by filtering students in the area that are taking the similar courses and matches students based on similar interests. Our applicaiton implements Microsoft Azure's machine learning matching algorithm to provide the best possible matches."},{name:"Reddit Cyberbullying Detection Bot",app_type:"Python Script",github:"https://github.com/bduge/Cyberbullying-Detection-Bot",picture:"images/reddit.png",technologies:"Python, Scikit-Learn",description:"Online communities provide a great platform for sharing and discussing ideas. Unfortunately, cyberbullying remains a prevalent problem in many online groups. This bot aims to tackle this issue in Reddit's comment sections by scrapping comments from top posts on subreddits and running them through our trained nerual network engine aimed to detect cyberbulling."},{name:"Skin Profile",app_type:"Web Application",github:"https://github.com/menavya16/skinprofile",picture:"images/skinprofile.png",technologies:"Javascript, PHP, MySQL, HTML, CSS, Bootstrap",description:"Skin Profile is a web applicatino aimed to help users better manage their skin care routine by recommending products at an affordable price. Our application stores user information about their skin type and characteristics and based on this information recommends the most suitable products in our database. Winner of Top 10 project prize at University of Toronto Hacks VI."},{name:"OCR Word Search Solver",app_type:"Desktop Application",github:"https://github.com/bduge/OCR-Word-Search-Solver",picture:"images/wordsearch1.png",technologies:"Python, Tesseract-OCR, Tkinter",description:"Using the Tesseract-OCR (optical character recognition) engine, this application takes in an image of any word search and is able to replicate its contents in encoded text and find any hidden words. The program then uses Tkinter to generate a GUI that displays the solved word search with words highlighted."}],w=[{name:"Python",type:"language",level:"experienced",icon:"fab fa-python"},{name:"JavaScript",type:"language",level:"experienced",icon:"fab fa-js-square"},{name:"C++",type:"language",level:"experienced",icon:"devicon-cplusplus-plain"},{name:"HTML",type:"language",level:"experienced",icon:"fab fa-html5"},{name:"CSS",type:"language",level:"experienced",icon:"fab fa-css3-alt"},{name:"C",type:"language",level:"proficient",icon:"devicon-c-plain"},{name:"Java",type:"language",level:"proficient",icon:"fab fa-java"},{name:"SQL",type:"language",level:"proficient",icon:"fas fa-database"},{name:"Bash",type:"language",level:"proficient",icon:"fas fa-dollar-sign"},{name:"React",type:"technology",level:"experienced",icon:"fab fa-react"},{name:"Express",type:"technology",level:"experienced",icon:"devicon-express-original"},{name:"Django",type:"technology",level:"experienced",icon:"devicon-django-plain"},{name:"Bootstrap",type:"technology",level:"experienced",icon:"devicon-bootstrap-plain"},{name:"MySQL",type:"technology",level:"proficient",icon:"devicon-mysql-plain"},{name:"MongoDB",type:"technology",level:"experienced",icon:"devicon-mongodb-plain"},{name:"jQuery",type:"technology",level:"proficient",icon:"devicon-jquery-plain"},{name:"git",type:"technology",level:"experienced",icon:"devicon-git-plain"},{name:"Selenium",type:"technology",level:"proficient",icon:"fas fa-mouse-pointer"},{name:"Racket",type:"language",level:"proficient",icon:"fas fa-star-of-life"},{name:"Backbone.js",type:"technology",level:"proficient",icon:"devicon-backbonejs-plain colored"},{name:"Electron",type:"technology",level:"proficient",icon:"icofont-electron"}],x=[{title:"Being Active",image:"images/soccer.jpg",description:"I've always loved playing sports. I've made some of my best friends through sports and it's also a great way to stay healthy and have fun. I played club soccer and badminton and served as the captain of the soccer and badminton teams at my high school. I no longer play organized sports but I still regularly go on runs, play pickup basketball, and work out."},{title:"Speech + Debate",image:"images/debate.jpg",description:"I first joined debate club to improve my public speaking but I quickly discovered that it was a rewarding and fun extracirricular that helps me stay educated on current events and issues. I participated as a member on my high school's speech and debate team and returned to my middle school as a volunteer coach. I also enjoyed participating in various other events including HSMUN and Mock Trials."},{title:"Travel",image:"images/travel.jpeg",description:"I find travelling to be a great way to spend time with my family since I'm away studying in University. Some of my fondest memories are discovering beautiful scenes in different corners of the world. Everyone needs breaks and sometimes taking a step away from work to recharge is the best way of staying productive."}];var O=function(){return i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement(u,null),i.a.createElement("div",{className:"container"},i.a.createElement(g,{experiences:k}),i.a.createElement(v,{skills:w}),i.a.createElement(b,{projects:N}),i.a.createElement(j,{activities:x})))};o.a.render(i.a.createElement(O,null),document.getElementById("root"));var S=document.querySelectorAll(".fader"),C=new IntersectionObserver((function(e,t){e.forEach((function(e){var t=e.target;e.isIntersecting?(t.classList.remove("fade-out"),t.classList.add("fade-in")):(t.classList.add("fade-out"),t.classList.remove("fade-in"))}))}),{threshold:.3,rootMargin:"-75px 0px 0px 0px"});S.forEach((function(e){C.observe(e)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e3ee07df.chunk.js.map