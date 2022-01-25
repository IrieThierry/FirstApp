import React from 'react';
import { CustomButton } from '../componentes'
import '../styles/style.css'
import logo from '../image/logo.png'
import { useState } from 'react';


const Login = () => {


    const [login, setLogin] = useState('')
    const [passWord, setPassWord] = useState('')
    const [checkbox, setCheckbox] = useState(false)



    return (
        <div>
            <main>
                <div className='form-container'>
                    <div className='form-left'>
                        <div>
                            <h1 style={{color:"#fff"}}>Login</h1>
                            <h3 style={{color:"#d0ccd5"}}>Renseignez ce formulaire pour accéder à votre compte</h3>
                        </div>
                        <div className='logo'>
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className='form-right'>
                        <form>
                            <div>
                                <input type="text" name="login" id="" placeholder='Login' value={login} onChange={(e)=> setLogin(e.target.value)}/>
                            </div>
                            <div>
                                <input type="password" name="password" id=""  placeholder='Mot de passe' value={passWord} onChange={(e)=> setPassWord(e.target.value)}/>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" onClick={()=> setCheckbox(!checkbox)}/> <span>Se souvenir de moi </span>
                            </div>

                            <CustomButton name="Connexion" color="#dc3545" padding="15px 30px" />
                        </form>
                    </div>
                </div>
            </main>
            
        </div>
    );
};

export default Login;