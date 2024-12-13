'use client'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { Swiper as SwiperComponent } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

const data = [
    { id: '1', image: '/assets/image2.jpg' },
    { id: '2', image: '/assets/image3.jpg' },
    { id: '3', image: '/assets/image4.jpg' }
]

export function SliderImages() {
    return (
        <div className='flex justify-center items-center max-sm:-ml-4'>
            <SwiperComponent
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 3500 }}
                spaceBetween={50}
                loop={true}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className='h-full w-full'>
                        <Image
                            src={item.image}
                            alt="Gabrielly Capelini"
                            width={350}
                            height={350}
                            className="rounded-full shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    )
}