"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "../styles/globals.css";

const bannerImages = [
  {
    src: "https://images.tokopedia.net/img/WMkIgA/2021/8/30/e5098ab8-2d2c-45e7-8b76-2006d86ae8cb.jpg",
    alt: "Banner 1",
  },
  {
    src: "https://images.tokopedia.net/img/WMkIgA/2023/6/19/1ba6d2ed-9ee0-4562-9db6-7ed3f8f1a901.jpg",
    alt: "Banner 2",
  },
  {
    src: "https://images.tokopedia.net/img/WMkIgA/2023/7/31/af209cc6-057d-423c-89b1-d40efc25017a.jpg",
    alt: "Banner 3",
  },
];

export default function Banner() {
  return (
    <div className="mt-8 relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="rounded-lg"
      >
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1200}
              height={400}
              className="rounded-lg w-full"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
