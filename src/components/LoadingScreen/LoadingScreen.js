import styled from "styled-components"
import LoadingScreenIcon from "./loadingscreen-icon.png"

const BlurContainer = styled.div`
    filter: ${props => props.active ? 'blur(1px) opacity(.5)' : 'none'};
    overflow: hidden;
`

const AnimatedIcon = styled.img`
    animation: loadingAnim ${props => props.time || '1s'} linear infinite;
    display: block;
    margin: 1em auto;
`

const Text = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 1.5em;
    color: var(--textColor);
`

const LoadingScreenBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    z-index: 1;
`

const LoadingScreenDialog = styled.div`
    transition: top 200ms ease-out, opacity 500ms ease-out;
    background-color: var(--panelBackgroundColor);
    box-shadow: 0px 0px 16px rgb(0,0,0,.1);
    border-radius: .5em;
    top: ${props => props.active ? '50%' : '45%'};
    opacity: ${props => props.active ? '1' : '0'};
    left: 50%;
    display: inline-block;
    position: absolute;
    transform: translate(-50%,-50%);
    overflow: hidden;
    padding: 2em;
`

const LoadingScreen = (props) => {
    return (
        <div>
            <BlurContainer active={props.active}>
                {props.children}
            </BlurContainer>
            <LoadingScreenBackground active={props.active}>
                <LoadingScreenDialog active={props.active}>
                    <AnimatedIcon time="500ms" src={LoadingScreenIcon}/>
                    <Text>Carregando...</Text>
                </LoadingScreenDialog>
            </LoadingScreenBackground>
        </div>
    )
}

export default LoadingScreen