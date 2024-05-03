// import React, { useState } from 'react';
import React from 'react'


function Alert(props){
    // const capitalize = (word) => {
    //     let lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase + lower.slice(1);
    // };
    
      return (
        // yaha layout shift hota h agar alert aati h to uske liye div bana kar height set kar denge jisse alert component ki khudki height hogi to layout shift nhi hoga. is shift ko cls:cumulative layout shift kahte h jo minimum hona chahiye website me[good for SEO+]
        props.alerT && (
          <div
            className={`alert alert-$(props.alerT.typ)  alert-dismissiable fade show`}
            role="alert"
            style={{
              backgroundColor: "lightcoral",
              fontWeight: "larger",
              position: "absolute",
              top: "65px",
              width: 'calc(100% - 8px)',
              height:'60px'
            }}
          >
            <strong>{props.alerT.typ}</strong>
            {props.alerT.msg}
            <button
              style={{
                position: "absolute",
                right: "5px",
                backgroundColor: "rgb(179, 154, 196)",
                color: "Black",
              }}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="close"
            ></button>
          </div>
        )
      );
}


export default Alert 



























