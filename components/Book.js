import styled from 'styled-components'

export default function Book({title, author, pages, link}){
    return <BookWrapper>
        <Title>{title}</Title>
        <h2> by {author}</h2>
        <p>Number of Pages: {pages}</p>
        <a href={link}> Learn More</a>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
`
const Title = styled.h1 `
    color: black;
    text-decoration: underline;
    text-align: center;
`

