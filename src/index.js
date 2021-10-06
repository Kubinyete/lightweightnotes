import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App/App"
import GlobalStylesheet from "./stylesheets/GlobalStylesheet"

ReactDOM.render(
    <React.StrictMode>
        <GlobalStylesheet/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
