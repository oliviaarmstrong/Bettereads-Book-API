import styled from 'styled-components'

export default function Author({author, country}){
    return <BookWrapper>
        <h2> {author}</h2>
        <h2> {country} </h2>
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

