import React from 'react';
import s from './App.module.scss';
import {View} from "../../Common/View";

function App() {
    return (
        <div className={s.app}>
            <View/>
            <h1>The five boxing wizards jump quickly.</h1>
            <p>The five boxing wizards jump quickly.</p>
        </div>
    );
}

export default App;
