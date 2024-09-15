import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick";

const Testimonies = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <div className="container">
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-4xl font-bold">Client testimonials and feedback showcase</h1>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-white hover:shadow-10">
                  <div className="flex justify-start items-center gap-5">
                    <img src={data.img} alt="img" className="rounded-full w-16 h-16" />
                    <div>
                      <p className="text-xl font-bold text-secondary">{data.name}</p>
                      <p>{data.name}</p>
                    </div>
                  </div>
                  <div className="py-6 space-y-4">
                    <p className="text-sm text-gray-500">{data.text}</p>
                    <p>🌟🌟🌟🌟🌟</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;