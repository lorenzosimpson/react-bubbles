import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

    useEffect(() => {
      axiosWithAuth()
      .get(`/api/colors`)
      .then(res => {
        console.log(res)
        setColorList(res.data)
      })
      .catch(err => console.log(err))
    }, [])

  return (
    <>
      {
        !colorList.length ? (
          <div className='loader'>
          <p>Loading...</p>
          <Loader type="TailSpin" color="black" height={40} width={40} />
          </div>
        ) : (
          <>
          <ColorList colors={colorList} updateColors={setColorList} />
          <Bubbles colors={colorList} />
          </>
        )
      }
    </>
  );
};

export default BubblePage;
