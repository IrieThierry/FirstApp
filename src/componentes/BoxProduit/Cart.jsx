import React from 'react';
import {ShoppingCartOutlined  } from '@ant-design/icons';
import styles from '../../styles/stylebtn.module.css'

const Cart = (props) => {

    const styleCart={
        btn:{
            width: props.width,
            height: props.height,
            backgroundColor: props.bgColor,
            color: props.color,
            padding: props.padding,
            fontSize:'16px',
            fontWeight:'500',
            marginLeft:'1.8rem',
            marginTop:'.5rem',
            borderRadius:'6px',
            border:'none',
            outline:'none'
        }
    }
    return (
        <div className={styles.btncart} onClick={props.ajout}>
            <button style={styleCart.btn}><ShoppingCartOutlined style={{color:'white', fontSize:'28px'}}/>     Ajouter</button>
        </div>
    );
};

export default Cart;