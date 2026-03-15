import React from "react"

const Image = ({src, width, alt, circle = false}) => {
    return (
        <img alt={alt} src={`/assets/images/${src}`} style={{ width: `${width}`, borderRadius: circle ? "50%" : "0%" }} />
    )
}

export default Image