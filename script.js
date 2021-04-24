function iniciar() {
    hrd = document.querySelector('.header')
    main = document.querySelector('.main')
    foot = document.querySelector('.footer')

    hrd.innerHTML = `

        <section>
            <div class="header-logo">
                <a href="#">Dutra Cursos</a>
            </div>
        </section>

        <section>
            <div class="header-menu">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" class="active">Cursos</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </section> <!-- MENU -->

        <section>
            <div class="header-Social-Media">
                <ul>
                    <li><a href="https://www.youtube.com/channel/UC12Fvp_lAzXHXD8WhulM4sw" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://github.com/DutraGames" target="_blank"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </section> <!-- Social Media -->

    `

    main.innerHTML = `
        <section>
            <h2 class="curso-title">Cursos</h2>
            <div class=card>
                <div class="card-body" id="card-1">
                    <h2 class="card-title">Web Moderno</h2>
                    <a href="#" class="card-btn">Saiba Mais</a>
                </div>

                <div class="card-body" id="card-2">
                    <h2 class="card-title">JavaScript</h2>
                    <a href="#" class="card-btn">Saiba Mais</a>
                </div>

                <div class="card-body" id="card-3">
                    <h2 class="card-title">Python</h2>
                    <a href="#" class="card-btn">Saiba Mais</a>
                </div>

                <div class="card-body" id="card-4">
                    <h2 class="card-title">HTML</h2>
                    <a href="#" class="card-btn">Saiba Mais</a>
                </div>

                <div class="card-body" id="card-5">
                    <h2 class="card-title">React JS</h2>
                    <a href="#" class="card-btn">Saiba Mais</a>
                </div>

                <div class="card-body" id="card-6">
                    <h2 class="card-title">C#</h2>
                    <a href="#" class="card-btn">Saiba Mais</a>
                </div>

            </div>
        </section>
    `

    foot.innerHTML = `

        <div>
            <p><span>Gabriel Dutra </span>&copy; 2021</p>
        </div>
    `
}

iniciar()