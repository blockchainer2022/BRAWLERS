import React from "react";
import Card1Image from "../../assets/image/stage1_1.png";
import Card2Image from "../../assets/image/stage1_2.png";
import Card3Image from "../../assets/image/stage1_3.png";
import Ring1 from "../../assets/image/stage4_1.png";
import PholderImage from "../../assets/image/placeholder.png";
import RingPholderImage from "../../assets/image/ring-pholder-image.png";

import Ring from "../../assets/image/ring2.png";
const Index = () => {
  return (
    <section>
      <div className="bg-black py-8">
        <div className="container">
          <h4 className="text-2xl text-center sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            WHERE IS THIS GOING? | <span className="text-green">ROADMAP</span>
          </h4>
        </div>
      </div>
      <StageOne />
      <StageTwo />
      <StageThree />
      <StageFour />
      <StageFive />
    </section>
  );
};

export default Index;

const StageOne = () => (
  <div>
    <StageHeader text="STAGE 1" />
    <div className="container py-20">
      <TextWrapper>
        The <TextGreen text="Presale" />: 500 units including
        <TextGreen text=" 253 women, 247 men " />
        and <TextGreen text="44 specials " />
        44 specials. Sale price is <TextGreen text="0.05 ETH + Gas fees" />
        with a limit of 10 units per transaction.
      </TextWrapper>
      <div className="md:flex md:justify-between">
        <Card />
        <Card img={Card2Image} text1="247" text2="MEN" />
        <Card img={Card3Image} text1="44" text2="SPECIAL" />
      </div>
    </div>
  </div>
);
const StageTwo = () => (
  <div>
    <StageHeader text="STAGE 2" />
    <div className="container py-20">
      <TextWrapper>
        <TextGreen text="Brawlers Sale + $Knuckles drop : 1000 units " />
        will be dropped and a number of
        <TextGreen text="  $Knuckles " />
        token will be
        <TextGreen text=" distributed " />
        among
        <TextGreen text=" presale holders " />
        who will also .
        <TextGreen text=" enjoy discounts " />
        when minting new brawlers
      </TextWrapper>
    </div>
  </div>
);
const StageThree = () => (
  <div>
    <StageHeader text="STAGE 3" />
    <div className="container py-20">
      <TextWrapper>
        <TextGreen text="Breeding + Big Brawlers + 2nd $Knuckles airdrop:  " />
        women now can
        <TextGreen text="  give birth " />
        to Big Brawlers 2x times every 24h, they are
        <TextGreen text=" superior redesigned Brawlers. " />
        1 male and 1 female are needed in order to breed and a population
        <TextGreen text="  limit of 1500 " />
        is set.
      </TextWrapper>
    </div>
    <div className="container pt-10 md:pt-24 text-center text-black">
      <div className="md:flex">
        {/* Your Knuckle Start */}
        <div className="md:w-5/12 md:pr-2 md:flex md:flex-col ">
          <ColWrap>
            <h4 className="text-2xl text-center  lg:text-5xl">
              YOU OWN <span className="text-primary">2</span> BRAWLERS
            </h4>
          </ColWrap>
          <div className=" bg-yellow p-4 md:flex-1 text-black rounded my-4 lg:my-2 md:flex md:flex-col md:justify-between ">
            <div className=" flex flex-wrap my-auto">
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
          </div>
          <div className="mt-auto">
            <ColWrap>
              <h4 className="text-2xl text-center  lg:text-5xl">
                YOUR KNUCK$ <span className="text-primary">0230 </span>
              </h4>
            </ColWrap>
          </div>
        </div>
        {/* Your Knuckle End */}
        {/* Mint Panel Start */}
        <div className="md:w-7/12 md:pl-2">
          <ColWrap>
            <h4 className="text-2xl text-center lg:text-5xl">BREEDING PANEL</h4>
          </ColWrap>
          <div className="sm:flex flex-wrap pt-0">
            <div className="sm:w-9/12 sm:pr-2 sm:flex sm:flex-col sm:justify-between">
              <div className="p-3 bg-yellow   text-black rounded my-4 lg:my-2 flex-1">
                <img src={PholderImage} alt="" className="w-full p-2" />
              </div>
            </div>
            <div className="sm:w-3/12 sm:pl-2 sm:flex sm:flex-col sm:justify-between ">
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-black">#0000</p>
              </ColWrap>
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-black">GENDER</p>
              </ColWrap>
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-black">BB</p>
              </ColWrap>
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-black">RARITY</p>
              </ColWrap>
            </div>
            <div className="w-full">
              <ColWrap>
                <h4 className="text-2xl text-center  lg:text-5xl">
                  <span className="text-primary">BREED</span>
                </h4>
              </ColWrap>
            </div>
          </div>
        </div>
        {/* Mint Panel END*/}
      </div>
    </div>
    <div className="my-5 text-center container">
      <p className="text-xl  md:text-4xl">
        YOU MUST OWN AT LEAST <TextGreen text=" 1 MALE " />
        AND
        <TextGreen text=" 1 FEMALE " /> BRAWLER
        <TextGreen text=" IN ORDER TO BREED " />
        BREEDING
        <TextGreen text="  COSTS 50 NUCKLES + GAS FEES." />
      </p>
    </div>
    <div className="container pb-10 md:pb-24 ">
      <ColWrap>
        <h5 className="text-4xl text-center lg:text-6xl text-black">
          {"> WALLET CONNECT <"}
        </h5>
      </ColWrap>
    </div>
  </div>
);

const StageFour = () => (
  <div>
    <StageHeader text="STAGE 4" />
    <div className="container py-20">
      <TextWrapper>
        <TextGreen text="Brawling Arena Lauch" />: holders can
        <TextGreen text="  submit " />
        their <TextGreen text="brawlers " />
        to <TextGreen text="fight" />
        against
        <TextGreen text=" each other " />
        using
        <TextGreen text=" play-to-earn " />
        mechanics where
        <TextGreen text=" $Knuckles " />
        will be introduced as a reward system.
        <TextGreen text=" Climb " />
        the brawling
        <TextGreen text=" ranks " />
        and
        <TextGreen text=" qualify " />
        for the
        <TextGreen text="  $Knuckles weekly airdrop. " />
      </TextWrapper>
      <div className="container mt-10">
        <ColWrap>
          <p className="text-xl text-center md:text-4xl text-white ">
            LET´S BRAWL
          </p>
        </ColWrap>
      </div>
      <div className="md:mt-60 lg:mt-80 mt-20 relative w-full">
        <div className="ring-image">
          <div className="ring-image-wrapper p-2 md:p-4 lg:p-5">
            <img src={Ring1} alt="" />
          </div>
          <div className="ring-image-wrapper p-2 md:p-4 lg:p-5">
            <img src={RingPholderImage} alt="" />
          </div>
        </div>
        <div className="ring-text text-2xl  sm:text-6xl lg:text-8xl ring-text">
          <p className="mr-5">#1234</p>
          <p className="ml-10">#0000</p>
        </div>
        <img src={Ring} alt="" className="w-full" />
      </div>
    </div>
    <div className="container pt-5 lg:pt-10 text-center">
      <div className="md:flex">
        {/* Your Knuckle Start */}
        <div className="md:w-5/12 md:pr-2 md:flex md:flex-col ">
          <ColWrap>
            <h4 className="text-2xl text-center  lg:text-5xl">
              YOU OWN <span className="text-green">2</span> BRAWLERS
            </h4>
          </ColWrap>
          <div className=" bg-yellow p-4 md:flex-1 text-white rounded my-4 lg:my-2 md:flex md:flex-col md:justify-between ">
            <div className=" flex flex-wrap my-auto">
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
          </div>
          <div className="mt-auto">
            <ColWrap>
              <h4 className="text-2xl text-center  lg:text-5xl">
                SUBMIT TO BRAWL
              </h4>
            </ColWrap>
          </div>
        </div>
        {/* Your Knuckle End */}
        {/* Mint Panel Start */}
        <div className="md:w-7/12 md:pl-2">
          <div className="flex">
            <div className="mr-2 w-3/12 pr-2 md:block hidden">
              <ColWrap>
                <h4 className="text-2xl text-center lg:text-5xl">INFO</h4>
              </ColWrap>
            </div>
            <div className="flex-1 ">
              <ColWrap>
                <h4 className="text-2xl text-center lg:text-5xl">
                  LIVE BRAWL RANKS
                </h4>
              </ColWrap>
            </div>
          </div>
          <div className="sm:flex flex-wrap pt-0">
            <div className="sm:w-3/12 sm:pr-2 sm:flex sm:flex-col sm:justify-between ">
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-white">#234</p>
              </ColWrap>
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-white">16 - 3</p>
              </ColWrap>
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-white">NBB</p>
              </ColWrap>
              <ColWrap>
                <p className="text-2xl lg:text-5xl text-white">R. INDEX</p>
              </ColWrap>
            </div>
            <div className="sm:w-9/12 sm:pl-2 sm:flex sm:flex-col sm:justify-between">
              <div className="mt-10 md:hidden">
                <ColWrap>
                  <h4 className="text-2xl text-center lg:text-5xl">INFO</h4>
                </ColWrap>
              </div>
              <div className="p-5 py-6 bg-yellow  text-2xl lg:text-4xl 2xl:text-6xl text-white rounded my-4 lg:my-2 flex-1  flex text-left">
                <ul className="inline-block  w-1/2 mr-4 account-list list-none">
                  <li className="">1. 0X932...</li>
                  <li className="">2. 0X932...</li>
                  <li className="">3. 0X932...</li>
                  <li className="">4. 0X932...</li>
                  <li className="">5. 0X932...</li>
                  <li className="">6. 0X932...</li>
                  <li className="">7. 0X932...</li>
                  <li className="">8. 0X932...</li>
                </ul>
                <ul className="inline-block  w-1/2 mr-4 account-list list-none">
                  <li className="">9. 0X932...</li>
                  <li className="">10. 0X932...</li>
                  <li className="">11. 0X932...</li>
                  <li className="">12. 0X932...</li>
                  <li className="">13. 0X932...</li>
                  <li className="">14. 0X932...</li>
                  <li className="">15. 0X932...</li>
                  <li className="">16. 0X932...</li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <ColWrap>
                <h4 className="text-2xl text-center  lg:text-5xl">
                  <span>YOU HAVE 0 UNCLAIMED $Knuckles</span>
                </h4>
              </ColWrap>
            </div>
          </div>
        </div>
        {/* Mint Panel END*/}
      </div>
    </div>
    <div className="container pb-10 md:pb-24 mt-4">
      <ColWrap>
        <h5 className="text-4xl text-center lg:text-6xl text-white">
          {"> WALLET CONNECT <"}
        </h5>
      </ColWrap>
    </div>
  </div>
);

const StageFive = () => (
  <div>
    <StageHeader text="STAGE 5" />
    <div className="container py-20">
      <TextWrapper>
        <TextGreen text="3D Mutation " />
        and
        <TextGreen text="  Metaverse " />
        integration!
      </TextWrapper>
    </div>
  </div>
);

const ColWrap = ({ children }) => (
  <div className="p-3 bg-yellow  rounded my-4 lg:my-2">{children}</div>
);

const StageHeader = ({ text }) => (
  <div className="bg-yellow py-6">
    <div className="conatiner">
      <p className="text-2xl text-center sm:text-4xl md:text-6xl text-black">
        {text}
      </p>
    </div>
  </div>
);

const TextGreen = ({ text }) => <span className="text-green">{text}</span>;
// const TextPrimary = ({ text }) => <span className="text-primary">{text}</span>;

const TextWrapper = ({ children }) => (
  <div className="bg-black p-6 rounded">
    <p className="text-xl text-center md:text-4xl">{children}</p>
  </div>
);

const Card = ({ img = Card1Image, text1 = "253", text2 = "WOMEN" }) => (
  <div className="md:w-1/3 p-2">
    <div className="bg-black p-4 my-4 rounded">
      <img src={img} alt="" className="w-full" />
    </div>
    <div className="bg-black p-4 my-4 rounded">
      <p className="text-xl text-center md:text-6xl">
        <TextGreen text={text1} /> {text2}
      </p>
    </div>
  </div>
);
