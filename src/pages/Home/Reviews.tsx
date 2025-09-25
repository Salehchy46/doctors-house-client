// @ts-expect-error
import "swiper/css"
// @ts-expect-error
import "swiper/css/navigation"
import Heading from "@/components/sharedComponents/Heading"
import { useEffect, useState } from "react"
import quote from "../../assets/quote.png"
import { Swiper, SwiperSlide } from "swiper/react"

// Swiper styles

import { Navigation } from "swiper/modules"

type Review = {
  name: string
  image: string
  review: string
  review_time: string
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    fetch("./jsons/customer_reviews.json")
      .then((res) => res.json())
      .then((data: Review[]) => setReviews(data))
  }, [])

  return (
    <div className="max-w-[1280px] mx-auto bg-white text-black">
      <Heading
        title="What Our Patients Says"
        subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
      />
      <div className="py-10 invisible md:visible">
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          navigation
          slidesPerView={2}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="card w-[550px] h-[280px] shadow-sm">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <img src={review.image} className="w-16" alt="" />
                      </div>
                      <div>
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.review_time}</p>
                      </div>
                    </div>
                    <div>
                      <img src={quote} className="w-12" alt="" />
                    </div>
                  </div>
                  <p>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="py-3 md:hidden">
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          navigation
          slidesPerView={1}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="card w-[550px] h-[280px] shadow-sm">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <img src={review.image} className="w-16" alt="" />
                      </div>
                      <div>
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.review_time}</p>
                      </div>
                    </div>
                    <div>
                      <img src={quote} className="w-12" alt="" />
                    </div>
                  </div>
                  <p>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews
