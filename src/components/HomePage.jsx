import React from "react";

import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";

const HomePage = () => {
  return (
    <div className=" bg-amazonclone-background">
      <div className="min-w-[800px] max-w-[1000px] m-auto ">
        <Carousel />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a Surprise for You"}
            img={"../images/home_grid_1.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Unlimited Stearming"}
            img={"../images/home_grid_3.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"More Titles to Explore"}
            img={"../images/home_grid_4.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Family Plan: 3 Months free"}
            img={"../images/home_grid_8.jpg"}
            link={"see terms and conditions"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src="../images/banner_image_2.jpg"
              alt=""
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src="../images/banner_image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
