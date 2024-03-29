import Custom404 from "@/components/404/404";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Header from 'next/head';
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
        <Header>
            <title>Contact</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Header>
    <Navbar/>
      <Custom404/>
      <Footer/>
    </>
  );
};

export default PageNotFound;
