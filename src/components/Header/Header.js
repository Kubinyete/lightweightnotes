import styled from "styled-components"
import HamburguerButton from "../HamburguerButton/HamburguerButton"

const TitleStyled = styled.span`
    color: var(--textColor);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    vertical-align: middle;
    font-size: 2em;
    display: inline-block;
    margin-left: .5em;
`

const HeaderStyled = styled.header`
    background-color: var(--panelBackgroundColor);
    height: 6em;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 16px rgb(0,0,0,.1);
    overflow: hidden;
    z-index: 1;
`

const Header = (props) => {
    return (
        <HeaderStyled>
            <HamburguerButton active={props.HamburguerButtonActive} click={props.HamburguerButtonClick} width="6em" height="100%"/>
            <TitleStyled>{props.title}</TitleStyled>
        </HeaderStyled>
    )
}

export default Header