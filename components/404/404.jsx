import Header from "next/head";
import Link from "next/link";
import styles from "./404.module.css";
const Custom404 = () => {
  return (
    <div className={styles.container}>
      <Header>
        <title>Page Not found</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <div className={styles.content}>
        {" "}
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <>
          Go back to the{" "}
          <Link href="/">
            {" "}
            <span className={styles.home}>home page</span>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Custom404;
