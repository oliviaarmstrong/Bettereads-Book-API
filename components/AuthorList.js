import styled from "styled-components"
import Author from "./Author"
import Book from "./Book"

//takes in all the authors
export default function AuthorList({ authors }) {
    return <Wrapper>
    { authors.map(b => <Author country={b.country} author={b.author} />) }
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    
`