import React, { useState, useEffect } from "react";
import "../styles/Container.css";
import { Menu, Switch, message, Badge, Dropdown, Avatar } from "antd";
import {
  AppstoreOutlined,
  OrderedListOutlined,
  ShoppingOutlined,
  PlusOutlined,
  LikeOutlined,
  UserOutlined,
  DownOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { BoxProduitTableView, BoxProduitCardView, BoxFilter } from "../pages";
import "../styles/boostrap.css";
import Menus from "./Menus";
import Drawers from "./Drawers";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Container = (props) => {
  // const {Footer } = div;
  // const [hTheme, setHTheme] = useState({background:"#293b8e",color:"white"});

  const [panierPartager, setPanierPartager] = useState([]);
  const [count, setCount] = useState(0);
  const [isMessage, setIsMessage] = useState(false);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const [showLayout, setShowLayout] = useState(false);

  // const changeTheme = (value) => {
  //   setHTheme(value ? {background:"#030b0e",color:"white"} : {background:"#293b8e",color:"white"});
  // };

  const showLargeDrawer = () => {
    setSize("large");
    setVisible(true);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="#">
          <UserOutlined /> Mon profil
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/parametre">
          <SettingOutlined /> Parametre
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="#">
          <PoweroffOutlined /> Se déconnecter
        </Link>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const url = window.location.pathname;
    {
      url != "/" && setShowLayout(true);
    }
  }, []);

  return (
    <div>
      {showLayout ? (
        <div>
          <div className="d-flex flex-wrap pl-0 pr-0" style={{ width: "100%" }}>
            <nav
              className="col-md-12 mb-2 d-flex justify-content-between"
              style={{
                fontSize: "18px",
                backgroundColor: "#293b8e",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontWeight: "600",
                }}
                className="col-md-2"
              >
                <span style={{ letterSpacing: "2px" }}>
                  Facturation Classic
                </span>
              </div>
              {/* ------------  Profile ------------------- */}
              <div className="d-flex justify-contente-end align-items-center pt-2 pb-2">
                <div>
                  <Avatar size={40} icon={<UserOutlined />} />
                </div>
                <div className="ml-2 mr-2">irie thierry</div>
                <div className="mr-3">
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </nav>
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Badge count={count}>
                <Link to="/Commande">
                  {" "}
                  <ShoppingOutlined
                    style={{ fontSize: "36px", color: "orange" }}
                  />
                </Link>
              </Badge>
            </div>

            {/*-------------------- */}

            <div style={{ paddingLeft: "1rem" }} className="d-flex flex-wrap">
              <div
                className="mb-4 col-md-12 p-0"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ textDecoration: "none", width: "8%" }}
                  className="p-0"
                >
                  <img src={logo} style={{ width: "100%" }} />
                </div>
                <div
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/produit"
                    style={{ textDecoration: "none", width: "30%" }}
                    className="p-0"
                  >
                    <div
                      style={{
                        height: "70px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "#293b8e",
                        color: "white",
                      }}
                    >
                      <UnorderedListOutlined
                        style={{ fontSize: "36px", marginRight: "10px" }}
                      />{" "}
                      <h5>Liste des Produits</h5>
                    </div>
                  </Link>

                  <Link
                    to="/meilleurProduit"
                    style={{ textDecoration: "none", width: "30%" }}
                    className="p-0"
                  >
                    <div
                      style={{
                        height: "70px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "#293b8e",
                        color: "white",
                      }}
                    >
                      <LikeOutlined
                        style={{ fontSize: "36px", marginRight: "10px" }}
                      />
                      <h5>Meilleurs Produits</h5>
                    </div>
                  </Link>

                  <Link
                    to="/noveauProduit"
                    style={{ textDecoration: "none", width: "30%" }}
                    className="p-0"
                  >
                    <div
                      style={{
                        height: "70px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "#293b8e",
                        color: "white",
                      }}
                    >
                      <PlusOutlined
                        style={{ fontSize: "36px", marginRight: "10px" }}
                      />
                      <h5>Nouveaux Produits</h5>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "12%" }}>
                  <div>
                    <Menus Themes={"#293b8e"} />
                  </div>
                  <div>
                    <BoxFilter />
                  </div>
                </div>
                <div style={{ minHeight: "1050px", width: "85%" }}>
                  {props.children}
                </div>
              </div>

              {/*------------ Affichage ------------*/}
            </div>
          </div>

          <footer
            style={{
              width: "100%",
              height: "50px",
              position: "relative",
              bottom: "0",
              backgroundColor: "#293b8e",
              color: "white",
              textAlign: "center",
            }}
          >
            Copyright © 2019 | GeoCRM Prosuma Côte d'Ivoire
          </footer>
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default Container;
