import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/layout";
import Products from "../../components/Products";
import { getItems, getLatestItems } from "../../services/itemService";

const index = ({ items, latestItems }) => {
  return (
    <Layout title="Tienda" description="Primeros pasos con Next Js - Tienda">
      <h1 className="mt-4">Tienda</h1>
      <Row className="g-3 my-3">
      {items &&
          items.map((item) => (
            <Products key={item.id} item={item} showAs="item" />
          ))}
      </Row>
      <br />
      <hr />
      <br />
      <h2>Latest Items</h2>
      <Row className="g-3 mt-3 mb-5">
        {items &&
          latestItems.map((item) => <Products key={item.id} item={item} />)}
      </Row>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await getItems();
  const resLatest = await getLatestItems();
  return {
    props: {
      items: res,
      latestItems: resLatest,
    },
  };
};
export default index;
