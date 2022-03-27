import React from 'react';
import { CustomButton } from '../componentes'
import styles from '../styles/styleSign.module.css'
import logo from '../image/logo.png'
import { useState } from 'react';


const Login = () => {


    const [infoUser, setInfoUser] = useState([{nom:'nom', prenom:'prenom', login:'login', passWord:'passWord', confirmPassWord:'confirmPassWord'}])
    
    const miseAjour = (e)=>{
        const update = {...infoUser}
        update[e.target.getAttribute('name')] = e.target.value
        setInfoUser(update)
    }


    return (
        
            <main>
                <div className={styles.formcontainer}>
                    <div className={styles.formleft}>
                        <div>
                            <h1 style={{color:"#fff"}}>Login</h1>
                            <h3 style={{color:"#d0ccd5"}}>Renseignez ce formulaire pour accéder à votre compte</h3>
                        </div>
                        <div className={styles.logo}>
                            <img alt="logo" src={logo}/>
                        </div>
                    </div>
                    <div className={styles.formright}>
                        <form id='sign'>
                            <div>
                                <input style={{marginTop:'30px'}} type="text" name="nom" id="" placeholder='Nom' value={infoUser.nom} onChange={miseAjour}/>
                            </div>
                            <div>
                                <input type="text" name="prenom" id="" placeholder='Prenom' value={infoUser.prenom} onChange={miseAjour}/>
                            </div>
                            <div>
                                <input type="text" name="login" id="" placeholder='Login' value={infoUser.login} onChange={miseAjour}/>
                            </div>
                            
                            <div>
                                <input type="password" name="passWord" id=""  placeholder='Mot de passe' value={infoUser.passWord} onChange={miseAjour}/>
                            </div>
                            <div>
                                <input type="password" name="confirmPassWord" id=""  placeholder='Confirme le Mot de passe' value={infoUser.confirmPassWord} onChange={miseAjour}/>
                            </div>

                            <CustomButton name="S'inscrire" color="#ffea00" padding="15px 30px" />

                            <div className={styles.lien}>
                                <a href='#'>Vous avez déja un compte ? se connecter</a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            
        
    );
};

export default Login;