import styled from "styled-components"

const SidebarStyled = styled.nav`
    width: 29em;
    top: 6em;
    height: calc(100% - 6em);
    overflow: hidden;
    box-shadow: 0px 0px 16px rgb(0,0,0,.1);
    background-color: var(--panelBackgroundColor);
    position: absolute;
    transition: left 200ms ease-in-out;
    left: ${props => props.active ? '0em' : '-29em'};
    position: fixed;
`

const Sidebar = (props) => {
    return (
        <SidebarStyled active={props.active}>
            <ul>
                {props.children}
            </ul>
        </SidebarStyled>
    )
}

export default Sidebar
