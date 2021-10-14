import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddEvents.css';

const AddEvents = () => {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null)

  const onSubmit = data => {
    console.log(data)
    const eventData = {
      name: data.name,
      price:data.price,
      imageUrl: imageUrl
     
    };
    const url = `http://localhost:5000/addEvent`;
    console.log(eventData)

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };


  const handelImgUpload = event => {
    console.log(event.target.files[0])

    const imgData = new FormData()
    imgData.set('key', '5c1ff4f91c14ad66771d66d3298e5026')
    imgData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imgData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="text-center mt-5 Event_area">
      <h1>Add Youre awsome here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
    
      <input placeholder="name" {...register("name", { required: true })} />
      <br></br>
      <br></br>
      <input placeholder="price" {...register("price", { required: true })} />
      <br></br>
      <br></br>
      <input type="file" onChange={handelImgUpload} />
      <br></br>
      <br></br>
      <input type="submit" className="btn btn-primary"/>
      </form>
    </div>
  );
};


export default AddEvents;