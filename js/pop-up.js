const myProjects = [
  {
    id: 1,
    title: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/section2.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/',
    source: 'https://github.com/'
  },
  {
    id: 2,
    title: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/project1.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/',
    source: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/project2.png.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/)',
    source: 'https://github.com/'
  },
  {
    id: 4,
    title: 'Website Portfolio',
    img: 'img/project3.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/)',
    source: 'https://github.com/'
  },
  {
    id: 5,
    title: 'Professional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/project4.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/',
    source: 'https://github.com/'
  },
  {
    id: 6,
    title: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/project2.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/',
    source: 'https://github.com/'
  },
  {
    id: 7,
    title: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/project3.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/',
    source: 'https://github.com/'
  }
];

const projectSections = document.querySelector('.projects-row')
for (let i = 0; i < myProjects.length; i++) {
  const project = myProjects[i]
  projectSections.innerHTML += `<div class="projects media">

<div id=${project.id}} class='fix'>
    <h2 class="white creta fixx show1">
    ${project.title}</h2>

    <h5 class='white inter fix hide'>${project.description}</h5>
    <ul class='framework-container hide'>
        <li class="framework"><a href="https://en.wikipedia.org/wiki/HTML">
        ${project.technologies[0]}</a></li>
        <li class='framework'><a href="https://getbootstrap.com/">
        ${project.technologies[1]}</a></li>
        <li class='framework'><a href="https://www.ruby-lang.org/en/">
        ${project.technologies[2]}</a></li>
    </ul>
    <ul class="big-button ">
        <li id='${project.id}' class="or-button open-pop"><a href="#">See Project</a>
        </li>
    </ul>
</div>
</div>
`
}

const openPop = document.querySelectorAll('.open-pop')

const popUp = document.querySelector('.pop-up')

openPop.forEach(element => {
  element.addEventListener('click', () => {
    const id = Number(element.id)
    for (let i = 0; i < myProjects.length; i++) {
      const project = myProjects[i]
      if (id === project.id) {
        popUp.innerHTML = `
           
            <header class="pop-flex">
              
               <h2 class = 'pop-hide1-h2'>${project.title}</h2>
        
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
                    <p>${project.description}</p>
                        
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
            </div>`
      }
    }

    popUp.classList.add('pop')

    const closePop = document.querySelector('.pop-x')
    closePop.addEventListener('click', () => {
      popUp.classList.remove('pop')
      console.log('closePop:', closePop)
    })
  })
})
