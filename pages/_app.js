import Layout from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Modal isOpen title={"Test Modal"} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
