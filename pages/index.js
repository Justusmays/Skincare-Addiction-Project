import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";



import { Navbar } from "../components/homepage/navbar";
import { Carousell } from "../components/homepage/carousel";
import { Section1 } from "../components/homepage/section-1";
import { Section2 } from "../components/homepage/section-2";
import { Section3 } from "../components/homepage/section-3";
import { Footer } from "../components/homepage/footer";
import Head from "next/head";

export default () => (
  <div className="App">
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <Carousell />
    <Section1 />
    
    <Section2 />
  
    <Section3 />
    <Footer />
   
  </div>
);
