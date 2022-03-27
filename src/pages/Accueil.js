import React, { useState, useEffect, useRef } from 'react';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './DataViewDemo.css';
import { Badge } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { setProducts } from '../store/actions/product';



const Accueil = () => {

    const dispatch = useDispatch();
    const produits = useSelector(state => state.produits.products);



    const [products, setProductss] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = useRef(12);
    const datasource = useRef(null);
    const isMounted = useRef(false);



    const [data, setData] = useState([
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5}
    ])  

    useEffect(() => {
        dispatch(setProducts(data));
    }, [data]);

    useEffect(() => {
        if (isMounted.current) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setTimeout(() => {
            isMounted.current = true;

            datasource.current = data;
            setTotalRecords(data.length);
            setProductss(datasource.current.slice(0, rows.current));
            setLoading(false);

          
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
            console.log(datasource)
            const newProducts = startIndex === endIndex ? datasource.slice(startIndex) : datasource.slice(startIndex, endIndex);

            setFirst(startIndex);
            setProducts(newProducts);
            setLoading(false);
        }, 1000);
    }

    const renderGridItem = (produits) => {
        return (
            
            <div className="col-4 md:col-4">
                <Badge.Ribbon text="Promo" color="volcano">
                <div className="product-grid-item card m-0">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{produits.category}</span>
                        </div>
                        <span className={`product-badge status-${produits.inventoryStatus.toLowerCase()}`}>{produits.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={`images/product/${produits.image}`} onError={(e) => e.target.src=''} alt={produits.name} />
                        <div className="product-name">{produits.name}</div>
                        <div className="product-description">{produits.description}</div>
                        <Rating value={produits.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${produits.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={produits.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </Badge.Ribbon>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

       if (layout === 'grid')
            return renderGridItem(product);
    }
    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products} layout={layout}
                        itemTemplate={itemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current}
                        totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
            </div>
        </div>
    );
};

export default Accueil;