(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/RUIN.7708ed5d.png"},18:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/dump (2).4edeb595.png"},22:function(e,a,t){e.exports=t.p+"static/media/Harava.aa2ff682.gif"},23:function(e,a,t){e.exports=t.p+"static/media/outdoor (41).750f6620.JPG"},24:function(e,a,t){e.exports=t.p+"static/media/Kuva1.4782c48c.png"},26:function(e,a,t){e.exports=t.p+"static/media/outdoor (25) edited.4d590da6.png"},27:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(6),i=t(0),r=t.n(i),o=t(20),c=t.n(o),l=(t(18),t(21)),s=t.n(l),m=t(22),d=t.n(m),u=t(23),p=t.n(u),g=t(24),f=t.n(g),h=t(13),y=t.n(h),E=[{name:"Thesis - 2022",description:"My thesis was about researching procedural generation and methods used to produce procedural landscapes.",id:4,pic:f.a,picDim:[300,500],subtitle:"I researched and developed a PCG-system that can produce 3D-islands in Unity using C#, Perlin Noise, procedural meshes and textures",link:"",category:1},{name:"Ruin - 2021",description:"RUIN is a 3D action roguelite developed during the TiCorporate business simulation class ",id:2,pic:y.a,picDim:[300,500],subtitle:"Read more about the stuff I learned, developed and struggled with by visiting the post-mortem website!",link:"https://hyyryaapolainen.github.io/ruinportfolio/",category:1},{name:"Harava - 2020",description:"Harava is a 2D adventure RPG concept that I designed for a game design course. The process included creating pixel art, game design and music.",id:3,pic:d.a,picDim:[300,500],subtitle:"Art created with Asesprite and Photoshop. Music with FL Studio ",link:"",category:1},{name:"BONK! - 2019",description:"Bonk is a 3D top-down shooter developed using C# and Unity. Bonk! was my first fully self-made video game with a proper gameplay loop.",id:1,pic:s.a,picDim:[300,500],subtitle:"It was my first leap into C# and Unity development with mostly built-in Unity assets",link:"",category:1},{name:"Personal Website - 2022",description:"I made this webpage as a github pages repo to present some of the work I've done during my studies",id:2,pic:p.a,picDim:[300,500],subtitle:"This website was made using CSS (SASS) and React",link:"https://github.com/hyyryaapolainen/reactpf",category:2},{name:"Ruin Portfolio Website - 2021",description:"I made a github pages repo for the work I did for RUIN",id:2,pic:y.a,picDim:[300,300],subtitle:"The webpage was created using HTML, CSS and published with Github Pages",link:"https://github.com/hyyryaapolainen/ruinportfolio",category:2}],b=t(7),v=t(10),k=(t(11),[{color:"#009c07",location:"/reactpf",name:"Home",id:"linktohome",icon:"fas fa-home"},{color:"#00819e",location:"/Projects",name:"Projects",id:"linktoprojects",icon:"far fa-check-square"}]);function N(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement("a",{style:{color:"white"},href:"mailto:a.hyyrylainen79@gmail.com"},r.a.createElement("i",{className:"fa fa-envelope"}))),r.a.createElement("li",null,r.a.createElement("a",{style:{color:"white"},href:"https://github.com/hyyryaapolainen/"},r.a.createElement("i",{className:"fab fa-github-square"}))),r.a.createElement("li",null,r.a.createElement("a",{style:{color:"white"},href:"https://www.linkedin.com/in/aapo-hyyryl%C3%A4inen-72baa7158/"},r.a.createElement("i",{className:"fab fa-linkedin"}))))))}function w(e){return r.a.createElement("div",{className:"container "+e.type},e.children)}function j(e){return r.a.createElement("div",{className:e.type+" text"},e.children)}function I(e){var a=e.pr,t=Object(i.useState)(!1),o=Object(n.a)(t,2),c=o[0],l=o[1],s={open:{opacity:0,scale:1},closed:{opacity:1}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gallery-item"},r.a.createElement("h4",{className:"gallery-title"},a.name),r.a.createElement("div",{className:"image-container",onClick:function(){return l((function(e){return!e}))}},r.a.createElement(b.b.div,{animate:c?"open":"closed",variants:s},r.a.createElement("img",{className:"gallery-image",src:a.pic})),r.a.createElement(b.b.div,{style:{position:"absolute",opacity:"0",left:"0",top:"30%",right:"0",height:"80%",marginLeft:"auto",marginRight:"auto",width:"70%",textAlign:"center"},animate:c?"closed":"open",variants:s},r.a.createElement("div",{className:"item-subtitle"},a.description),r.a.createElement("div",{className:"item-subtitle",style:{textAlign:"center"}},a.subtitle),c&&r.a.createElement("div",{className:"item-subtitle",style:{fontSize:"100%"}},r.a.createElement("a",{style:{zIndex:"2"},href:a.link},a.link))))))}function A(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cv item"},r.a.createElement("div",null,r.a.createElement("i",{className:e.jobInfo.icon})),r.a.createElement("div",null,r.a.createElement("h3",null,e.jobInfo.job),r.a.createElement("div",{className:"cv description"},r.a.createElement("p",null,e.jobInfo.description),r.a.createElement("p",null,e.jobInfo.duties)))))}function S(){var e=Object(i.useState)(),a=Object(n.a)(e,2),t=a[0],o=a[1];return Object(i.useEffect)((function(){return"/reactpf"===window.location.pathname?o(k[0].color):"/Projects"===window.location.pathname?o(k[1].color):"/About"===window.location.pathname?o(k[2].color):"/Sorting"===window.location.pathname&&o(k[3].color),function(){}}),[t]),r.a.createElement(b.b.div,{className:"header-container"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("ul",{className:"nav-links"},k.map((function(e){return r.a.createElement(x,{key:e.id,link:e,isSelected:t===e.color,onClick:function(){return o(e.color)}})}))))))}function x(e){var a=e.link,t=e.isSelected,n=e.onClick;return r.a.createElement(v.b,{onClick:n,to:a.location},r.a.createElement("li",{className:"item-circle",style:{backgroundColor:a.color}},t&&r.a.createElement(b.b.div,{layoutId:"outline",className:"outline",initial:!1,animate:{borderColor:a.color},transition:C}),r.a.createElement("i",{className:"circle-icon "+a.icon}),r.a.createElement("p",{style:t?{opacity:1,transform:"translate(-50%, 160%)"}:{},className:"header-text"},a.name)))}var C={type:"spring",stiffness:200,damping:20};var P=function(){var e=Object(i.useState)("category1"),a=Object(n.a)(e,2),t=a[0],o=a[1],c=function(e){o(e.target.value)};return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"opacity-in"},r.a.createElement("ul",{className:"categoryList"},r.a.createElement("li",{className:"categoryItem"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"radio",name:"category",value:"category1",checked:"category1"===t,onChange:c,className:"categoryselect"}),r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{className:"input-text"}," Games "))),r.a.createElement("li",{className:"categoryItem"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"radio",name:"category",value:"category2",checked:"category2"===t,onChange:c,className:"categoryselect"}),r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{className:"input-text"}," Web "))))),"category1"===t?r.a.createElement("div",{className:"category fade-up"},r.a.createElement("h4",{className:"category-title"},"Game Development"),r.a.createElement("div",{className:"category-items"},E.map((function(e){return 1===e.category?r.a.createElement(I,{key:e.id,pr:e}):void 0})))):"","category2"===t?r.a.createElement("div",{className:"category fade-up"},r.a.createElement("h4",{className:"category-title"},"Web Development"),r.a.createElement("div",{className:"category-items"},E.map((function(e){return 2===e.category?r.a.createElement(I,{key:e.id,pr:e}):void 0})))):"","category3"===t?r.a.createElement("div",{className:"category"},r.a.createElement("h4",{className:"category-title"},"Pixel Art"),r.a.createElement("div",{className:"category-items"},E.map((function(e){return 3===e.category?r.a.createElement(I,{key:e.id,pr:e}):void 0})))):"")},T=t(26),D=t.n(T),O={english:{AboutParagraph1:"\n    I am a graduated business IT student from JAMK University\n     of Applied Sciences. \n     After completing my studies at JAMK, \n     I decided to broaden my expertise and \n     started studying Computer Science at LUT \n     University.\n                \n    ",AboutParagraph2:"\n    I am an aspiring web developer with excellent customer service skills, an analytical mind and an unquenchable thirst for knowledge.\n    ",AboutParagraph3:"\n    I pride myself in being capable of taking feedback, \n    and not taking myself too seriously.\n    ",AboutParagraph4:"\n    On my free time I dabble in game development, \n    music and video editing.\n    ",Technologies:"\n    Technologies I know\n     ",Technologies2:"\n    C# - Unity - HTML - CSS - JS - React - GIT \n     ",Stuff:"\n    Stuff I am interested in\n     ",Stuff2:"\n     C - Java - C++ - Docker and more! \n      ",Work:"\n      Work Experience\n       ",Quote_text:'\n    "Jack of all trades, master of maybe a few"\n  '},finnish:{AboutParagraph:"Hello"}},U={english:{work:[{icon:"fas fa-flag",job:"DataGroup Sata IT - 2021",description:"Internship as an ICT support and PowerApps Developer",duties:""},{icon:"fas fa-bullhorn",job:"Presenter at Asuntomessut - Housing Fair Finland - Kouvola 2019 ",description:"Housing Fair is an annual event for everyone interested in all things related to housing.",duties:"I worked as a presenter at one of the locations"},{icon:"fas fa-calculator",job:"Accounting Assistant - Monelle Oy - 2018, 2020-2021, 2022",description:"Duties include handling payments, billing and mail as well as data entry.",duties:""},{icon:"fas fa-hammer",job:"Construction worker at Elementit-E Oy - 2017 ",description:"I was tasked with assembling flooring and insulation for wooden prefabs",duties:""},{icon:"far fa-address-card",job:"Miscellaneous part-time jobs - 2014 - 2017",description:"I started working early on in my life mostly during summers, ranging from customer service jobs to outdoors maintenance work",duties:""}],education:[{icon:"fas fa-desktop",job:"LUT University - 2022 - Current",description:"Began studying Computer Science with Electrical Engineering on the side.",duties:""},{icon:"fas fa-chalkboard-teacher",job:"JAMK University of Applied Sciences 2018 - 2022",description:"Finished studied and graduated as Bachelor of Business Administration",duties:""},{icon:"fas fa-graduation-cap",job:"Kouvolan Yhteiskoulun lukio - Upper Secondary 2013 - 2016",description:"Finnish upper secondary school and matriculation examination",duties:"Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish"}]},finnish:{work:[{icon:"fas fa-flag",job:"DataGroup Sata IT - 2021",description:"Internship as an ICT support and PowerApps Developer",duties:""},{icon:"fas fa-bullhorn",job:"Presenter at Asuntomessut - Housing Fair Finland - Kouvola 2019 ",description:"Housing Fair is an annual event for everyone interested in all things related to housing.",duties:"I worked as a presenter at one of the locations"},{icon:"fas fa-calculator",job:"Accounting Assistant - Monelle Oy - 2018, 2020-2021, 2022",description:"Duties include handling payments, billing and mail as well as data entry.",duties:""},{icon:"fas fa-hammer",job:"Construction worker at Elementit-E Oy - 2017 ",description:"I was tasked with assembling flooring and insulation for wooden prefabs",duties:""},{icon:"far fa-address-card",job:"Miscellaneous part-time jobs - 2014 - 2017",description:"I started working early on in my life mostly during summers, ranging from customer service jobs to outdoors maintenance work",duties:""}],education:[{icon:"fas fa-desktop",job:"LUT University - 2022 - Current",description:"Began studying Computer Science with Electrical Engineering on the side.",duties:""},{icon:"fas fa-chalkboard-teacher",job:"JAMK University of Applied Sciences 2018 - 2022",description:"Finished studied and graduated as Bachelor of Business Administration",duties:""},{icon:"fas fa-graduation-cap",job:"Kouvolan Yhteiskoulun lukio - Upper Secondary 2013 - 2016",description:"Finnish upper secondary school and matriculation examination",duties:"Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish"}]}};var F=function(e){var a=Object(i.useRef)(null),t=e.lang,n=function(e,a){return void 0!=O[e][a]?O[e][a]:" Missing text at "+a},o=function(e,a,t){return U[e][a]};return r.a.createElement("div",{style:{overflow:"hidden",backgroundColor:"var(--main-bg-color)"}},r.a.createElement("div",{ref:a,className:"component-container"},r.a.createElement("div",{className:"center main"},r.a.createElement("div",{className:"center fade-in"},r.a.createElement("div",{className:"chapter"},r.a.createElement("div",{className:"paragraph"},r.a.createElement("h1",null,"Aapo Hyyryl\xe4inen")),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,n(t,"AboutParagraph1"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,n(t,"AboutParagraph2"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null," ",n(t,"AboutParagraph3"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,n(t,"AboutParagraph4"))),r.a.createElement("div",{className:"paragraph",style:{marginBottom:"1em",marginTop:"1em"}},r.a.createElement("h2",{style:{marginTop:"0.5em"}},n(t,"Technologies")),r.a.createElement("br",null),r.a.createElement("h4",null,n(t,"Technologies2"))),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h2",{style:{marginTop:"0.5em"}},n(t,"Stuff")),r.a.createElement("br",null),r.a.createElement("h4",null,n(t,"Stuff2")),r.a.createElement("br",null)))),r.a.createElement("div",{className:"profile-picture fade-in"},r.a.createElement("img",{src:D.a,alt:"profile"}))),r.a.createElement("span",{className:"underline mid"}),r.a.createElement(w,{type:"cv"},r.a.createElement("div",{className:"center fade-up"},r.a.createElement(j,{type:"cv"},r.a.createElement("div",{className:"cv title"},r.a.createElement("h2",null,n(t,"Work"))),o(t,"work").map((function(e){return r.a.createElement(A,{key:e.jobs,jobInfo:e})}))),r.a.createElement("div",{className:"cv text small-text"},r.a.createElement("h1",{id:"quote-text"},n(t,"Quote_text"))),r.a.createElement(j,{type:"cv"},r.a.createElement("div",{className:"cv title"},r.a.createElement("h2",null,"Education")),o(t,"education").map((function(e){return r.a.createElement(A,{key:e.description,jobInfo:e})})))))))},M=t(1);function B(){var e=Object(i.useState)("dark"),a=Object(n.a)(e,2),t=a[0],o=a[1],c=Object(i.useState)("english"),l=Object(n.a)(c,2),s=l[0];l[1];return r.a.createElement("div",{className:"App","data-theme":t},r.a.createElement("div",{className:"modes"},r.a.createElement("div",null,r.a.createElement("button",{className:"lighting-mode-button",onClick:function(){o("light"===t?"dark":"light")}},r.a.createElement("i",{className:"light"===t?"fas fa-moon":"fas fa-sun"})))),r.a.createElement(v.a,null,r.a.createElement(S,null),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/reactpf",exact:!0,component:function(e){return r.a.createElement(F,Object.assign({},e,{lang:s}))}}),r.a.createElement(M.a,{path:"/Projects",component:P}))),r.a.createElement(N,null))}c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.68063c3f.chunk.js.map