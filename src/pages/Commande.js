import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteToCart } from "../store/actions/cart";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { CustomListButton } from '../componentes'

const Commande = () => {


  const commande = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(commande.length);

  const delete_Product_to_Cart = (product) => {
    const product_Delete = commande.filter((x) => x.id === product.id)[0];
    const new_List_Product = commande.filter((x) => x.id !== product.id);
    dispatch(DeleteToCart(product_Delete));
    console.log(new_List_Product);
  };

  const openNotification = (text) => {
    notification.open({
      message: "Suppression de",
      description: `${text} du Panier`,
      icon: <SmileOutlined style={{ color: "red" }} />,
    });
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1> Mes commandes </h1>
        </div>
        {commande.length > 0 ? (
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {commande.map((item) => (
                    item.quantiteProduit = 1,
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td> <CustomListButton quantite = {item.quantiteProduit}/></td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        type="button"
                        title="Supprimer"
                        style={{
                          border: "none",
                          background: "none",
                          outline: "none",
                          fontSize:"20px"
                        }}
                        onClick={() => dispatch(delete_Product_to_Cart(item))}
                      >
                        <DeleteOutlined
                          style={{ color: "red" }}
                          onClick={() => openNotification(item.name)}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="card-body">
            <h3>Votre panier est vide</h3>
          </div>
        )}
        <div className="card-footer">
          <h5>Valeur de la commande</h5>
        </div>
      </div>
    </div>
  );
};

export default Commande;
