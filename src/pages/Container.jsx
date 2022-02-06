import React, { useState } from "react";
import "../styles/Container.css";
import { Layout, Menu, Switch, message, Badge } from "antd";
import {
  AppstoreOutlined,
  OrderedListOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { BoxProduitTableView, BoxProduitCardView } from "../pages";
import "../styles/boostrap.css";
import Menus from "./Menus";
import Drawers from './Drawers'

const Container = () => {
  const {Footer } = Layout;
  const [hTheme, setHTheme] = useState({background:"gray",color:"white"});
  const [mode, setMode] = useState(true);
  const [affichageIcon, setAffichageIcon] = useState(true);
  const [panierPartager, setPanierPartager] = useState([]);
  const [count, setCount] = useState(0);
  const [isMessage, setIsMessage] = useState(false);
  const [visible, setVisible] = useState(false)
  const [size, setSize] = useState()

  const changeTable = () => {
    setAffichageIcon(false);
    setMode(false);
  };

  const changeBox = () => {
    setAffichageIcon(true);
    setMode(true);
  };

  const changeTheme = (value) => {
    setHTheme(value ? {background:"#030b0e",color:"white"} : {background:"gray",color:"white"});
  };

  
  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
    };

  return (
    <Layout className="col-md-12 d-flex flex-wrap pl-0 pr-0">
      {/*----------- DRAWER LISTE DE COMMANDE ---------- */}
      {visible && <Drawers style={{transition:'0.5s '}}  nbreProduit={setCount} commande = {panierPartager} visible={visible} setVisible={setVisible} size={size}/>}
      {/*-------------- MESSAGE ------------- */}
      {isMessage && message.info("Vous avez deja ajouté ce produit au panier")}

      <nav className="col-md-12 pr-0 pl-0 mb-2 ">
        <Menu
          style={{ fontSize: "18px", backgroundColor: hTheme.background, color: "white" }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <div className="col-md-2">
            {" "}
            <Switch onChange={changeTheme} />{" "}
          </div>
          <div className="col-md-9"></div>
          <div className="col-md-1">
            <div>irie</div>
          </div>
        </Menu>
      </nav>

     

      {/*-------------------- */}

      <div className="d-flex flex-wrap" style={{ width: "100%" }}>
        <div style={{ width: "15%" }}>
          <Menus Themes={hTheme.background} />
        </div>

        <div style={{ width: "85%" }}>
          <div
            className="row col-md-12 d-flex justify-content-center align-item-center"
            style={{ height: "50px" }}
          >
            <div className="col-md-10">
              <h3 style={{ color: "#7f7f80" }}>Liste des Produits</h3>
            </div>

            {/*icon de modification affichage */}
            <div className="col-md-2 d-flex justify-content-between align-item-center">
              {affichageIcon ? (
                <AppstoreOutlined
                  style={{ fontSize: "36px", transition: "0.5s" }}
                  onClick={changeTable}
                />
              ) : (
                <OrderedListOutlined
                  style={{ fontSize: "36px" }}
                  onClick={changeBox}
                />
              )}

              <Badge count={count} onClick={()=> setVisible(showLargeDrawer)}>
                <ShoppingOutlined style={{ fontSize: "36px", color: "orange" }} />
              </Badge>

            </div>
             {/*panier incrementé */}

           
          </div>

            {/*mode affichage */}
          {mode ? (
            <BoxProduitTableView
              color={hTheme.color}
              colorTheme={hTheme.background}
              message={setIsMessage}
              nbreProduit={setCount}
              currentPanier={panierPartager}
              modifierPanier={setPanierPartager}
            />
          ) : (
            <BoxProduitCardView
              colorTheme={hTheme.background}
              message={setIsMessage}

              style={{ transition: "0.5s" }}
              nbreProduit={setCount}
              currentPanier={panierPartager}
              modifierPanier={setPanierPartager}
            />
          )}
        </div>
      </div>

      <Footer
        style={{
          marginBottom: "25px",
          marginTop: "30px",
          backgroundColor: hTheme.background,
          color: hTheme.color,
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Container;
