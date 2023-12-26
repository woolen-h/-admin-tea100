import React, { useEffect, useState } from 'react';
import { Container, Stack, Table } from 'react-bootstrap';
import data from './data/productData.json';
import axios from "axios";
import Paging from './Paging';

function ProductBoard(props) {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    const [indexOfLastPost, setIndexOfLastPost] = useState(0);
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
    const [currentPosts, setCurrentPosts] = useState(0);

    useEffect(() => {
        axios
          .get("./data/productData.json")
          .then((res) => {
            setProducts(res.data);
          })
          .catch((error) => {
            console.log("error", error);
          });
        setCount(products.length);
        setIndexOfLastPost(currentPage * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
        setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
      }, [currentPage, indexOfLastPost, indexOfFirstPost, products, postPerPage]);
     
      const setPage = (error) => {
        setCurrentPage(error);
      };
    
    return (
        <>
        <Container className='product_board_container container_board'>
            <Stack className="my-2 py-4 px-1" gap={3}>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>상품명</th>
                            <th>브랜드</th>
                            <th>분류</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            data.products.map(( data ) => {
                                return (
                                <tr>
                                    <td>{ data.prod_num }</td>
                                    <td>{ data.prod_name }</td>
                                    <td>{ data.prod_brand }</td>
                                    <td>{ data.prod_category }</td>
                                </tr>        
                                );
                            })
                        }
                    </tbody>
                </Table>
                <Paging page={currentPage} count={count} setPage={setPage} />
            </Stack>
        </Container>
        </>
    );
}

export default ProductBoard;