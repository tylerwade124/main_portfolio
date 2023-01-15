import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Loader
        type="Triangle"
        color="#343e47"
        height={300} 
        width={400} 
      />
    </div>
  );
}

export default Preloader;
