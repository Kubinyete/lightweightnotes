import styled from "styled-components"

const SidebarItemStyled = styled.a`
    background-color: ${props => props.selected ? 'var(--panelSelectedBackgroundColor)' : 'transparent'};
    width: 95%;
    margin: .25em auto;
    padding: 1em 0;
    font-family: Roboto, sans-serif;
    display: block;
    font-size: 1.5em;
    text-indent: 1em;
    color: var(--textColor);
    border-radius: .5em;
    transition: background-color 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        transition: background-color 200ms ease-in-out;
        background-color: var(--panelSelectedBackgroundColor);
    }
`

const SidebarItem = props => {
    return (
        <li>
            <SidebarItemStyled selected={props.selected} onClick={props.click}>{props.children}</SidebarItemStyled>
        </li>
    )
}

export default SidebarItem