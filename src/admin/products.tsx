import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Product } from '../interface/product';
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:8002/api/products');
            const data = await response.json();
            setProducts(data);
        })();
    }, []);

    const del = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete it?");
        
        if (confirmDelete) {
            console.log("Delete");
            try {
                const response = await fetch(`http://localhost:8002/api/products/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setProducts(products.filter((p: Product) => p.id !== id));
                } else {
                    console.error('Failed to delete the product');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <Wrapper>
            <div className= "pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/admin/products/create' className="btn btn-sm btn-outline-secondary">Add</Link>

                </div>
            </div>
            <div>
                <div className="table-responsive small">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Likes</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p: Product) => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} height='180' /></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                    <td>
                                        <div className="btn-group mr-2">
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => del(p.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    );
}

export default Products;
