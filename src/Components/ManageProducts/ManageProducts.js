import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://polar-savannah-87812.herokuapp.com/productMange')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    const deleteProduct = id => {
        console.log('delete', id)
    
        fetch(`https://polar-savannah-87812.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'accept' : 'application/json', 
                'Content-Type' : 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log('delete success')
            })
    }

    return (
        <div className="container mt-5 mb-5">
            <table>
                <tr className="tr">
                    <th>Product Name</th>
                    {/* <th>Wight</th> */}
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </table><br />

            {
                product.map(product =>
                    <table className="">
                        <tr className="border">
                            <th>{product.name}</th>
                            {/* <th>{product.wight}</th> */}
                            <th>{product.price}</th>
                            <th>
                                <button style={{ width: '20%' }} className="btn btn-success"><img style={{ width: '90%' }} src="https://cdn0.iconfinder.com/data/icons/glyphpack/19/edit-512.png" />Edite</button>

                                <button style={{ width: '20%' }} onClick={() => deleteProduct(product._id)} className="btn btn-danger"><img style={{ width: '100%' }} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png" />delete</button>
                            </th>
                        </tr>
                    </table>
                )
            }



        </div>
    );
};

export default ManageProducts;