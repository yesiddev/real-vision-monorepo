import Loader from '@/components/Layout/Loader';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Button from '@/components/shared/Button';
import Field from '@/components/shared/Field';
import HeaderScreen from '@/components/shared/Header';
import Input from '@/components/shared/Input';
import { getProducts } from '@/redux/states';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'

const Products = () => {

    const [search, setSearch] = useState('');

    const {loading, products = []} = useSelector((state: any) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts() as any);
    }, [])

    console.log(loading);
    if(loading) return <Loader /> 

  return (
    <>
    <div className='screen'>
    <Breadcrumbs items={["Hardware", "Products"]} />
      <HeaderScreen title="Kanban Board">
        <Button className="primary">
          Create Product
        </Button>
      </HeaderScreen>
      <Field label='Search' tip='Search product by name'>
        <Input width='400px' value={search} onChange={(e:any) => setSearch(e.target.value)}  />
      </Field>
    </div>
   
    <div>
    
    </div>
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
            {products?.filter((product: any) => product.name.toLowerCase().includes(search.toLowerCase())).map((product:any) => (
                <tr key={product.uuid}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.wattage}W</td>
                <td>{product?.createdAt?.substring(0,10)}</td>
                <td>{product?.status?.toString()}</td>
                <td><button><i className='bx bx-dots-vertical-rounded'></i></button></td>
            </tr>
            ))}
            
        </tbody>
      </table>
    </>
  )
}

export default Products
