import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="" description="Primeros pasos con Next Js">
      <h1 className="mt-4">Tienda de Padel</h1>
      <Row style={{ background: "white", borderRadius: 8, padding: 40 }}>
        <Col xs={12} md={6} className="p-2">
          <div
            style={{
              background: `url("http://localhost:3000/img/paletasDePadel.jpg")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: 300,
            }}
          ></div>
        </Col>
        <Col xs={12} md={6} className="p-5">
          <h3>Royal Padel</h3>
          <p>
            Royal Padel es una marca de RoyalSport Group, dedicada a dotar a los
            deportistas profesionales de un equipamiento apropiado para alcanzar
            el máximo rendimiento.
          </p>
          <Link href="/store">
            <a className="btn btn-success text-white">Ir a la tienda</a>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}
