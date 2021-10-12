import React from "react";
import BannerRing from "../../assets/image/banner_ring2.png";

const Index = () => {
  return (
    <section className="banner text-white  pt-5  md:pt-10">
      <div className="container">
        <div className="custom-container">
          <div className="pb-14">
            <img src={BannerRing} alt="" className="w-full mx-auto" />
            <div className="bg-black p-2 md:p-4 rounded text-lg md:text-3xl text-center">
              <p>
                <span className="text-green"> Thimble Gang Brawlers</span> is a
                collection of 5000 algorithmically generated pixel characters
                with 2 genders, 1500 unique facial expressions and skin colour
                coding. An incredible ammount of love is being invested into
                this project and it will be deployed in{" "}
                <span className="text-green"> 10 stages </span>which we plan to
                fulfil with your help. For detailed info view{" "}
                <span className="text-green"> ROADMAP. </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container">
          <div className="custom-container">
            <p className="text-lg md:text-3xl py-2 sm:py-4 text-center">
              Don´t forget to join our discord server and say hi!{" "}
              <a href="https://discord.gg/cjzmhD2S7y" className="text-green">
                https://discord.gg/cjzmhD2S7y
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
