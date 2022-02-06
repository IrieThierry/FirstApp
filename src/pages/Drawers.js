import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import styles from '../styles/stylebtn.module.css'

function Drawers(props){

   const [commande, setCommande] = useState(props.commande)
    props.nbreProduit(commande.length)

   const valeurProduit = commande.reduce((a,b)=> a + ( b.prixUnitaireProduit * b.quantiteProduit),0)
    const onClose = () => {
    props.setVisible(false);
    };

    const supprimer = (i)=>{
        const liste = [...commande]
        liste.splice(i,1)
        setCommande(liste)
        console.log(commande);
       /* let elementSup = commande.filter(x=> x.idProduit !== p.idProduit)
        setCommande(elementSup)*/
    }

    return (
        <div>
            
            <Drawer
                title={`${props.size} Drawer`}
                placement="right"
                size={props.size}
                onClose={onClose}
                visible={props.visible}
               
                extra={
                
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={onClose}>
                    OK
                    </Button>
                </Space>
                }
                
            >
                <table>
                    <thead style={{color:'black'}}>
                        <th>Designation Produit</th>
                        <th>Quantite</th>
                        <th>Montant</th>
                        <th>Action</th>
                    </thead>
                    {commande.map((produit,i)=>{

                        const {idProduit,codeProduit,libeleProduit,quantiteProduit,prixUnitaireProduit } = produit;
                        return(  <tr>
                                    <td>{libeleProduit}</td>
                                    <td>{quantiteProduit}</td>
                                    <td>{quantiteProduit * prixUnitaireProduit}</td>
                                    <td>
                                        <button className={styles.btnmoins} type='button' style={btnStyle.buttonSup} onClick={()=> supprimer(i) }  >SUPPRIMER</button>
                                    </td>
                                </tr>)

                    })}
                                <tr>
                                    <td colspan="2"> Valeur de la commande</td>
                                    <td><h5>{valeurProduit}</h5></td>
                                    <td><button type="button" className='bg-primary' style={btnStyle.buttonSubmite}>VALIDER</button></td>
                                </tr>
                </table>
               
            </Drawer>
            
        </div>
    );
};

const btnStyle ={
    buttonSup :{
        width:'100px',
        height:'30px',
        borderRadius:'6px',
        border:'none',
        fontSize:'12px',
        outline:'none',
        color:'red',
        fontWeight:'bolder'
    },
    buttonSubmite:{
        width:'100px',
        height:'40px',
        borderRadius:'6px',
        border:'none',
        backgroundColor:'blue',
        fontSize:'14px',
        outline:'none',
        color:'white',
        fontWeight:'bolder'
    }
}

export default Drawers;