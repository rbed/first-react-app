import React from 'react'
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'czym jest teoria strun',
        author: 'jan nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus dolor corporis ipsam modi culpa quibusdam ab in, iure doloremque placeat quisquam recusandae! Neque, saepe ab dignissimos cumque porro perspiciatis?'
    },
    {
        id: 2,
        title: 'czym jest paradoks fermiego',
        author: 'jan nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus dolor corporis ipsam modi culpa quibusdam ab in, iure doloremque placeat quisquam recusandae! Neque, saepe ab dignissimos cumque porro perspiciatis?'
    },
    {
        id: 3,
        title: 'czym jest ciemna materia',
        author: 'jan nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus dolor corporis ipsam modi culpa quibusdam ab in, iure doloremque placeat quisquam recusandae! Neque, saepe ab dignissimos cumque porro perspiciatis?'
    },

]


const HomePage = () => {
    const arts = articles.map(art => <Article key={art.id} title={art.title} author={art.author} text={art.text}/>)
    return ( 
        <>
        <h1>Patrz na te arty!</h1>
        <div>{arts}</div>
        </>
     );
}
 
export default HomePage;