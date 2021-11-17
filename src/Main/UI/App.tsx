import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"

import {initializeApp, setNumberColumns} from '../BLL/b2-auth-reducer'

import s from './App.module.scss'
import {View} from "../../Common/View"
import {Header} from '../../Components/Header/Header'
import {Relationships} from '../../Components/Relationships/Relationships'
import {Requirements} from '../../Components/Requirements/Requirements'
import {UsersContainer} from '../../Components/Users/UsersContainer'
import useWindowDimensions from '../../Utils/useWindowResize'
import getColumns from '../../Utils/getColumns'
import { SignUpContainer } from '../../Components/SignUp/SignUpContainer'


function App() {

    const dispatch = useDispatch()

    const screenSize = useWindowDimensions()
    dispatch(setNumberColumns(getColumns(screenSize.width)))
    
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        <div className={s.app}>
            <Header/>
            <Relationships/>
            <Requirements/>
            <UsersContainer/>
            <SignUpContainer/>
            <View/>
        </div>
    );
}

export default App
