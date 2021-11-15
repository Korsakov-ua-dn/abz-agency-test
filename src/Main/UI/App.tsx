import s from './App.module.scss';
import {View} from "../../Common/View";
import { Header } from '../../Components/Header/Header';
import { Relationships } from '../../Components/Relationships/Relationships';
import { Requirements } from '../../Components/Requirements/Requirements';

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Relationships/>
            <Requirements/>
            <View/>
        </div>
    );
}

export default App;
