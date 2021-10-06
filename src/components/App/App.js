import {Component, useEffect, useState} from "react"
import { isDOMComponent } from "react-dom/test-utils"
import styled from "styled-components"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import SidebarItem from "../Sidebar/SidebarItem"
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import NoteList from "../NoteList/NoteList"
import Note from "../NoteList/Note"

const App = (props) => {
    const [sidebarVisible, setSidebarVisible]       = useState(false)
    const [loading, setLoading]                     = useState(false)

    const [workspaceSelected, setWorkspaceSelected] = useState()
    const [workspaceList, setWorkspaceList]         = useState([])
    const [noteList, setNoteList]                   = useState([])

    // Eventos
    const handleToggleSidebar = () => {
        setSidebarVisible(!sidebarVisible)
    }

    const handleSwitchToWorkspace = (x) => {
        setWorkspaceSelected(x)
        setSidebarVisible(false)
    }

    const handleLoad = () => {
        fetchData('api/workspaces.json', data => setWorkspaceList(data))
    }

    const handleLoadWorkspace = () => {
        if (workspaceSelected) {
            fetchData(`api/${workspaceSelected.id}.json`, data => data && setNoteList(data))
        }
    }

    // Helpers
    const fetchData = (url, handler) => {
        setLoading(true)

        fetch(url).then(r => {
            return r.json()
        }).then(r => {
            if (r.status) {
                handler(r.result)
            }
        }).catch(e => {
            handler([])
        }).finally(() => {
            setLoading(false)
        })
    }

    // Apenas executa uma unica vez ao montar o componente.
    useEffect(handleLoad, [])
    useEffect(handleLoadWorkspace, [workspaceSelected])

    return (
        <div>
            <LoadingScreen active={loading}>
                <Header title="Lightweight Notes" HamburguerButtonActive={sidebarVisible} HamburguerButtonClick={handleToggleSidebar}/>
                <Sidebar active={sidebarVisible}>
                    {
                       workspaceList.map(
                            x => <SidebarItem key={x.id.toString()} selected={workspaceSelected && x === workspaceSelected} click={handleSwitchToWorkspace.bind(this, x)}>{x.name}</SidebarItem>
                        )
                    }
                </Sidebar>
                <NoteList>
                    {
                        noteList.map(
                            x => <Note key={x.id.toString()} title={x.title} text={x.text}/>
                        )
                    }
                </NoteList>
            </LoadingScreen>
        </div>
    )
}

const AppStyled = styled(App)`
    background-color: var(--appBackgroundColor);
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    position: relative;
`

export default AppStyled