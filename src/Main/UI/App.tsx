import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {initializeApp, setNumberColumns} from '../BLL/b2-auth-reducer'
import { AppStoreType } from '../BLL/b1-store'

import s from './App.module.scss'
import {Header} from '../../Components/Header/Header'
import {Relationships} from '../../Components/Relationships/Relationships'
import {Requirements} from '../../Components/Requirements/Requirements'
import {UsersContainer} from '../../Components/Users/UsersContainer'
import useWindowDimensions from '../../Utils/useWindowResize'
import getColumns from '../../Utils/getColumns'
import { SignUpContainer } from '../../Components/SignUp/SignUpContainer'
import Footprint from '../../Components/Footprint/Footprint'
import Footer from '../../Components/Footer/Footer'
import Modal from '../../Components/Common/Modal/Modal'



function App() {

    const dispatch = useDispatch()
    const isOpenModal = useSelector((s: AppStoreType) => s.auth.isOpenModal)

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
            <Footprint/>
            <Footer/>
            <Modal isOpenModal={isOpenModal}/>
        </div>
    );
}

export default App
