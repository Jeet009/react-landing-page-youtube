import React from "react";
import Detail from "../asset/details.png";

export default function DetailComponent() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <h2 className='font'>
              Connect Y<u>o</u>urself.
            </h2>
            <p className='para'>
              There are many variations of passages of Lorem Ipsum available,
              <br /> but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a
              href='https://play.google.com/'
              className='btn btn-header white-text text-darken-4 teal accent-3'
            >
              Download App
            </a>
          </div>
          <div className='col s12 m6'>
            <img className='responsive-img' src={Detail} />
          </div>
        </div>
      </div>
    </div>
  );
}
