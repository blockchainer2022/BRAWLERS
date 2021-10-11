import React from "react";
import BannerRing from "../../assets/image/banner_ring2.png";
import BannerRingMobile from "../../assets/image/banner_ringmobile.png";

const Index = () => {
  return (
    <section className="banner text-white pt-24 md:pt-40 lg:pt-56">
      <div className="container">
        <div className="pb-14">
          <picture className="w-full">
            <source srcSet={BannerRingMobile} media="(max-width: 600px)" />
            <img src={BannerRing} alt="" className="mx-auto" />
          </picture>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container">
          <p className="sm:text-lg md:text-2xl lg:text-4xl py-2 sm:py-4 text-center">
            Don´t forget to join our discord server and say hi!{" "}
            <a href="https://discord.gg/cjzmhD2S7y" className="text-green">
              https://discord.gg/cjzmhD2S7y
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
