import React from "react";
import Left from "../asset/left-img.png";
import Right from "../asset/right-img.png";

export default function FooterComponent() {
  return (
    <footer className='page-footer grey lighten-2'>
      <div className='row'>
        <h3 className='center title black-text'>
          Libr<u>o</u> <i className='i-line'>Coleccion.</i>
        </h3>
        <p className='para center black-text'>
          There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration in some form, by
          injected humour. but the majority have suffered alteration in some
          form.
        </p>
        <h6 className='font center black-text'>
          <b>Drop Your Information Bellow</b>
        </h6>

        <div className='col m4 s12'>
          <img className='responsive-img' src={Left} alt='bg' />
        </div>

        <div className='col m4 s12'>
          <div className='card'>
            <div className='card-content'>
              <div className='input-field one'>
                <i className='material-icons prefix teal-text text-accent-3'>
                  account_circle
                </i>
                <input id='user_name' type='text' className='validate' />
                <label htmlFor='user_name'>Username</label>
              </div>
              <div className='input-field'>
                <i className='material-icons prefix teal-text text-accent-3'>
                  mail
                </i>
                <input id='last_name' type='text' className='validate' />
                <label htmlFor='last_name'>Email ID</label>
              </div>
            </div>
            <div className='card-action'>
              <a
                href='#subscribe'
                className='btn btn-header white-text text-darken-4 teal accent-3'
              >
                {" "}
                Subscribe To Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className='col m4 s12'>
          <img className='responsive-img' src={Right} alt='bg' />
        </div>
      </div>
      <div className='footer-copyright purple darken-4'>
        <div className='container'>
          © <b className='font'>2020 LIBRO</b>
          <a className='grey-text text-lighten-4 right' href='#!'>
            <b>_THEMUKHERJEE</b>
          </a>
        </div>
      </div>
    </footer>
  );
}
