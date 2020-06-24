import React from "react";
import One from "../asset/one.png";
import Two from "../asset/two.png";
import Three from "../asset/three.png";
import Four from "../asset/four.png";

export default function AboutComponent() {
  return (
    <div className='about hide-on-small-only'>
      <div className='row'>
        <h4 className='font'>
          <b>Now Connected.</b>
        </h4>
        <div className='col s12 m3'>
          <img className='responsive-img' src={One} alt='bg' width='150px' />
          <h5 className='font'>Experience</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Check up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Two} alt='bg' width='150px' />
          <h5 className='font'>Ability</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Level Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Three} alt='bg' width='150px' />
          <h5 className='font'>Access</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Rise Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Four} alt='bg' width='150px' />
          <h5 className='font'>Reward</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>Cash Up.</b>
          </h6>
        </div>
      </div>
    </div>
  );
}
