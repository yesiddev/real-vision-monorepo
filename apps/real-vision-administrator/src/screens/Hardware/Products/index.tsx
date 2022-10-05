import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const {data} = await axios.get('https://real-vision-api.herokuapp.com/products')
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])
  return (
    <div>
      <table className={styles.table}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Wattage</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products?.map((product:any) => (
                <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.wattage}W</td>
                <td>{product.createdAt.substring(0,10)}</td>
                <td>{product.status.toString()}</td>
                <td><button><i className='bx bx-dots-vertical-rounded'></i></button></td>
            </tr>
            ))}
            
        </tbody>
      </table>
    </div>
  )
}

export default Products
