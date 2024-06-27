import {useState} from 'react'
import SwitchBtn from "../components/SwitchBtn"
import Login from '../components/Login';
import Signup from '../components/Signup';

export default function LoginSignUp() {

    const [isLoginPage,setIsLoginPage]=useState(true)

    function toggle(){
        setIsLoginPage(!isLoginPage)
    }

    return (<>
        <SwitchBtn labelTrue='CONNEXION' labelFalse='INSCRIPTION' state={isLoginPage} toggleFunction={()=>toggle()}/>
        {isLoginPage?<Login />:<Signup/>}
        </>);
}