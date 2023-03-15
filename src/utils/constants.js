import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'members',
    url: '/members',
  },
  {
    id: 4,
    text: 'dashboard',
    url: '/dashboard',
  },
];

export const members = [
  {
    id: 1,
    name: 'Dang Khoa',
    job: 'software engineer',
    image:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate debitis impedit obcaecati, veritatis fugiat aperiam.',
  },
  {
    id: 2,
    name: 'Quoc Ky',
    job: 'software engineer',
    image:
      'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate debitis impedit obcaecati, veritatis fugiat aperiam.',
  },
  {
    id: 1,
    name: 'Thanh Duong',
    job: 'software engineer',
    image:
      'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate debitis impedit obcaecati, veritatis fugiat aperiam.',
  },
];

export const socials = [
  {
    id: 1,
    url: 'https://www.facebook.com/',
    icon: <BsFacebook />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com/',
    icon: <BsInstagram />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com/',
    icon: <BsTwitter />,
  },
  {
    id: 4,
    url: 'https://www.linkedin.com/',
    icon: <BsLinkedin />,
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
