import React from 'react'
import './footer.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io"

const Footer = () => {
  return (
    <div className="footer container-fluid p-5">
      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-uppercase text-light">keep in touch</p>
            <h3 className="text-light">Travel with us</h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <input
                type="email"
                class="form-control inputEmail"
                id="floatingInput"
                placeholder="Your email"
              />
              <button type="button" class="btn send">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card pt-3">
        <div class="card-body">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h6 className="text-dark fw-bold">
                <MdOutlineTravelExplore className="icone" />
                Travel.
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                est tenetur beatae doloremque itaque cupiditate labore sunt
                omnis accusamus perferendis. Deserunt consequatur expedita
                illum, ipsa veniam porro reprehenderit commodi voluptas.
              </p>
              <ul className="d-flex gap-2 list-unstyled">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <h6 className="text-secondary text-uppercase">our agency</h6>
                  <ul className="gap-2 list-unstyled">
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <h6 className="text-secondary text-uppercase">our agency</h6>
                  <ul className="gap-2 list-unstyled">
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <h6 className="text-secondary text-uppercase">our agency</h6>
                  <ul className="gap-2 list-unstyled">
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                    <li>
                      <IoIosArrowForward /> Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer pt-3 text-light">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className='text-uppercase'>best travel website</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className='text-uppercase'>copyright reserved - princetoutcouleur 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
