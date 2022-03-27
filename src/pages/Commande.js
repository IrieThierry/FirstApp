import React from 'react';
import { useSelector } from 'react-redux';


const Commande = () => {

    const commande = useSelector(state => state.cart.cart);


    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    <h1> Mes commandes </h1>
                </div>
           {
               (commande.length > 0) ? (
                     <div className='card-body'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Produit</th>
                                        <th>Quantité</th>
                                        <th>Prix</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {commande.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                ) : (
                    <div className='card-body'>
                        <h3>Votre panier est vide</h3>
                    </div>
                )
                
           }
                <div className='card-footer'>
                    <h5>Valeur de la commande</h5>
                </div>
            </div>
        </div>
    );
};

export default Commande;