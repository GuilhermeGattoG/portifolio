import React from "react"
import styles from "./styles.module.scss"
import ProfessionalCard from "../../organisms/ProfessionalCard";

const Professional = () => {
    return (
        <div id={"professional"} className={styles.professionalContainer} >
            <div className={styles.containerTitle}>
                <h1>Minha formação profissional</h1>
            </div>
            <div className={styles.cardsContainer}>
                    <ProfessionalCard
                        org={"UTFPR"}
                        image={"utfpr-logo.svg"}
                        text={"Graduação"}
                        explanation={"Durante o curso de Engenharia de Computação estive em contato com matérias que percorrem do núcleo comum às áreas de conhecimento específicas de programação e lógica computacional. Atrelada à multidisciplinariedade da graduação, também atuei como Secretário Financeiro do Diretório Acadêmico de Computação (DACOMP), sendo um dos responsáveis pela tesouraria do time."}/>
                    <ProfessionalCard
                        org={"IE"}
                        image={"ie-logo.svg"}
                        text={"Estágio"}
                        explanation={"Enquanto estagiário na IE Tecnologia atuei como Desenvolvedor, implementando soluções mobile com Ionic e serviços de gerenciamento em PHP. Juntamente com o desenvolvimento de aplicativos, entrei em contato com modelagem de software e versionamento de código."}
                        style={{color: "filter: invert(15%) sepia(100%) saturate(7473%) hue-rotate(4deg) brightness(108%) contrast(113%);"}}/>
                    <ProfessionalCard
                        org={"MedPass"}
                        image={"medpass-logo.svg"}
                        text={"Developer"}
                        explanation={"Atuando como Desenvolver Web Jr., aprimorei minhas práticas de modelo de aplicações e versionamento enquanto programava Single Page Applications (SPAs) com o auxílio dos frameworks React.js e Vue.js. Também realizava manutenções de aplicações móveis utilizando React Native."}/>
                    <ProfessionalCard 
                        org={"Chamativa"}
                        image={"chamativa-logo.svg"}
                        text={"CEO"}
                        explanation={"Trabalhei como CEO de uma fábrica de roupa em minha cidade natal (Itaí-SP). Uma empresa familiar que me confiou a missão de administrar, sendo minhas principais funções a de planejar, projetar e controlar a produção de toda a fábrica. Também tinha como objetivo entender os processos e trabalhar continuamente para melhoria e otimização dos mesmos."}/>
            </div>
        </div>
    )
}

export default Professional