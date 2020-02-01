import React from 'react'
import '../styles/Article.css'

const Article = (props) => {
    return(
        <article className="article">
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>{props.text}</p>
        </article>
    )
}

export default Article;