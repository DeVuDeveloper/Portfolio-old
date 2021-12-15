const myProjects = [
    {
      id: 1,
      title: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      id: 2,
      title: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      id: 3,
      title: 'Data Dashboard Healthcare',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      id: 4,
      title: 'Website Portfolio',
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      id: 5,
      title: 'Professional Art Printing Data More',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      id: 6,
      title: 'Data Dashboard Healthcare',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      id: 7,
      title: 'Website Portfolio',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    }
  ];
  
  const openPop = document.querySelectorAll('.open-pop')
  const closePop = document.querySelector('.pop-x')
  const popUp = document.querySelector('.pop-up')
  
  openPop.forEach(element => {
    element.addEventListener('click', () => popUp.classList.add('pop'))
  })
  
  closePop.addEventListener('click', () => {
    popUp.classList.remove('pop')
  })
  
  function closeModel() {
      modelView.style.visibility = 'hidden';
    }
    
    function openModel(id) {
      modelView.style.visibility = 'visible';
  
  for (let i = 0; i < myProjects.length; i += 1) {
      if (id === myProjects[i].id) {
       popUp.innerHTML = `
       <header class="pop-flex">
        
         <h2 class = 'pop-hide1-h2'>${myProjects[i].title}</h2>
  
         <span class="pop-x">&times;</span>
    </header>
  
    <ul id='pop' class='list-unstyled '>
      <li class='pop-btns'>
          <a href="https://en.wikipedia.org/wiki/HTML">${myProjects[i].technologies[0]}</a>
      </li>
      <li class='pop-btns'>
          <a href="https://getbootstrap.com/">${myProjects[i].technologies[1]}</a>
      </li>
      <li class='pop-btns'>
          <a href="https://rubyonrails.org/">${myProjects[i].technologies[2]}</a>
      </li>
  </ul>
      <div class="pop-flex1 p-0 m-0">
          <img class="img-fluid pop-img" src="${myProjects[i].image}" alt="">
          <div class="pop-info">
             <div>
              <p>${myProjects[i].description}</p>
                    </div>
                      <div class='pop-button'>
                          <ul class='list-unstyled flex-icon'>
                          <li class='pop-btn'><a href="${myProjects[i].live}">See Live</a></li>
                          <li class='icn'><a href="#"><i class="fas fa-external-link-alt"></i></a></li>
                      </ul>
                         <ul class='list-unstyled flex-icon'>
                          <li class='pop-btn'><a href="${myProjects[i].source}">See Source</a></li>
                          <li class='icn'><a href="#"><i class="fab fa-github-square"></i></a></li>
                      </ul>
                    
                      </div>
          </div>
      </div>`;
      }
    }
  }
  

