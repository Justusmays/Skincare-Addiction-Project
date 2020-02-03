import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles2.css"


import { Navbar } from "../components/homepage/navbar";
import { Skintype }  from "../components/fifthpage/skintype";
import { Footer2 } from "../components/secondpage/footer2";
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
    <Skintype />
    <Footer2 />
  </div>
);