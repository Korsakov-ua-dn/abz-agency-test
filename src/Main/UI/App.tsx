import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"

import {initializeApp} from '../BLL/b2-auth-reducer'

import s from './App.module.scss'
import {View} from "../../Common/View"
import {Header} from '../../Components/Header/Header'
import {Relationships} from '../../Components/Relationships/Relationships'
import {Requirements} from '../../Components/Requirements/Requirements'
import {UsersContainer} from '../../Components/Users/UsersContainer'


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        <div className={s.app}>
            <Header/>
            <Relationships/>
            <Requirements/>
            <UsersContainer/>
            <View/>
        </div>
    );
}

export default App
