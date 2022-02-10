import React from 'react';
import { CustomButton } from '../componentes'
import styles from '../styles/style.module.css'
import logo from '../image/logo.png'
import { useState } from 'react';


const Login = () => {


    const [login, setLogin] = useState('')
    const [passWord, setPassWord] = useState('')
    const [checkbox, setCheckbox] = useState(false)



    return (
        
            <main>
                <div className={styles.formcontainer}>
                    <div className={styles.formleft}>
                        <div>
                            <h1 style={{color:"#fff"}}>Login</h1>
                            <h3 style={{color:"#d0ccd5"}}>Renseignez ce formulaire pour accéder à votre compte</h3>
                        </div>
                        <div className={styles.logo}>
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className={styles.formright}>
                        <form style={{position:'relative'}}>
                            <div>
                                <input type="text" name="login" id="" placeholder='Login' value={login} onChange={(e)=> setLogin(e.target.value)}/>
                            </div>
                            <div style={{position:'relative'}}>
                                <input type="password" name="password" id=""  placeholder='Mot de passe' value={passWord} onChange={(e)=> setPassWord(e.target.value)}/>
                                <span style={{position:'absolute', right:'0',top:'25px', fontWeight:'bold'}}><a href='#'>Oublier ?</a></span>
                            </div>
                            <div style={{marginTop:'30px'}}>
                                <input type="checkbox" name="checkbox" id="" onClick={()=> setCheckbox(!checkbox)}/> <span>Se souvenir de moi </span>
                            </div>

                            <CustomButton name="Connexion" color="#dc3545" padding="15px 30px" />

                            <div style={{position:'absolute', bottom:'25px', fontWeight:'500', right:'75px'}}>
                                <a href="#">Vous n'avez pas de compte ? s'inscrire</a>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
            
        
    );
};

export default Login;