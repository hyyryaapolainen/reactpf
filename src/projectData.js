import bonk from './images/dump (2).png'
import harava from './images/Harava.gif'
import defaultPic from './images/outdoor (41).JPG'
import thesis from './images/Kuva1.png'
import ruin from './images/RUIN.png'
//1 games, 2 web, 3 pixel art

const projectData = [
  {
    name: "Thesis - 2022",
   description: "My thesis was about researching procedural generation and methods used to produce procedural landscapes.",
    id: 4,
    pic: thesis,
    picDim: [300, 500],
    subtitle: "I researched and developed a PCG-system that can produce 3D-islands in Unity using C#, Perlin Noise, procedural meshes and textures",
    link: "",
    category: 1
  },
    {
      name: "Ruin - 2021",
      description: "RUIN is a 3D action roguelite developed during the TiCorporate business simulation class ",
      id: 2,
      pic: ruin,
      picDim: [300, 300],
      subtitle: "Read more about the stuff I learned, developed and struggled with by visiting the post-mortem website!",
      link: 'https://hyyryaapolainen.github.io/ruinportfolio/',
      category: 1
    },
    {
        name: "Harava - 2020",
        description: "Harava is a 2D adventure RPG concept that I designed for a game design course. The process included creating pixel art, game design and music.",
        id: 3,
        pic: harava,
        picDim: [300, 300],
        subtitle: "Art created with Asesprite and Photoshop and music with FL Studio ",
        link: "",
        category: 1
    },
    {
      name: "BONK! - 2019",
      description: "Bonk is a 3D top-down shooter developed using C# and Unity. Bonk! was my first fully self-made video game with a proper gameplay loop.",
      id: 1,
      pic: bonk,
      picDim: [300, 500],
      subtitle: "It was my first proper leap into C# and Unity development with mostly built-in Unity assets",
      link: "",
      category: 1
    },
    {
      name: "Portfolio website - 2022",
      description: "I made this webpage as a github pages repo to present some of the work I've done during my studies",
      id: 2,
      pic: defaultPic,
      picDim: [300, 500],
      subtitle: "This website was made using CSS (SASS) and React",
      link: 'https://github.com/hyyryaapolainen/reactpf',
      category: 2
    },
    {
      name: "Ruin Portfolio Website - 2021",
      description: "I made a github pages repo for the work I did for RUIN",
      id: 2,
      pic: ruin,
      picDim: [300, 300],
      subtitle: "The webpage was created using HTML, CSS and Github Pages",
      link: 'https://github.com/hyyryaapolainen/ruinportfolio',
      category: 2
    },

  ]
export default projectData
