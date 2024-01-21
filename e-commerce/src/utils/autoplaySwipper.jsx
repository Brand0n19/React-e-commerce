// Import Swiper React components
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'react-bootstrap/Image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function AutoplaySwipper() {


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='flex justify-content-center align-items-center'>
          <Image className='swiper-image' src="../../src/assets/images/Loobook.png" fluid/>
        </SwiperSlide>
        <SwiperSlide className='flex justify-content-center align-items-center'>
          <Image  className='swiper-image' src="../../src/assets/images/7.jpg" fluid/>
        </SwiperSlide>
        <SwiperSlide className='flex justify-content-center align-items-center'>
          <Image className='swiper-image'  src="../../src/assets/images/8.jpg" fluid/>
        </SwiperSlide>
        <SwiperSlide className='flex justify-content-center align-items-center'>
          <Image className='swiper-image'  src="../../src/assets/images/9.jpg" fluid/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}