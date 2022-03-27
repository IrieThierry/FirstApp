import React, { useState } from "react";
import {
    AppstoreOutlined,
    OrderedListOutlined,
    ShoppingOutlined,
  } from "@ant-design/icons";

import {BoxProduitTableView, BoxProduitCardView} from '../pages'
const CardProduit = () => {
    const [mode, setMode] = useState(true);
    const [affichageIcon, setAffichageIcon] = useState(true);

    const changeTable = () => {
        setAffichageIcon(false);
        setMode(false);
      };
    
      const changeBox = () => {
        setAffichageIcon(true);
        setMode(true);
      };

      
    return (
        <div>
            <div className="card">

           
            <div className="card-body">
                <div style={{textAlign:'right'}}>
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
                </div>

           
            {mode ? (
            <BoxProduitTableView
            //   color={hTheme.color}
            //   colorTheme={hTheme.background}
            //   message={setIsMessage}
            //   nbreProduit={setCount}
            //   currentPanier={panierPartager}
            //   modifierPanier={setPanierPartager}
            />
          ) : (
            <BoxProduitCardView
            //   colorTheme={hTheme.background}
            //   message={setIsMessage}

            //   style={{ transition: "0.5s" }}
            //   nbreProduit={setCount}
            //   currentPanier={panierPartager}
            //   modifierPanier={setPanierPartager}
            />
          )}
            </div>
            </div>
        </div>
    );
};

export default CardProduit;