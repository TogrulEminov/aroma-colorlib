import React from 'react'
import "./_BestCard.scss"
import product1 from "../../../Media/product1.png"
import product2 from "../../../Media/product2.png"
import product3 from "../../../Media/products.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const BestCard = () => {
    return (
        <div className='bestCard'>
            <Swiper
                slidesPerView={3}
                // spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>  
                    <div className="col-3 card">
                    <div className='cardImage'>
                        <img src={product1} alt="product1" />
                    </div>
                    <h3>Decor</h3>
                    <h2>Room Flash Light</h2>
                    <span>$150.00</span>
                </div>
                </SwiperSlide>
                <SwiperSlide>  
                    <div className="col-3 card">
                    <div className='cardImage'>
                        <img src={product1} alt="product1" />
                    </div>
                    <h3>Decor</h3>
                    <h2>Room Flash Light</h2>
                    <span>$150.00</span>
                </div>
                </SwiperSlide>
                <SwiperSlide>  
                    <div className="col-3 card">
                    <div className='cardImage'>
                        <img src={product2} alt="product1" />
                    </div>
                    <h3>Decor</h3>
                    <h2>Room Flash Light</h2>
                    <span>$150.00</span>
                </div>
                </SwiperSlide>
                <SwiperSlide>  
                    <div className="col-3 card">
                    <div className='cardImage'>
                        <img src={product3} alt="product1" />
                    </div>
                    <h3>Decor</h3>
                    <h2>Room Flash Light</h2>
                    <span>$150.00</span>
                </div>
                </SwiperSlide>
                <SwiperSlide>  
                    <div className="col-3 card">
                    <div className='cardImage'>
                        <img src={product1} alt="product1" />
                    </div>
                    <h3>Decor</h3>
                    <h2>Room Flash Light</h2>
                    <span>$150.00</span>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default BestCard
