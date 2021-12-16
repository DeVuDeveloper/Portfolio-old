const myProjects = [
    {
      project: 1,
      title: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      project: 2,
      title: 'Multi Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      project: 3,
      title: 'Data Dashboard Healthcare',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      project: 4,
      title: 'Website Portfolio',
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      project: 5,
      title: 'Professional Art Printing Data More',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      project: 6,
      title: 'Data Dashboard Healthcare',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/img/section2.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
      source: 'url(https://github.com/)'
    },
    {
      project: 7,
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
  
//   closePop.addEventListener('click', () => {
//     popUp.classList.remove('pop')
//   })
  
 for (let i = 0; i < myProjects.length; i += 1) {
      const project = myProjects[i];
      if (id === 'project-${project[project]}') {
       popUp.innerHTML = `
       console.log('popUp:', popUp)
       
      
       <header class="pop-flex">
        
         <h2 class = 'pop-hide1-h2'>${project.title}MMMMMM</h2>
  
         <span class="pop-x">&times;</span>
    </header>
  
    <ul id='pop' class='list-unstyled '>
      <li class='pop-btns'>
          <a href="https://en.wikipedia.org/wiki/HTML">${project.technologies[0]}</a>
      </li>
      <li class='pop-btns'>
          <a href="https://getbootstrap.com/">${project.technologies[1]}</a>
      </li>
      <li class='pop-btns'>
          <a href="https://rubyonrails.org/">${project.technologies[2]}</a>
      </li>
  </ul>
      <div class="pop-flex1 p-0 m-0">
          <img class="img-fluid pop-img" src="${project.img}" alt="">
          <div class="pop-info">
             <div>
              <p>${myProjects[i].description}</p>
                    console.log('myProjects:', myProjects)
                    </div>
                      <div class='pop-button'>
                          <ul class='list-unstyled flex-icon'>
                          <li class='pop-btn'><a href="${project.live}">See Live</a></li>
                          <li class='icn'><a href="#"><i class="fas fa-external-link-alt"></i></a></li>
                      </ul>
                         <ul class='list-unstyled flex-icon'>
                          <li class='pop-btn'><a href="${project.source}">See Source</a></li>
                          <li class='icn'><a href="#"><i class="fab fa-github-square"></i></a></li>
                      </ul>
                    
                      </div>
          </div>
      </div>`;
      }
    }
  

  openPop();
  closePop();
  

