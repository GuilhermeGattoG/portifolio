import React from "react"
import styles from "./styles.module.scss"

import Image from "../../atoms/Image"

const Footer = () => {
    const goToPage = (socialMediaLink) => {
        window.location.replace(socialMediaLink)
    }

    const getIconSize = () => {
        const size = ((3 * window.innerWidth) / 32)

        if(size > 50){
            return `40px`
        }

        return `${size}px`
    }

    return (
        <div id={"contato"} className={styles.footer} >
            <h1>Para entrar em contato comigo</h1>
            <p>Dê uma olhada no meu e-mail e redes sociais</p>
            <div className={styles.facebook} onClick={() => goToPage("https://www.facebook.com/guilherme.gattogomes")} >
                <Image src="facebook-logo.svg" alt="facebook" width={getIconSize()} />
            </div>
            <div className={styles.linkedin} onClick={() => goToPage("https://www.linkedin.com/in/guilherme-gatto-5a346215b")} >
                <Image src="linkedin-logo.svg" alt="LinkedIn" width={getIconSize()} />
            </div>
            <div className={styles.github} onClick={() => goToPage("https://github.com/GuilhermeGattoG")} >
                <Image src="github-logo.svg" alt="github" width={getIconSize()} />
            </div>
            <div className={styles.gmail} onClick={() => goToPage("mailto:guilherme.gatto.g@gmail.com")} >
                <Image src="gmail-logo.svg" alt="e-mail" width={getIconSize()} />
            </div>
            <br/><br/><br/>
            <p className={styles.madeWithLove}>Made with &#128147; by &#128008;</p>
        </div>
    )
}

export default Footer