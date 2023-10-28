import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Contact = () => {
  const page = "contact";
  const title = "Contact Us";
  const description = "Ada keluhan? Hubungi kami";
  return (
    <>
      <NavBar />
      <Hero page={page} title={title} description={description} />
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex">
            <div className="row">
              <h4>Get in touch</h4>
              <h5 className="text-success mt-2">
                SMS/WA/Telegram (Quick Response):
              </h5>
              <span className="text-secondary mt-2">+62 896-896-01317</span>
              <span className="text-success">wa.me/6289689601317</span>
            </div>
          </div>
          <div className="col d-flex">
            <div className="row">
              <h4>The Office</h4>
              <span className="text-secondary mt-2">
                <b>Address: </b>
                Jl. Raya Tlogomas No.246,Jawa Timur 65144, Indonesia
              </span>
              <span className="text-secondary">
                <b>Phone: </b>
                (0341) 464318, ext 252
              </span>
              <span className="text-secondary">
                <b>Email: </b>
                <span className="text-success">lab.informatika@umm.ac.id</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
