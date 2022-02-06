import React from "react";
// import styles from '../styles/stylebutton.module.css'
import styles from '../styles/stylebtn.module.css'
const CustomListButton = (props) => {

  const [first, setfirst] = React.useState();

  return (
    <div style={style.styleButtonContainer} className="pt-0">
      <div>
        <button style={style.button} className={styles.btnmoins} onClick={props.actionMoins}> - </button>
      </div>

      <div>

        <input style={style.input} type="text" value = {props.quantite} onChange={props.update}/>

      </div>

      <div>
        <button  className={styles.btnplus} style={style.button} onClick={props.actionPlus}> + </button>
      </div>
    </div>
  );
};


const style = {
  styleButtonContainer: {
    width:"150px",
    height:"40px",
    border:'1px solid #ccc',
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius:'6px',
    overflow:'hidden',
    backgroundColor:"white"
  },
 
  input: {
    borderRadius:"6px",
    padding:"7px",
    border: "1px solid gray",
    width:'100%',
    border:'none',
    display: "inline-block",
    outline:'none',
    textAlign:'center',
    fontWeight:"500",
    fontSize:"20px"
  },
  button:{
      border:'none',
      outline:'none',
      color:'white',
      fontSize:'42px',
      width:"50px",
      height:"100%",
      backgroundColor:"#ccc",
      fontWeight:"500"

  }
};

export default CustomListButton;
