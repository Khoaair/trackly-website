import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
import dbRef from '../utils/FirebaseData';

const ProductsPage = () => {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    dbRef.on('value', snapshot => {
      setData(snapshot.val());
    });
  }, []);
  return <h4>products page</h4>;
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
