import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Img1 from '../images/banner/1.jpg';
import Img2 from '../images/banner/2.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperBox = styled.div`
  #App {
    height: 100%;
  }
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .img1 {
    width-min: 250px;
  }
`


const Banner = () => {
  return (
    <SwiperBox>
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>  <img src={Img1} className="img1" alt="이미지" /></SwiperSlide>
        <SwiperSlide> <img src={Img2} className="img1" alt="이미지" /></SwiperSlide>
        <SwiperSlide> <img src={Img1} className="img1" alt="이미지" /></SwiperSlide>
      </Swiper>
    </div>
    </SwiperBox>
  );
};
export default Banner;