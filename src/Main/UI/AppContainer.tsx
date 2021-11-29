import {Provider} from "react-redux"
import App from "./App"
import store from "../BLL/b1-store"

const AppContainer = () => {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default AppContainer
