import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import "./_Add.scss"
import { addFormValidation } from '../../Schema/AddValidation';
import { useContext } from 'react';
import { mainContext } from '../../Context/Context';
const Add = () => {
  const { changeInput, state, postData } = useContext(mainContext)
  const { register,
    handleSubmit,
    formState: { errors } } = useForm({
      resolver: yupResolver(addFormValidation),
    });
  const onSubmit = (data) => {
    postData()
  }
  return (
    <div className='addSection'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 addForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputForm">
                <div>Name</div>
                <input type="text" name='name' {...register("name")} placeholder='Product Name' onChange={changeInput} value={state.name} />
                {errors.name && <p>This name is required</p>}
              </div>
              <div className="inputForm">
                <div>Product Price</div>
                <input type="number" name='price' placeholder='Product Price' {...register("price")} onChange={changeInput} value={state.price} />
                {errors.price && <p>This price is required</p>}
              </div>
              <div className="inputForm">
                <div>Product Mark</div>
                <input type="text" name='markName' placeholder='Product Name' {...register("markName")} onChange={changeInput} value={state.markName} />
                {errors.markName && <p>This mark name is required</p>}
              </div>
              <div className="inputForm">
                <div>Product Image</div>
                <input type="url" name='url' placeholder='Product Name' {...register("url")} onChange={changeInput} value={state.url} />
                {errors.url && <p>This product url  is required</p>}
              </div>
              <div className='addButton'>
                <button>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add