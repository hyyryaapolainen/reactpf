(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/RUIN.7708ed5d.png"},18:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/dump (2).4edeb595.png"},22:function(e,a,t){e.exports=t.p+"static/media/Harava.aa2ff682.gif"},23:function(e,a,t){e.exports=t.p+"static/media/outdoor (41).750f6620.JPG"},24:function(e,a,t){e.exports=t.p+"static/media/Kuva1.4782c48c.png"},26:function(e,a,t){e.exports=t.p+"static/media/outdoor (25) edited.4d590da6.png"},27:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(20),l=t.n(r),c=(t(18),t(9)),o=t(21),s=t.n(o),m=t(22),d=t.n(m),u=t(23),p=t.n(u),g=t(24),E=t.n(g),f=t(13),h=t.n(f),y=[{name:"Thesis - 2022",description:"My thesis was about researching procedural generation and methods used to produce procedural landscapes.",id:4,pic:E.a,picDim:[300,500],subtitle:"I researched and developed a PCG-system that can produce 3D-islands in Unity using C#, Perlin Noise, procedural meshes and textures",link:"",category:1},{name:"Ruin - 2021",description:"RUIN is a 3D action roguelite developed during the TiCorporate business simulation class ",id:2,pic:h.a,picDim:[300,500],subtitle:"Read more about the stuff I learned, developed and struggled with by visiting the post-mortem website!",link:"https://hyyryaapolainen.github.io/ruinportfolio/",category:1},{name:"Harava - 2020",description:"Harava is a 2D adventure RPG concept that I designed for a game design course. The process included creating pixel art, game design and music.",id:3,pic:d.a,picDim:[300,500],subtitle:"Art created with Asesprite and Photoshop. Music with FL Studio ",link:"",category:1},{name:"BONK! - 2019",description:"Bonk is a 3D top-down shooter developed using C# and Unity. Bonk! was my first fully self-made video game with a proper gameplay loop.",id:1,pic:s.a,picDim:[300,500],subtitle:"It was my first leap into C# and Unity development with mostly built-in Unity assets",link:"",category:1},{name:"Personal Website - 2022",description:"I made this webpage as a github pages repo to present some of the work I've done during my studies",id:2,pic:p.a,picDim:[300,500],subtitle:"This website was made using CSS (SASS) and React",link:"https://github.com/hyyryaapolainen/reactpf",category:2},{name:"Ruin Portfolio Website - 2021",description:"I made a github pages repo for the work I did for RUIN",id:2,pic:h.a,picDim:[300,300],subtitle:"The webpage was created using HTML, CSS and published with Github Pages",link:"https://github.com/hyyryaapolainen/ruinportfolio",category:2}],v=t(6),b=t(10),N=(t(11),[{color:"#ff0055",location:"/reactpf",name:"Home",id:"linktohome",icon:"fas fa-home"},{color:"#0099ff",location:"/Projects",name:"Projects",id:"linktoprojects",icon:"far fa-check-square"}]);function k(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"footer"},i.a.createElement("ul",{className:"footer-links"},i.a.createElement("li",null,i.a.createElement("a",{style:{color:"white"},href:"mailto:a.hyyrylainen79@gmail.com"},i.a.createElement("i",{className:"fa fa-envelope"}))),i.a.createElement("li",null,i.a.createElement("a",{style:{color:"white"},href:"https://github.com/hyyryaapolainen/"},i.a.createElement("i",{className:"fab fa-github-square"}))),i.a.createElement("li",null,i.a.createElement("a",{style:{color:"white"},href:"https://www.linkedin.com/in/aapo-hyyryl%C3%A4inen-72baa7158/"},i.a.createElement("i",{className:"fab fa-linkedin"}))))))}function w(e){return i.a.createElement("div",{className:"container "+e.type},e.children)}function I(e){return i.a.createElement("div",{className:e.type+" text"},e.children)}function x(e){var a=e.pr,t=Object(n.useState)(!1),r=Object(c.a)(t,2),l=r[0],o=r[1],s={open:{opacity:0,scale:1},closed:{opacity:1}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"gallery-item"},i.a.createElement("h4",{className:"gallery-title"},a.name),i.a.createElement("div",{className:"image-container",onClick:function(){return o((function(e){return!e}))}},i.a.createElement(v.b.div,{animate:l?"open":"closed",variants:s},i.a.createElement("img",{className:"gallery-image",src:a.pic})),i.a.createElement(v.b.div,{style:{position:"absolute",opacity:"0",left:"0",top:"30%",right:"0",height:"80%",marginLeft:"auto",marginRight:"auto",width:"70%",textAlign:"center"},animate:l?"closed":"open",variants:s},i.a.createElement("div",{className:"item-subtitle"},a.description),i.a.createElement("div",{className:"item-subtitle",style:{textAlign:"center"}},a.subtitle),l&&i.a.createElement("div",{className:"item-subtitle",style:{fontSize:"100%"}},i.a.createElement("a",{style:{zIndex:"2"},href:a.link},a.link))))))}function C(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cv item"},i.a.createElement("div",null,i.a.createElement("i",{className:e.icon})),i.a.createElement("div",null,i.a.createElement("h3",null,e.job),i.a.createElement("div",{className:"cv description"},i.a.createElement("p",null,e.description),i.a.createElement("p",null,e.duties)))))}function S(){var e=Object(n.useState)(),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){return"/reactpf"===window.location.pathname?r(N[0].color):"/Projects"===window.location.pathname?r(N[1].color):"/About"===window.location.pathname?r(N[2].color):"/Sorting"===window.location.pathname&&r(N[3].color),function(){}}),[t]),i.a.createElement(v.b.div,null,i.a.createElement(v.a,null,i.a.createElement("div",{className:"header"},i.a.createElement("ul",{className:"nav-links"},N.map((function(e){return i.a.createElement(j,{key:e.id,link:e,isSelected:t===e.color,onClick:function(){return r(e.color)}})}))))))}function j(e){var a=e.link,t=e.isSelected,n=e.onClick;return i.a.createElement(b.b,{onClick:n,to:a.location},i.a.createElement("li",{className:"item-circle",style:{backgroundColor:a.color}},t&&i.a.createElement(v.b.div,{layoutId:"outline",className:"outline",initial:!1,animate:{borderColor:a.color},transition:A}),i.a.createElement("i",{className:"circle-icon "+a.icon}),i.a.createElement("p",{style:t?{opacity:1,transform:"translate(-50%, 160%)"}:{},className:"header-text"},a.name)))}var A={type:"spring",stiffness:200,damping:20};var D=function(){var e=Object(n.useState)("category1"),a=Object(c.a)(e,2),t=a[0],r=a[1],l=function(e){r(e.target.value)};return i.a.createElement(i.a.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement("div",null,i.a.createElement("ul",{className:"categoryList"},i.a.createElement("li",{className:"categoryItem"},i.a.createElement("label",{className:"checkbox"},i.a.createElement("input",{type:"radio",name:"category",value:"category1",checked:"category1"===t,onChange:l,className:"categoryselect"}),i.a.createElement("span",{className:"checkmark"}),i.a.createElement("span",{className:"input-text"}," Games "))),i.a.createElement("li",{className:"categoryItem"},i.a.createElement("label",{className:"checkbox"},i.a.createElement("input",{type:"radio",name:"category",value:"category2",checked:"category2"===t,onChange:l,className:"categoryselect"}),i.a.createElement("span",{className:"checkmark"}),i.a.createElement("span",{className:"input-text"}," Web "))))),"category1"===t?i.a.createElement("div",{className:"category fade-up"},i.a.createElement("h4",{className:"category-title"},"Game Development"),i.a.createElement("div",{className:"category-items"},y.map((function(e){return 1===e.category?i.a.createElement(x,{key:e.id,pr:e}):void 0})))):"","category2"===t?i.a.createElement("div",{className:"category fade-up"},i.a.createElement("h4",{className:"category-title"},"Web Development"),i.a.createElement("div",{className:"category-items"},y.map((function(e){return 2===e.category?i.a.createElement(x,{key:e.id,pr:e}):void 0})))):"","category3"===t?i.a.createElement("div",{className:"category"},i.a.createElement("h4",{className:"category-title"},"Pixel Art"),i.a.createElement("div",{className:"category-items"},y.map((function(e){return 3===e.category?i.a.createElement(x,{key:e.id,pr:e}):void 0})))):"")},P=t(26),T=t.n(P);var U=function(){var e=Object(n.useRef)(null);return i.a.createElement("div",{style:{overflow:"hidden"}},i.a.createElement("div",{ref:e,className:"component-container"},i.a.createElement("div",{className:"center main fade-in"},i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"chapter"},i.a.createElement("div",{className:"paragraph"},i.a.createElement("h1",null,"Aapo Hyyryl\xe4inen")),i.a.createElement("div",{className:"paragraph"},i.a.createElement("p",null,"I am a graduated business IT student from JAMK University of Applied Sciences. After completing my studies at JAMK, I decided to broaden my expertise and started studying Computer Science at LUT University.")),i.a.createElement("div",{className:"paragraph"},i.a.createElement("p",null," I am an aspiring web developer with excellent customer service skills, an analytical mind and an unquenchable thirst for knowledge. ")),i.a.createElement("div",{className:"paragraph"},i.a.createElement("p",null," I pride myself in being capable of taking feedback, and not taking myself too seriously.",i.a.createElement("br",null)," On my free time I dabble in game development, music and video editing.")),i.a.createElement("div",{className:"paragraph",style:{marginBottom:"2em",border:"1px solid"}},i.a.createElement("h2",{style:{marginTop:"0.5em"}},"Technologies I know"),i.a.createElement("br",null),i.a.createElement("h4",null,"C# - Unity - HTML - CSS - JS - React - GIT "),i.a.createElement("br",null)),i.a.createElement("div",{className:"paragraph",style:{border:"1px solid"}},i.a.createElement("h2",{style:{marginTop:"0.5em"}},"Stuff I am interested in"),i.a.createElement("br",null),i.a.createElement("h4",null,"C - Java - C++ - Docker and more! "),i.a.createElement("br",null)))),i.a.createElement("div",{className:"profile-picture"},i.a.createElement("img",{src:T.a,alt:"profile"}))),i.a.createElement(w,{type:"cv"},i.a.createElement("div",{className:"center"},i.a.createElement(I,{type:"cv"},i.a.createElement("div",{className:"cv title"},i.a.createElement("h2",null,"Work Experience")),i.a.createElement(C,{icon:"fas fa-flag",job:"DataGroup Sata IT - 2021 Autumn",description:"Internship as an ICT support and PowerApps Developer",duties:""}),i.a.createElement(C,{icon:"fas fa-bullhorn",job:"Presenter at Asuntomessut - Housing Fair Finland - Kouvola 2019",description:"Housing Fair is an annual event for everyone interested in all things related to housing.",duties:"I worked as a presenter at one of the locations"}),i.a.createElement(C,{icon:"fas fa-calculator",job:"Accounting Assistant - Monelle Oy - 2018, 2020-2021, 2022",description:"Duties include handling payments, billing and mail as well as data entry",duties:""}),i.a.createElement(C,{icon:"fas fa-hammer",job:"Construction worker at Elementit-E Oy - 2017",description:" I was tasked with assembling flooring and insulation for wooden prefabs",duties:""}),i.a.createElement(C,{icon:"far fa-address-card",job:"Miscellaneous part-time jobs - 2014 - 2017",description:"I started working early on in my life mostly during summers, ranging from customer service jobs to outdoors maintenance work",duties:""})),i.a.createElement("div",{className:"cv text small-text"},i.a.createElement("h1",{id:"quote-text"},' "Jack of all trades, master of maybe a few"')),i.a.createElement(I,{type:"cv"},i.a.createElement("div",{className:"cv title"},i.a.createElement("h2",null,"Education")),i.a.createElement(C,{icon:"fas fa-desktop",job:"LUT University - 2022 - Current",description:"Currently studying Computer Science with Electrical Engineering on the side",duties:""}),i.a.createElement(C,{icon:"fas fa-chalkboard-teacher",job:"JAMK University of Applied Sciences 2018 - 2022",description:"Finished studied and graduated as Bachelor of Business Administration",duties:""}),i.a.createElement(C,{icon:"fas fa-graduation-cap",job:"Kouvolan Yhteiskoulun lukio - Upper Secondary 2013 - 2016",description:"Finnish upper secondary school and matriculation examination",duties:"Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish "}),i.a.createElement(C,{icon:"fas fa-school",job:"Finnish Elementary School 2004 - 2012",description:"General education",duties:""}))))))},O=t(1);function F(){return i.a.createElement("div",{className:"App"},i.a.createElement(b.a,null,i.a.createElement(S,null),i.a.createElement(O.c,null,i.a.createElement(O.a,{path:"/reactpf",exact:!0,component:U}),i.a.createElement(O.a,{path:"/Projects",component:D}))),i.a.createElement(k,null))}l.a.render(i.a.createElement(F,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c9f5ac09.chunk.js.map