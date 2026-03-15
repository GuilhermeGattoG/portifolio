import React, { useEffect } from "react"
import styles from "./styles.module.scss";
import Image from "../../atoms/Image";


const Tecnology = ({ image, title, text, background = null }) => {
    useEffect(() => {
        const scrollListener = () => {
            const element = document.getElementsByClassName(styles.tecnology)[0]

            if(!element) return

            if((window.pageYOffset + window.outerHeight) >= document.getElementsByClassName(styles.tecnology)[0].offsetTop && !document.getElementsByClassName(styles.tecnology)[0].classList.contains(styles.animationStart)) {
                element.classList.toggle(styles.animationStart)
                window.removeEventListener("scroll", scrollListener)
            }
        }

        window.addEventListener("scroll", scrollListener)

        return () => {
            window.removeEventListener("scroll", scrollListener)
        }
    }, [])

    return (
        <div className={styles.tecnology}>
            <div className={`${styles.tecnologyImage} ${image === "react.svg" ? styles.animateRotation : ""}`} style={{backgroundColor: background}} >
                <Image className={image === "react.svg" ? styles.animateRotation : ""} alt={image} width={"150px"} src={image} />
            </div>
                <div className={styles.tecnologyContent}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Tecnology