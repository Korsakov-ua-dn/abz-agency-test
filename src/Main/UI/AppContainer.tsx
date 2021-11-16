import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "../BLL/store";

const AppContainer = () => {

    return (
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    );
}

export default AppContainer;
