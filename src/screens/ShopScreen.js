import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";

//actions
import { listProducts } from "../actions/productActions";
// import products from "../products";

//components
import Product from "../components/Product";

const ShopScreen = ({ match }) => {
  //   const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  console.log(productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Header shop />
      <Container>
        <Row className='align-items-center'>
          {products?.map((product) => (
            <Col md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShopScreen;
