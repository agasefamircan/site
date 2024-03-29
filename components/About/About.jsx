import Image from "next/image";
import React from "react";
import style from "./About.module.css";
import profilPic from "../../img/im.jpg";
import Head from "../Head/Head";
const About = ({pt}) => {
  return (
    <div className={style.about} style={{ paddingTop: pt ? `${pt}` : "0px" }}>
      <Head title="About Me" />
      <div className={style.about_main}>
        <Image
          src={profilPic}
          className={style.profileImg}
          alt="Software Engineer"
          height={400}
          width={400}
          layout="responsive"
        />
        <div className={style.text}>
          <h2>Hi, I&apos;m Agasef</h2>
          <p>
            Hi. I&apos;m 20 and currently student. I&apos;m open to new innovations and
            love learning new technologies. Highly motivated Front End Developer
            with experience in HTML/CSS,JavaScript, React. Adept at contributing
            to a highly collaborative work environment, finding solutions, and
            determining customer satisfaction.
          </p>
          <p className={style.skill}>Among my areas of expertise are:</p>
          <ul>
            <li>Javascript/TypeScript</li>
            <li>React Js/Redux</li>
            <li>Next.js</li>
            <li>Node.js/Express.js</li>
            <li>HTML</li>
            <li>CSS/SCSS/SASS</li>
            <li>Material Design/Ant Design</li>
            <li>TailwindCss</li>
            <li>Styled-Components</li>
            <li>Bootstrap</li>
            <li>Git/GitHub</li>
            <li>Experience with Figma ,Jira</li>
            <li>Core Java/Sql</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
