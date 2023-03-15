import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url, socials } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { members } from '../utils/constants';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  return (
    <Wrapper>
      <PageHero title='Members' />
      <div className='section section-center page'>
        <div className='title'>
          <h2>our team</h2>
          <div className='underline'></div>
        </div>
        <Link to='/' className='btn'>
          back to home
        </Link>
        <div className='member-container'>
          {members.map(member => {
            const { id, name, job, text, image } = member;
            return (
              <article key={id} className='member-background'>
                <img src={image} alt={name} className='member-photo' />
                <div className='info'>
                  <h4>{name}</h4>
                  <h5>{job}</h5>
                  <div className='underline'></div>
                  <p>{text}</p>
                </div>
                <div className='social'>
                  {socials.map(link => {
                    const { id, url, icon } = link;
                    return (
                      <ul key={id}>
                        <li>
                          <Link to={url} className='social-btn'>
                            {icon}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .section-member {
    text-align: center;
    margin-bottom: 20px;
  }
  .info {
    text-transform: capitalize;
    text-align: center;
    span {
      font-weight: 700;
    }
  }
  .info p,
  h4,
  h5 {
    color: var(-clr-primary-1);
  }
  .member-container {
    display: flex;
    flex-direction: columns;
    gap: 8px;
    margin-top: 20px;
  }
  .member-photo {
    width: 380px;
    height: 380px;
    object-fit: cover;
    border-radius: 50%;
  }
  .member-background {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    gap: 12px;
    // background-color: #eadad7;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .social-btn {
    color: var(--clr-primary-8);
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
