import Head from "next/head";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title ? `Tienda | ${title}` : "Tienda"}</title>
        <meta
          name="description"
          content={description ? `${description}` : "My Store description"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
