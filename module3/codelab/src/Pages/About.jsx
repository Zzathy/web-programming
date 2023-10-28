import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const About = () => {
  const page = "about";
  const title = "About Us";
  const description = "Centre of excellent perkembangan teknologi informasi";
  return (
    <>
      <NavBar />
      <Hero page={page} title={title} description={description} />
      <div className="container mt-5">
        <h3>Welcome to "Lab Informatika UMM"</h3>
        <p className="text-secondary">
          Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran
          praktis dan eksperimental yang dipergunakan oleh mahasiswa dan
          pelayanan untuk riset dan konsultasi keteknikan mencakup desain
          sofware untuk animasi, administrasi, grafis dll.
        </p>
        <h4>a. Laboratorium Rekayasa Perangkat Lunak</h4>
        <p className="text-secondary">
          Melakukan analisa kelayakan pembuatan, penerapan proyek perangkat
          lunak, analisa kebutuhan, perancangan, pembuatan dan penjaminan
          kualitas perangkat lunak serta melakukan rekayasa ulang perangkat
          lunak.
        </p>
        <h4>b. Laboratorium Sistem dan Keamanan Jaringan</h4>
        <p className="text-secondary">
          Menganalisis permasalahan, memberikan solusi berupa perekayasaan,
          pembuatan dan pengelolaan, serta melakukan evaluasi pada sistem
          jaringan.
        </p>
        <h4>c. Laboratorium Game Cerdas</h4>
        <p className="text-secondary">
          c. Laboratorium Game CerdasBekerja dengan tim mengembangkan dan
          merancang video game. Mengkoordinasikan tugas kompleks menciptakan
          video game baru yang memiliki tugas seperti merancang karakter, level,
          teka-teki, art dan animasi. Software Engineer, Programmer, atau
          Computer Scientist yang terutama mengembangkan basis kode untuk video
          game atau perangkat lunak terkait, seperti alat-alat pengembangan
          game.
        </p>
        <h4>d. Laboratorium Sains Data</h4>
        <p className="text-secondary">
          Menganalisis dan mengolah data menjadi suatu informasi dan
          pengetahuan.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
