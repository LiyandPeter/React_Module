import AuthContainer from '../componemts/AuthContainer'
import Header from '../componemts/Header'
import LoginForm from '../componemts/Login'
import NavLink from '../componemts/NavLink'
import RegisterForm from '../componemts/Regist'


function Home(){

    return(
        <div>
            Hello world
            <Header/>
            <AuthContainer/>
            <LoginForm/>
            <NavLink/>
            <RegisterForm/>
        </div>
    )
}
export default Home