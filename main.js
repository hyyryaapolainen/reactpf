//DARK MODE TOGGLE

const setVariables= () => {
  var element = document.body;
  element.classList.toggle("dark");
}

//CONTENT TOGGLE
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  //LOGO ANIMATION
  var drawLogo = anime({
    targets: 'line',
    strokeDashoffset: [205.0366973876953, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  });

  var drawCircle = anime({
    targets: 'ellipse',
    strokeDashoffset: [860.32568359375, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  });
  //LOGO ANIMATION END

  // NAV BAR ANIMATION
  
  anime({
    targets: '.nav-links li',
    opacity: '1',
    easing: 'easeInOutQuad',
    duration: 2000
  });

  anime({
    targets: '.topbox',
    translateY: [-5, 0],
    direction: 'alternate',
    loop: true,
    easing: 'spring(0, 40, 10, 0)'
  })
  //NAV BAR ANIMATION END

  //SCROLL ANIMATION START

  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.8,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries , appearOnScroll) 
  {
     entries.forEach(entry => {
       if (!entry.isIntersecting){return;}
       else {
         entry.target.classList.add('appear');
         appearOnScroll.unobserve(entry.target);
       }
     })
  }, appearOptions);

 faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })

  const outers = document.querySelectorAll('.fade-out');
  const disappearOptions = {
    rootMargin: "-200px",
    threshold: 0.25
  };

  const disappearOnScroll = new IntersectionObserver(function(entries , disappearOnScroll) 
  {
     entries.forEach(entry => {
       if (!entry.isIntersecting)
       {entry.target.classList.add('disappear');
       appearOnScroll.unobserve(entry.target);
         }
       else {
        return;
       }
     })
  }, disappearOptions);

  outers.forEach(outer => {
    disappearOnScroll.observe(outer);
  })
   //SCROLL ANIMATION END


   
