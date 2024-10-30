import React from 'react'
import './Review.css'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Review = () => {

  const reviewData = [
    {
      // avatar: require('../../assets/avatar1.jpg'),
      // name: 'Bill gates',
      // review: `It's rare that you come across standout talent like Vipul Nayak. 
      // I had the pleasure of working with Vipul Nayak for three years at Microsoft, 
      // collaborating on several project teams .
      // I'm was always in awe of Vipul's ability to command a room and always so passionate with his work. Vipul would be an asset to any team.`
    },
    {
      avatar: require('../../assets/avatar2.jpg'),
      name: "John prescott",
      review: `It was such a pleasure to take a few classes with vipul. He was always accommodating, kind, and motivated. We worked on some projects together, and he is very applied and aims for high-quality work.
      He is creative, smart, has excellent communication skills, and is willing to help when you need it. He is the kind of person who does anything for the group’s benefit. A great colleague!`
    }
  ]




  return (
    <section id='review'>
        <h5  data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='700'>Feedback from colleagues and clients</h5>
        <h2 data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='900'>Reviews</h2>

        <Swiper 
              // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container reviews__container" data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='1800'>
          {
            reviewData.map(({avatar, name,review }, index) => (
              <SwiperSlide className="review" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            ))
          }
        </Swiper>
    </section >
  )
}

export default Review