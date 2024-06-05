import React, { SyntheticEvent, useState } from 'react'
import Wrapper from './Wrapper'
import { Navigate } from 'react-router-dom'

export const ProductCreate = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const[navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();

        await fetch('http://127.0.0.1:8002/api/products', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({ 
                title,
                image
            })
        });

        setNavigate(true);
    }

    if(navigate){
        return <Navigate to= {'/admin/products'}/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' name='title'
                        onChange={e => setTitle(e.target.value)}
                    ></input>

                </div>
                <div className='form-group'>
                    <label>Image Link</label>
                    <input type='text' className='form-control' name='image'
                        onChange={e => setImage(e.target.value)}
                    ></input>

                </div>

                <button className='btn btn-outline-secondary' style={{ marginTop: '20px' }}>Save Data</button>

            </form>
        </Wrapper>
    )
}
