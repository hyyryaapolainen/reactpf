(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/RUIN.7708ed5d.png"},19:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"static/media/dump (2).4edeb595.png"},23:function(e,a,t){e.exports=t.p+"static/media/Harava.aa2ff682.gif"},24:function(e,a,t){e.exports=t.p+"static/media/outdoor (41).750f6620.JPG"},25:function(e,a,t){e.exports=t.p+"static/media/Kuva1.4782c48c.png"},27:function(e,a,t){e.exports=t.p+"static/media/outdoor (25) edited.4d590da6.png"},29:function(e,a,t){e.exports=t(39)},39:function(e,a,t){"use strict";t.r(a);var n=t(6),i=t(0),r=t.n(i),o=t(21),l=t.n(o),s=(t(19),t(28)),c=t(22),m=t.n(c),d=t(23),u=t.n(d),p=t(24),f=t.n(p),g=t(25),h=t.n(g),b=t(14),y=t.n(b),E=[{name:"Thesis - 2022",description:"My thesis was about researching procedural generation and methods used to produce procedural landscapes.",id:40,pic:h.a,picDim:[300,500],subtitle:"I researched and developed a PCG-system that can produce 3D-islands in Unity using C#, Perlin Noise, procedural meshes and textures",link:"",category:0},{name:"Ruin - 2021",description:"RUIN is a 3D action roguelite developed during the TiCorporate business simulation class ",id:20,pic:y.a,picDim:[300,500],subtitle:"Read more about the stuff I learned, developed and struggled with by visiting the post-mortem website!",link:"https://hyyryaapolainen.github.io/ruinportfolio/",category:0},{name:"Harava - 2020",description:"Harava is a 2D adventure RPG concept that I designed for a game design course. The process included creating pixel art, game design and music.",id:30,pic:u.a,picDim:[300,500],subtitle:"Art created with Asesprite and Photoshop. Music with FL Studio ",link:"",category:0},{name:"BONK! - 2019",description:"Bonk is a 3D top-down shooter developed using C# and Unity. Bonk! was my first fully self-made video game with a proper gameplay loop.",id:10,pic:m.a,picDim:[300,500],subtitle:"It was my first leap into C# and Unity development with mostly built-in Unity assets",link:"",category:0},{name:"Personal Website - 2022",description:"I made this webpage as a github pages repo to present some of the work I've done during my studies",id:12,pic:f.a,picDim:[300,500],subtitle:"This website was made using CSS (SASS) and React",link:"https://github.com/hyyryaapolainen/reactpf",category:1},{name:"Ruin Portfolio Website - 2021",description:"I made a github pages repo for the work I did for RUIN",id:11,pic:y.a,picDim:[300,300],subtitle:"The webpage was created using HTML, CSS and published with Github Pages",link:"https://github.com/hyyryaapolainen/ruinportfolio",category:1}],v=t(8),k=t(12),N=[{color:"#009c07",location:"/reactpf",name:"Home",id:"linktohome",icon:"fas fa-home"},{color:"#00819e",location:"/Projects",name:"Projects",id:"linktoprojects",icon:"far fa-check-square"}];function w(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement("a",{style:{color:"white"},href:"https://github.com/hyyryaapolainen/"},r.a.createElement("i",{className:"fab fa-github-square"}))),r.a.createElement("li",null,r.a.createElement("a",{style:{color:"white"},href:"https://www.linkedin.com/in/aapo-hyyryl%C3%A4inen-72baa7158/"},r.a.createElement("i",{className:"fab fa-linkedin"}))))))}function j(e){return r.a.createElement("div",{className:"container "+e.type},e.children)}function I(e){return r.a.createElement("div",{className:e.type+" text"},e.children)}function A(e){var a=e.pr,t=Object(i.useState)(!1),o=Object(n.a)(t,2),l=o[0],s=o[1],c={open:{opacity:0,scale:1},closed:{opacity:1}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gallery-item opacity-out"},r.a.createElement("div",{className:l?"gallery-background item-open":"gallery-background item-closed"}),r.a.createElement("h4",{className:"gallery-title"},a.name),r.a.createElement("div",{className:"image-container",onClick:function(){return s((function(e){return!e}))}},r.a.createElement(v.b.div,{animate:l?"open":"closed",variants:c},r.a.createElement("img",{className:"gallery-image",alt:"",src:a.pic})),r.a.createElement(v.b.div,{style:{position:"absolute",opacity:"0",left:"0",top:"30%",right:"0",height:"80%",marginLeft:"auto",marginRight:"auto",width:"70%",textAlign:"center"},animate:l?"closed":"open",variants:c},r.a.createElement("div",{className:"item-subtitle"},a.description),r.a.createElement("div",{className:"item-subtitle",style:{textAlign:"center"}},a.subtitle),l&&r.a.createElement("div",{className:"item-subtitle",style:{fontSize:"100%"}},r.a.createElement("a",{style:{zIndex:"2"},href:a.link},a.link))))))}function S(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cv item"},r.a.createElement("div",null,r.a.createElement("i",{className:e.jobInfo.icon})),r.a.createElement("div",null,r.a.createElement("h3",null,e.jobInfo.job),r.a.createElement("div",{className:"cv description"},r.a.createElement("p",null,e.jobInfo.description),r.a.createElement("p",null,e.jobInfo.duties)))))}function x(){var e=Object(i.useState)(),a=Object(n.a)(e,2),t=a[0],o=a[1];return Object(i.useEffect)((function(){return"/reactpf"===window.location.pathname?o(N[0].color):"/Projects"===window.location.pathname?o(N[1].color):"/About"===window.location.pathname?o(N[2].color):"/Sorting"===window.location.pathname&&o(N[3].color),function(){}}),[t]),r.a.createElement(v.b.div,{className:"header-container"},r.a.createElement(v.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("ul",{className:"nav-links"},N.map((function(e){return r.a.createElement(C,{key:e.id,link:e,isSelected:t===e.color,onClick:function(){return o(e.color)}})}))))))}function C(e){var a=e.link,t=e.isSelected,n=e.onClick;return r.a.createElement(k.b,{onClick:n,to:a.location},r.a.createElement("li",{className:"item-circle",style:{backgroundColor:a.color}},t&&r.a.createElement(v.b.div,{layoutId:"outline",className:"outline",initial:!1,animate:{borderColor:a.color},transition:P}),r.a.createElement("i",{className:"circle-icon "+a.icon}),r.a.createElement("p",{style:t?{opacity:1,transform:"translate(-50%, 160%)"}:{},className:"header-text"},a.name)))}var P={type:"spring",stiffness:200,damping:20},T=["Game Development","Web Development"];var D=function(){var e=Object(i.useState)(0),a=Object(n.a)(e,2),t=a[0],o=a[1],l=function(e){o(e.target.value)};return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"opacity-out"},r.a.createElement("ul",{className:"categoryList"},r.a.createElement("li",{className:"categoryItem"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"radio",name:"category",value:0,checked:0===parseInt(t),onChange:l,className:"categoryselect"}),r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{className:"input-text"}," Games "))),r.a.createElement("li",{className:"categoryItem"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"radio",name:"category",value:1,checked:1===parseInt(t),onChange:l,className:"categoryselect"}),r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{className:"input-text"}," Web "))))),r.a.createElement("div",{className:"category fade-up"},r.a.createElement("h4",{className:"category-title"},T[parseInt(t)]),r.a.createElement("div",{className:"category-items"},function(e){return Object(s.a)(E).filter((function(a){return a.category===parseInt(e)}))}(t).map((function(e){return r.a.createElement(A,{key:e.id,pr:e})})))))},O=t(27),U=t.n(O),F={english:{AboutParagraph1:"\n    I am a graduated business IT student from JAMK University\n     of Applied Sciences. \n     After completing my studies at JAMK, \n     I decided to broaden my expertise and \n     started studying Computer Science at LUT \n     University.\n                \n    ",AboutParagraph2:"\n    I am an aspiring web developer with excellent problem solving skills, an analytical mind and an unquenchable thirst for knowledge.\n    ",AboutParagraph3:"\n    I pride myself in being capable of taking feedback, \n    and not taking myself too seriously.\n    ",AboutParagraph4:"\n    On my free time I dabble in game development, \n    music and video editing.\n    ",Technologies:"\n    Technologies I know\n     ",Technologies2:"\n    C# - Unity - Git - JavaScript - Python\n     ",Stuff:"\n    Stuff I am interested in\n     ",Stuff2:"\n     C - TypeScript - React - Docker and more! \n      ",Work:"\n      Work Experience\n       ",Quote_text:'\n    "Jack of all trades, master of maybe a few"\n  '},finnish:{AboutParagraph:"Hello"}},M={english:{work:[{icon:"fas fa-flag",job:"DataGroup Sata IT - 2021",description:"Internship as an ICT support and PowerApps Developer",duties:""},{icon:"fas fa-bullhorn",job:"Presenter at Asuntomessut - Housing Fair Finland - Kouvola 2019 ",description:"Housing Fair is an annual event for everyone interested in all things related to housing.",duties:"I worked as a presenter at one of the locations"},{icon:"fas fa-calculator",job:"Accounting Assistant - Part-time - Monelle Oy - 2018, 2020-2021, 2022",description:"Duties include handling payments, billing and mail as well as data entry.",duties:""},{icon:"fas fa-hammer",job:"Construction worker at Elementit-E Oy - 2017 ",description:"I was tasked with assembling flooring and insulation for wooden prefabs",duties:"5 mos"},{icon:"far fa-address-card",job:"Other part-time experience - 2014 - 2016",description:"Summer jobs, ranging from customer service jobs to outdoors maintenance work",duties:""}],education:[{icon:"fas fa-desktop",job:"LUT University - 2022 - Current",description:"Major in Computer Science with Minor in Electrical Engineering",duties:""},{icon:"fas fa-chalkboard-teacher",job:"JAMK University of Applied Sciences 2018 - 2022",description:"Bachelor of Business Administration, Business IT",duties:""},{icon:"fas fa-graduation-cap",job:"Kouvolan Yhteiskoulun lukio - Upper Secondary 2013 - 2016",description:"Finnish upper secondary school and matriculation examination",duties:"Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish"}]},finnish:{work:[{icon:"fas fa-flag",job:"DataGroup Sata IT - 2021",description:"Internship as an ICT support and PowerApps Developer",duties:""},{icon:"fas fa-bullhorn",job:"Presenter at Asuntomessut - Housing Fair Finland - Kouvola 2019 ",description:"Housing Fair is an annual event for everyone interested in all things related to housing.",duties:"I worked as a presenter at one of the locations"},{icon:"fas fa-calculator",job:"Accounting Assistant - Monelle Oy - 2018, 2020-2021, 2022",description:"Duties include handling payments, billing and mail as well as data entry.",duties:""},{icon:"fas fa-hammer",job:"Construction worker at Elementit-E Oy - 2017 ",description:"I was tasked with assembling flooring and insulation for wooden prefabs",duties:""},{icon:"far fa-address-card",job:"Miscellaneous part-time jobs - 2014 - 2017",description:"I started working early on in my life mostly during summers, ranging from customer service jobs to outdoors maintenance work",duties:""}],education:[{icon:"fas fa-desktop",job:"LUT University - 2022 - Current",description:"Began studying Computer Science with Electrical Engineering on the side.",duties:""},{icon:"fas fa-chalkboard-teacher",job:"JAMK University of Applied Sciences 2018 - 2022",description:"Finished studied and graduated as Bachelor of Business Administration",duties:""},{icon:"fas fa-graduation-cap",job:"Kouvolan Yhteiskoulun lukio - Upper Secondary 2013 - 2016",description:"Finnish upper secondary school and matriculation examination",duties:"Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish"}]}};var B=function(e){var a=Object(i.useRef)(null),t=e.lang,n=function(e,a){return void 0!==F[e][a]?F[e][a]:" Missing text at "+a},o=function(e,a,t){return M[e][a]};return r.a.createElement("div",{style:{overflow:"hidden",backgroundColor:"var(--main-bg-color)"}},r.a.createElement("div",{ref:a,className:"component-container"},r.a.createElement("div",{className:"center main"},r.a.createElement("div",{className:"center fade-in"},r.a.createElement("div",{className:"chapter"},r.a.createElement("div",{className:"paragraph"},r.a.createElement("h1",null,"Aapo Hyyryl\xe4inen")),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,n(t,"AboutParagraph1"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,n(t,"AboutParagraph2"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null," ",n(t,"AboutParagraph3"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,n(t,"AboutParagraph4"))),r.a.createElement("div",{className:"paragraph",style:{marginBottom:"1em",marginTop:"1em"}},r.a.createElement("h2",{style:{marginTop:"0.5em"}},n(t,"Technologies")),r.a.createElement("br",null),r.a.createElement("h4",null,n(t,"Technologies2"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h2",{style:{marginTop:"0.5em"}},n(t,"Stuff")),r.a.createElement("br",null),r.a.createElement("h4",null,n(t,"Stuff2")),r.a.createElement("br",null)))),r.a.createElement("div",{className:"profile-picture fade-in"},r.a.createElement("img",{src:U.a,alt:"profile"}))),r.a.createElement("span",{className:"underline mid"}),r.a.createElement(j,{type:"cv"},r.a.createElement("div",{className:"center fade-up"},r.a.createElement(I,{type:"cv"},r.a.createElement("div",{className:"cv title"},r.a.createElement("h2",null,n(t,"Work"))),o(t,"work").map((function(e){return r.a.createElement(S,{key:e.job,jobInfo:e})}))),r.a.createElement("div",{className:"cv text small-text"},r.a.createElement("h1",{id:"quote-text"},n(t,"Quote_text"))),r.a.createElement(I,{type:"cv"},r.a.createElement("div",{className:"cv title"},r.a.createElement("h2",null,"Education")),o(t,"education").map((function(e){return r.a.createElement(S,{key:e.job,jobInfo:e})})))))))},H=t(1);function R(){var e=Object(i.useState)("dark"),a=Object(n.a)(e,2),t=a[0],o=a[1];return r.a.createElement("div",{className:"App","data-theme":t},r.a.createElement("div",{className:"modes"},r.a.createElement("div",null,r.a.createElement("button",{className:"lighting-mode-button",onClick:function(){o("light"===t?"dark":"light")}},r.a.createElement("i",{className:"light"===t?"fas fa-moon":"fas fa-sun"})))),r.a.createElement(k.a,null,r.a.createElement(x,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/reactpf",exact:!0,component:function(e){return r.a.createElement(B,Object.assign({},e,{lang:"english"}))}}),r.a.createElement(H.a,{path:"/Projects",component:D}))),r.a.createElement(w,null))}l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5aa5a8f3.chunk.js.map