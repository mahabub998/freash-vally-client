import React from 'react';
import './PreLoader.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
// import {BounceLoader,BarLoader,BeatLoader} from "react-spinners"
import { useState, useEffect} from 'react';

const override = css`
  
  margin-top: 25px;
 margin-bottom: 25px;
`;

function PreLoader() {

  //   let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  // useEffect( () => {
  //   setLoading(true)
  //   setTimeout( () =>{
  //     setLoading(false)
  //   },8000)
  // },[])

  //   return (
  //       <div className="sweet-loading">
  //    {
  //      loading ?
  //     ( <ClipLoader color={'#F37A24'} loading={loading} css={override} size={100} />)

  //      :
  //      (
  //       ( <ClipLoader color={'#F37A24'} loading={loading} css={override} size={100} />)
  //      )
  //    }

     
      const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      const timing = setTimeout(() => {
          setLoading(false);
      }, 3000);

      return () => clearTimeout(timing);
  }, []);

  if (loading) {
      return (
        <div className="spinner-border Spinner_align text-align-center" role="status ">
        <span class="visually-hidden">Loading...</span>
      </div>
      );
  }

      
  
}

export default PreLoader
