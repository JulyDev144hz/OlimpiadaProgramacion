import "../sass/main.css"
export default function page(){

    // let {passwState, setPasswState} = React.useState(false)

    const togglePassword = () =>{
        // setPasswState(!passwState)
    }

    return <div className="loginPage">
        <div className="loginBox">
            <h1>Inicio de sesion</h1>
            <span>Usuario: </span>
            <input type="text" />
            <span>Contraseña</span>
            {/* <input type={passwState} /> <input type="checkbox" name="" id="" onClick={togglePassword} /> */}
            <button className="btnLogin">Iniciar Sesion</button>
        </div>
    </div>
}