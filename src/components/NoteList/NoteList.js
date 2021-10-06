import {Component, useEffect, useState} from "react"
import styled from "styled-components"

const ListStyled = styled.ul`

`

const ContainerStyled = styled.div`
    margin-top: 6em;
    overflow-y: auto;
    overflow-y: hidden;
    width: 100%;
`

const NoteList = (props) => {
    return (
        <ContainerStyled>
            <ListStyled>
                {props.children}
            </ListStyled>
        </ContainerStyled>
    )
}

export default NoteList