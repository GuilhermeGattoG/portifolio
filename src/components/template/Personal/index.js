import React, { useEffect } from "react"
import styles from "./styles.module.scss"
import Image from "../../atoms/Image";

/*const listenerForPicture = () => {
    if(window.pageYOffset <= (document.getElementById("professional").offsetTop - document.getElementsByClassName(styles.picture)[0].children[0].clientHeight) && window.matchMedia("(min-width:480px)").matches){
        document.getElementsByClassName(styles.picture)[0].style.marginTop = `${(document.getElementsByClassName(styles.description)[0].clientHeight - (1.25 * document.getElementsByClassName(styles.picture)[0].children[0].clientHeight)) * (window.pageYOffset / document.getElementsByClassName(styles.description)[0].clientHeight)}px`
    }
}

window.addEventListener("scroll",listenerForPicture)*/


const Personal = () => {
    useEffect(() => {
        const listenerForPicture = () => {
            const professional = document.getElementById("professional") 
            const pictureContainer = document.getElementsByClassName(styles.picture)[0] 
            const description = document.getElementsByClassName(styles.description)[0]

            if(!professional || !pictureContainer || !description || !window.matchMedia("(min-width:480px)").matches) return

            const picture = pictureContainer.children[0]

            if(!picture) return

            if(window.pageYOffset <= (professional.offsetTop - picture.clientHeight) && window.matchMedia("(min-width:480px)").matches) {
                if(parseFloat(pictureContainer.style.marginTop) >= 1350) {pictureContainer.style.marginTop = "1349px"}
                else pictureContainer.style.marginTop = `${(description.clientHeight - (1.35 * picture.clientHeight)) * (window.pageYOffset / description.clientHeight)}px`
            }
        }

        window.addEventListener("scroll", listenerForPicture)

        return () => {
            window.removeEventListener("scroll", listenerForPicture)
        }
    }, [])

    return (
        <div id={"personal"} className={styles.personalContainer}>
            <div className={styles.picture}>
                <Image width={"100%"} alt={"My Picuture"} src={"author.jpg"} circle={true} />
            </div>
            <div className={styles.description}>
                <h1>Sobre mim</h1>
                <p>
                    Nasci em Avaré e cresci em Itaí, interior de São Paulo, local onde ainda adolescente despertei minha curiosidade pela computação. Isto fez com que anos depois optasse por cursar Engenharia de Computação pela Universidade Tecnolóǵica Federal do Paraná.
                    <br/><br/>
                    No ambiente universitário pude trabalhar como Secretário de Finanças pelo Diretório Acadêmico de Computação (DACOMP). Nossa equipe era responsável pelo gerenciamento econômico, e controlava a movimentação do caixa do Diretório.
                    <br/><br/>
                    Em 2019 atuei como estagiário desenvolvendo aplicativos móveis pela empresa IE Tecnologia. Para tal, fiz uso do framework Ionic. Também atuei na manutenção do servidor da empresa, que contava principalmente com recursos na linguagem PHP.
                    <br/><br/>
                    Ao final deste mesmo ano já atuava como desenvolvedor Web Júnior na MedPass, onde utilizei React.js e Vue.js para implementar Single Page Applications (SPAs), bem como manutenção em aplicações Mobile utilizando React Native.
                    <br/><br/>
                    Após a pandemia, fiquei 4 anos como CEO de uma confecção voltada para moda feminina. Uma empresa familiar da minha cidade (Itaí-SP) a qual me confiou a missão administrativa, sendo minhas principais funções a de planejar, projetar e controlar a produção de toda a fábrica. Também precisa entender os processos e trabalhar continuamente para melhoria e otimização dos mesmos.
                </p>
            </div>
        </div>
    )
}

export default Personal