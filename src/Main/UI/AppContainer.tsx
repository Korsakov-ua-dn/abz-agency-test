import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import App from "./App"
import b1Store from "../BLL/b1-store"

const AppContainer = () => {

    return (
        <Router>
            <Provider store={b1Store}>
                <App/>
            </Provider>
        </Router>
    );
}

export default AppContainer
