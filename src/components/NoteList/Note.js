import {Component, useEffect, useState} from "react"
import styled from "styled-components"

const Title = styled.p`
    color: var(--textColor);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    vertical-align: middle;
    font-size: 1.5em;
`

const Line = styled.p`
    color: var(--textColor);
    font-family: 'Roboto', sans-serif;
`

const NoteStyled = styled.div`
    background-color: var(--noteBackgroundColor);
    margin: 1em;
    border-radius: .5em;
    box-shadow: 0px 0px 16px rgb(0,0,0,.05);
    max-width: 30em;
    min-height: 5em;
    padding: 1em 2em;
`

const InlineListItem = styled.li`
    display: inline-block;
`

const Note = (props) => {
    return (
        <InlineListItem>
            <NoteStyled>
                <Title>{props.title}</Title>
                {
                    props.text.split('\n').map(l => <Line>{l}</Line>)
                }
            </NoteStyled>
        </InlineListItem>
    )
}

export default Note