import { useState } from "react";
import { bannerList } from "../moData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import cssStyle from '../css/movie.module.css';
import BannerCard from '../components/BannerCrad';
export default function MainSilde(){
    let [blist] = useState(bannerList);
    return(
        <Swiper pagination={true} modules={[Pagination]} className={cssStyle.moive}>
          {
            blist.map((item) => {
              return(
                <SwiperSlide key={item.id}>
                  <BannerCard item={item}/>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    )
}