import React from "react";
const CustomListButton = ({quantite, produit}) => {

  const [first, setfirst] = React.useState(quantite);

  return (
    <div style={style.styleButtonContainer}>
      <div>
        <button style={style.button}> - </button>
      </div>

      <div>

        <input style={style.input} type="text" value = {quantite} />

      </div>

      <div>
        <button style={style.button}> + </button>
      </div>
    </div>
  );
};


const style = {
  styleButtonContainer: {
      width:"150px",
    border:'1px solid gray',
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
    textAlign:'center'
  },
  button:{
      border:'none',
      outline:'none',
      color:'orange',
      fontSize:'20px',
      width:"40px",
      height:"40px",
      backgroundColor:"#fff"
  }
};

export default CustomListButton;
