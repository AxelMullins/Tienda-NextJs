import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { convertToPath } from "../lib/utils";

const Products = ({ item, showAs }) => {
  if (showAs === "Page") {
    return (
      <Row
        style={{
          boxShadow: "0 0 50px rgba(0,0,0,0.15)",
          background: "white",
          borderRadious: 8,
          marginTop: 40,
        }}
      >
        <Col xs={12} md={6}>
          <div
            style={{
              background: `url("${item.imgUrl}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            //   height: 300,
              height: "100%",
            }}
          ></div>
        </Col>
        <Col xs={12} md={6} className="p-5">
          <h3>{item.title}</h3>
          <h4>$ {item.price}</h4>
          <h6>Información del producto</h6>
          <ul>
            {item.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button className="btn btn-success text-white">Agregar al carrito</Button>
        </Col>
      </Row>
    );
  }
  if (showAs === "ListItem") {
    return <div>ListItem Products</div>;
  }
  return (
    <Col xs={6} md={4}>
      <Link href={`/store/${convertToPath(item.title)}`}>
        <a>
          <div
            style={{
              borderRadius: 8,
              height: "100%",
              padding: 10,
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <div
              style={{
                background: `url("${item.imgUrl}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 200,
              }}
            ></div>
            <hr />
            <h3>{item.title}</h3>
            <h4>$ {item.price}</h4>
          </div>
        </a>
      </Link>
    </Col>
  );
};

export default Products;
