import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import { Loading } from "@/components/Loading/Loading";
export default function Home({ projects }) {
  const [loading, setLoading] = useState(1);

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Portfolio | Agasef</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <main className="main">
          <Navbar />
          <Header />
          <About />
          <Projects projects={projects} />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
export async function getStaticProps() {
  const res = {
    message: [
      {
        _id: "1",
        title: "JobMaster -Job circular app",
        detail:
          "JobMaster is a job circular web application. It's only for the frontend design with fully responsive. People can find jobs from here by category and can hire a person for their personal and business needed. People can apply for a job. There is also a blog posts section. Users can get an idea of what other users got hired and their job experience by reading this article. People can hire a person on this website by visiting their profile. In the candidate profile, you can see their work experience and their skills. There is the process how to hire the candidate.",
        images: [
          "https://res.cloudinary.com/dfou0tzco/image/upload/v1675411227/jobmaster_srckz5.jpg",
        ],
        features: [
          "Fully responsive webpages.",
          "Filter and Search functionality",
        ],
        tools: ["Javascript", "NextJS", "ReactJS", "SASS", "CSS3"],
        liveLink: "https://jobmasternext.vercel.app/",
        githubLink: "https://github.com/agasefamircan/jobmaster",
        left: true,
        __v: 0,
      },
      {
        _id: "2",
        title: "MetaUI",
        detail:
          "MetaUI is a user interface platform that allows for seamless and intuitive interactions with digital devices. With MetaUI, businesses can improve the user experience by creating dynamic and interactive interfaces that are easy to navigate. Whether it's mobile applications, websites, or wearable devices, MetaUI provides the tools to create a modern and engaging user experience. Get started today with MetaUI and transform the way your users interact with technology.",
        images: [
          "https://res.cloudinary.com/dfou0tzco/image/upload/v1675620609/MetaUI_jl9rg2.jpg",
        ],
        features: [
          "User can Create / Read / Update / Delete their post.",
          "Authenticated user can update his profile(profile picture, username, email, password).",
          "Client side and server side validation.",
          "Context api for state management.",
          "Search Functionality.",
          "Image Upload with Cloudinary.",
        ],
        tools: ["React", "Javascript", "CSS", "SASS"],
        liveLink: "https://meta-ui-app.vercel.app/",
        githubLink: "https://github.com/agasefamircan",
        __v: 0,
        left: false,
      },
      {
        _id: "3",
        title: "Shopper App",
        detail:
          "Shopper app is a mobile application designed for customers to shop for products from different stores in one place. It allows users to browse, compare prices and purchase products from various retailers, all from the convenience of their mobile device. The app aims to make shopping more convenient for customers by eliminating the need to visit multiple websites or stores to find the best deal. It provides a platform for various retailers to showcase their products and reach a wider audience.",
        images: [
          "https://res.cloudinary.com/dfou0tzco/image/upload/v1675627777/shopper_jueued.jpg",
        ],
        features: [
          "Admin Dashboard.",
          "SSG & SSR using Next.js.",
          "Multistep Form.",
          "Context api for state management.",
          "Image Upload with Cloudinary.",
          "Image Slider.",
          "Filter by Min & Max price.",
          "Client-side and Server-side authentication.",
        ],
        tools: ["React Js", "Javascript", "Nodejs", "SwiperJs", "SASS", "SCSS"],
        liveLink: "https://shopper-react-app.netlify.app/",
        githubLink: "https://github.com/agasefamircan/shopper-react-app",
        __v: 0,
        left: true,
      },
      {
        _id: "4",
        title: "Tweet Generator",
        detail:
          "Tweet Generator is an innovative tool that helps you create compelling and shareable tweets in seconds. With its intuitive interface, you can craft attention-grabbing messages, add hashtags, and even include images and videos. Whether you're looking to promote your brand, share your thoughts, or simply have fun, Tweet Generator has you covered. Start generating impactful tweets today and grow your online presence!",
        images: [
          "https://res.cloudinary.com/dfou0tzco/image/upload/v1675620991/tweet_fagbs6.jpg",
        ],
        features: [
          "Content Management.",
          "User Authorization and management.",
          "Client-side validation & Image Upload.",
          "Security and Permissions",
          "Viewing Data and editing",
          "CRUD functionality or management.",
          "Dark & Light Mode",
        ],
        tools: ["React Js", "Javascript", "SASS"],
        liveLink: "https://tweetgenerator.vercel.app/",
        githubLink: "https://github.com/agasefamircan/faketweetgenerator",
        __v: 0,
        left: false,
      },
    ],
  };
  const projects = res.message;
  return {
    props: {
      projects: projects,
    },
  };
}
