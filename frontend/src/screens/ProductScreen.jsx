import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import { Link } from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating';
import { useNavigate } from 'react-router-dom'

const ProductScreen = () => {
 const navigate = useNavigate()
 const {id: productId} = useParams();
 const product = products.find((product) => product._id === productId)
 console.log(product)
  return (
    <>
    <button onClick={() => navigate(-1)} className='btn btn-light my-3'> 
        Go Back
    </button>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price : ${product.price} 
                </ListGroup.Item>
                 <ListGroup.Item>
                    {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price: </Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status: </Col>
                            <Col>
                            <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Button 
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                    >
                    Add To Cart
                    </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    {/* <Card>
        <Card.Title>
            {product.name}
        </Card.Title>
        <Card.Img src={product.image} />
    </Card> */}
    </>
  )
}

export default ProductScreen