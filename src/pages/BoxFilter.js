import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useState } from 'react';
import { ListeProduit } from '../donnees/ListeProduit';

const BoxFilter = () => {
    const [Liste, setListe] = useState([{nom:'irie',prenom:'thierry'}, {nom:'irie',prenom:'thierry'}])
    function onchange(e) {
        console.log(`checked = ${e.target.checked}` )
    }
    return (
        <div>
            <div style={{width:'100%', backgroundColor:'white'}} className='mt-3'>
              
                    <div>
                        <span style={{fontWeight:'700'}}>Familles</span>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>

                    </div>
                    <div className='mt-2'>
                        <span style={{fontWeight:'700'}}>Categories</span>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>

                    </div>
                    <div className='mt-2'>
                        <span style={{fontWeight:'700'}}>Marques</span>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>

                    </div>
                    <div className='mt-2'>
                        <span style={{fontWeight:'700'}}>Fournisseur</span>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>
                        <div className='ml-3'><Checkbox onChange={onchange}>Checkbox</Checkbox></div>

                    </div>


                
           
            </div>
        </div>
    );
};

export default BoxFilter;