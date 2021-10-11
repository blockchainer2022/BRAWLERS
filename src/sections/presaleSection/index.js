import React from "react";
import PholderImage from "../../assets/image/placeholder.png";
const Index = () => {
  return (
    <section className="bg-yellow">
      <div className="bg-black">
        <div className="container">
          <p className="text-2xl text-center sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            {">>PRESALE STARTS IN"}
            <span className="text-yellow"> {" NOVEMBER<< "} </span>
          </p>
        </div>
      </div>

      <div className="container pt-10 md:pt-24 text-center">
        <div className="md:flex">
          {/* Your Knuckle Start */}
          <div className="md:w-1/3 md:pr-2 md:flex md:flex-col ">
            <ColWrap>
              <h4 className="text-2xl text-center lg:text-5xl">
                YOUR Knuckle$ <span className="text-green">0000</span>
              </h4>
            </ColWrap>
            <div className="md:flex-1 bg-black p-4  rounded my-4 lg:my-2 md:flex md:flex-col md:justify-between ">
              <div className=" flex flex-wrap ">
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
                <div className="w-1/2 p-2">
                  <img src={PholderImage} alt="" className="w-full" />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-2xl text-center mt-4 lg:text-5xl">
                  YOU OWN <span className="text-green">0</span> BRAWLERS
                </h4>
              </div>
            </div>
          </div>
          {/* Your Knuckle End */}
          {/* Mint Panel Start */}
          <div className="md:w-2/3 md:pl-2">
            <ColWrap>
              <h4 className=" text-center ">MINT PANEL</h4>
            </ColWrap>
            <div className="sm:flex flex-wrap pt-0">
              <div className="sm:w-2/3 sm:pr-2 sm:flex sm:flex-col sm:justify-between">
                <ColWrap>
                  <img src={PholderImage} alt="" className="w-full p-2" />
                </ColWrap>
                <ColWrap>
                  <h4 className="text-center">
                    NUMBER OF UNITS <span className="text-green">0</span>
                  </h4>
                </ColWrap>
              </div>
              <div className="sm:w-1/3 sm:pl-2 sm:flex sm:flex-col sm:justify-between ">
                <ColWrap>
                  <p className=" text-green">#0000</p>
                </ColWrap>
                <ColWrap>
                  <p className=" text-green">GENDER</p>
                </ColWrap>
                <ColWrap>
                  <p className=" text-green">KIND</p>
                </ColWrap>
                <ColWrap>
                  <p className=" text-green">R.INDEX</p>
                </ColWrap>
                <ColWrap>
                  <p className=" text-green">MINT</p>
                </ColWrap>
              </div>
            </div>
          </div>
          {/* Mint Panel END*/}
        </div>
      </div>
      <div className="container pb-10 md:pb-24 mt-8 md:mt-10">
        <ColWrap>
          <h5 className="text-4xl lg:text-7xl text-center">
            {"> WALLET CONNECT <"}
          </h5>
        </ColWrap>
      </div>
    </section>
  );
};

export default Index;

const ColWrap = ({ children }) => (
  <div className="p-3 text-2xl bg-black rounded my-4 lg:my-2 lg:text-5xl">
    {children}
  </div>
);
