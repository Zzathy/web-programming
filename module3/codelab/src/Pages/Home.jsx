import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Home = () => {
  const page = "home";
  const title = "Selamat Datang";
  const description = "di website Praktikum Pemrograman Website";
  return (
    <>
      <NavBar />
      <Hero page={page} title={title} description={description} />
      <Footer />
    </>
  );
};

export default Home;
