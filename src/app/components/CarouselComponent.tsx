"use client";
import { Carousel } from "@material-tailwind/react";

const CarouselComponent = () => {
  return (
    <Carousel
      className="rounded-xl"
      autoplay
      autoplayDelay={4000}
      loop
      prevArrow={() => <></>}
      nextArrow={() => <></>}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <>
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-[#4b70ff] w-8" : "bg-gray-400 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            </>
          ))}
        </div>
      )}
    >
      <img
        src="https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png?width=1250&format=webpll"
        alt="image 2"
        className="h-full w-full object-contain"
      />

      <img
        src="https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png?width=724&format=webpll"
        alt="image 3"
        className="h-full w-full object-contain"
      />

      <img
        src="https://images.klipfolio.com/website/public/22b133bc-124d-44f4-85f8-9170b08d3ce9/dashboard-examples-hero.png"
        alt="image 1"
        className="h-full w-full object-contain"
      />
    </Carousel>
  );
};

export default CarouselComponent;
