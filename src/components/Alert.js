// import React, { useState } from 'react';
import React from 'react'


function Alert(props){
    // const capitalize = (word) => {
    //     let lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase + lower.slice(1);
    // };
    
      return (
        props.alerT && (
          <div
            className={`alert alert-$(props.alerT.typ)  alert-dismissiable fade show`}
            role="alert"
            style={{
              backgroundColor: "lightcoral",
              fontWeight: "larger",
              position: "fixed",
              top: "70px",
              width: 'calc(100% - 8px)',
            }}
          >
            <strong>{props.alerT.typ}</strong>
            {props.alerT.msg}
            <button
              style={{
                position: "fixed",
                top: "76px",
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



























