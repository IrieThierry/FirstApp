import React from 'react';

const CustomButton = (props) => {

    const CustomButtonStyle={
        borderRadius:'5px',
        border:'none',
        fontSize:'24',
        fontWeight:'bold',
        padding: props.padding,
        backgroundColor:props.color,
        color:'white',
        width:'100%',
        marginTop:'50px',
        outline:'none'
    }

    return (
        <div>
            <button type="button" style={CustomButtonStyle} onClick={props.action} >{props.name}</button>
        </div>
    );
};

export default CustomButton;