import React from 'react';
// import styles from '../styles/stylebutton.module.css'
import styles from '../styles/stylebtn.module.css'

const CustomCardButton = (props) => {
    return (
        <div style={cardButtonStyle.containerStyle}>

            <div>
                 <button className={styles.btnmoins} type='button' style={cardButtonStyle.buttonMoins} onClick={props.actionDel} > -</button>
            </div>

            <div>
                 <input type='text' style={cardButtonStyle.input} value={props.quantite} onChange={props.actionInput}/>
            </div>

            <div>
                 <button className={styles.btnplus} type='button' style={cardButtonStyle.buttonPlus} onClick={props.actionAdd} >+</button>
            </div>

        </div>
    );
};

const cardButtonStyle = {
    containerStyle :{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        width:'150px',
        paddingTop:'1rem'
    },

    buttonPlus :{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        border:'1px solid green',
        backgroundColor:'white',
        fontSize:'24px',
        outline:'none',


    },
    buttonMoins :{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        border:'1px solid red',
        backgroundColor:'white',
        fontSize:'24px',
        outline:'none',


    },

    input :{
        width:'45px',
        height:'30px',
        border:'none',
        outline:'none',
        textAlign:'center',
        fontWeight:'bold'

    }
}
export default CustomCardButton;