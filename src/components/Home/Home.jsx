import React from 'react'
import './home.css'
import Button from "react-bootstrap/Button";
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home container-fluid vh-100 mt-5 d-flex justify-content-center align-items-center">
      <div className="w-100 container">
        <p className="text-uppercase text-light">our packages</p>
        <h1 className="text-light">
          Search your{" "}
          <span className=" border-bottom border-info border-3">Holiday</span>
        </h1>
        <div class="card bg-light mt-5 p-3 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="mb-3">
                  <label for="cityInput" class="form-label">
                    Search your destination
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cityInput"
                    placeholder="New York"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="mb-3">
                  <label for="dateInput" class="form-label">
                    Select your date :
                  </label>
                  <input type="date" class="form-control" id="dateInput" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="mb-3">
                  <label for="priceInput" class="form-label mb-4">
                    Max price :
                  </label>
                  <input type="range" class="form-control" id="priceInput" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="bouton">MORE FILTERS</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="icons text-light d-flex justify-content-between">
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
          <ul className="d-flex gap-2 list-unstyled">
            <li>
              <CgMenuGridR />
            </li>
            <li>
              <AiOutlinePlusSquare />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Home
