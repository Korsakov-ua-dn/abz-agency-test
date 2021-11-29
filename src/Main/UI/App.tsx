import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {initializeApp, setNumberColumns} from '../BLL/b2-app-reducer'

import s from './App.module.scss'
import {Header} from '../../Components/Header/Header'
import {Requirements} from '../../Components/Requirements/Requirements'
import {UsersContainer} from '../../Components/Users/UsersContainer'
import useWindowDimensions from '../../Utils/useWindowResize'
import getColumns from '../../Utils/getColumns'
import {SignUpContainer} from '../../Components/SignUp/SignUpContainer'
import Footprint from '../../Components/Footprint/Footprint'
import Footer from '../../Components/Footer/Footer'
import Modal from '../../Components/Common/Modal/Modal'
import {RelationshipsContainer} from '../../Components/Relationships/RelationshipsContainer'
import Menu from "../../Components/Common/Mobile Menu/Menu"
import Preloader from "../../Components/Common/Preloader/Preloader"

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
            <RelationshipsContainer/>
            <Requirements/>
            <UsersContainer/>
            <SignUpContainer/>
            <Footprint/>
            <Footer/>
            <Modal/>
            <Menu/>
            <Preloader/>
        </div>
    );
}

export default App
