import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Filters, ProductList, PageHero, UserTable } from '../components';
import { database } from '../utils/FirebaseData';
import { ref, onValue } from 'firebase/database';

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const databaseRef = ref(database);
    onValue(databaseRef, snapshot => {
      setData(snapshot.val());
      setLoading(true);
    });
  }, []);
  return (
    <Wrapper>
      <PageHero title='dashboard' />
      <UserTable data={data} loading={loading} />
    </Wrapper>
  );
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
