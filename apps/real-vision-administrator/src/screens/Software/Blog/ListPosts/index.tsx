import Loader from '@/components/Layout/Loader';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Button from '@/components/shared/Button';
import Field from '@/components/shared/Field';
import HeaderScreen from '@/components/shared/Header';
import Input from '@/components/shared/Input';
import { getPosts, getProducts } from '@/redux/states';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'

const SoftwarePosts = () => {

    const [search, setSearch] = useState('');

    const {loading, posts = []} = useSelector((state: any) => state.softwarePosts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts() as any);
    }, [])
    console.log(posts)

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
                <th>Title</th>
                <th>Category</th>
                <th>Views</th>
                <th>Publisher</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {posts?.filter((product: any) => product.title.toLowerCase().includes(search.toLowerCase())).map((product:any) => (
                <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.views}</td>
                <td>{product.username}</td>
                <td>{product.createdAt.substring(0,10)}</td>
                <td>{product.status.toString()}</td>
                <td><button><i className='bx bx-dots-vertical-rounded'></i></button></td>
            </tr>
            ))}
            
        </tbody>
      </table>
    </>
  )
}

export default SoftwarePosts
