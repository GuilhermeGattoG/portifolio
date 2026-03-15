import React from "react"
import "./styles.module.scss"
import LinkNavigation from "../../atoms/LinkNavigation"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const NavBar = () => {

    return (
        <nav>
            <div className={`nav-left`} ></div>
            <div className={`nav-right`} >
                <LinkNavigation to={"/"} text="Home" />
                <LinkNavigation to={"/data/confeccao-brasil"} text={"Análise de Dados"} />
            </div>
        </nav>
    )
}

export default NavBar

// VERSÃO ANTIGA PRESERVADA PARA POSSÍVEIS FUTUROS TRABALHOS
/*import React from "react"
import "./styles.module.scss"
import LinkNavigation from "../../atoms/LinkNavigation"

const NavBar = () => {

    let prevScrollpos = window.pageYOffset

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset

        if (prevScrollpos > currentScrollPos) {
            document.getElementsByTagName("nav")[0].style.top = "0"
        } else {
            document.getElementsByTagName("nav")[0].style.top = "-60px"
        }

        prevScrollpos = currentScrollPos
    }

    const scrollToDiv = (classId) => {
        window.scrollTo({top: (document.getElementById(classId).offsetTop), left: 0, behavior: "smooth"})
    }

    return (
        <nav>
            <div className={`nav-left`} ></div>
            <div className={`nav-right`} >
                <LinkNavigation onClick={() => scrollToDiv("personal")} text="Pessoal" />
                <LinkNavigation onClick={()  => scrollToDiv("professional")} text="Profissional" />
                <LinkNavigation onClick={() => scrollToDiv("about")} text="Este Site" />
                <LinkNavigation onClick={() => scrollToDiv("tecnologies")} text={"Tecnologias"} />
                <LinkNavigation onClick={() => scrollToDiv("contato")} text={"Contato"} />
            </div>
        </nav>
    )
}

export default NavBar*/