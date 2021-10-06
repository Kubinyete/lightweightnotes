import styled from "styled-components"
import HamburguerButtonBackgroundSvg from "./HamburguerButton.svg"

const HamburguerButtonStyled = styled.button`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.active ? 'rgba(0,0,0,.1)' : 'transparent'};
    background-image: url(${HamburguerButtonBackgroundSvg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    outline: none;
    transition: background-color 200ms ease-in-out;
    opacity: .5;
    cursor: pointer;
    
    margin: 0;
    padding: 0;
    border: 0;
    
    &:hover {
        background-color: rgba(0,0,0,.1);
        transition: background-color 200ms ease-in-out;
    }
`

const HamburguerButton = (props) => {
    return (
        <HamburguerButtonStyled active={props.active} onClick={props.click} width={props.width} height={props.height}/>
    )
}

export default HamburguerButton