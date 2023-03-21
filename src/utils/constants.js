import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import khoaProfile from '../assets/khoa_profile.jpg';
import kyProfile from '../assets/ky_profile.jpg';
import duongProfile from '../assets/duong_profile.jpg';
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
    image: 'https://live.staticflickr.com/65535/52762109700_7fa95a94a5_b.jpg',
    text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away. Embrace each moment and live fully.',
  },
  {
    id: 2,
    name: 'Quoc Ky',
    job: 'software engineer',
    image: 'https://live.staticflickr.com/65535/52761675061_281a00d110_b.jpg',
    text: 'Life is a precious journey, filled with ups and downs. The key is to embrace the ride and enjoy every twist and turn along the way.',
  },
  {
    id: 3,
    name: 'Thanh Duong',
    job: 'software engineer',
    image: 'https://live.staticflickr.com/65535/52761946364_e748eb7625_b.jpg',
    text: `Life is a canvas, and we are the artists. It's up to us to paint a beautiful picture with every stroke of the brush and create a masterpiece.`,
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
