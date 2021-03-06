import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";


import { Navbar } from "../components/homepage/navbar";
import { Routine }  from "../components/secondpage/routine";
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
    <Routine />
    <Footer />
  </div>
);