import React from "react";

const Index = () => {
  return (
    <section className="faq">
      <div className="bg-black">
        <div className="container">
          <p className="text-2xl text-center sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            What the
            <span className="text-green"> {" FAQ "} </span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="py-24 text-2xl md:text-4xl lg:text-6xl">
          <ul className="faq-list">
            <li>How much does it cost to mint?</li>
            <li className="text-green">
              It costs 0.05 ETH + gas fees to mint Thimble Gang Brawlers.
            </li>
            <li>How does breeding work?</li>
            <li className="text-green">
              You must submit 1 male + 1 female + some Knuckle$ + Gas fees at
              the BREEDING PANEL and you will receive a Newborn Brawler.
            </li>
            <li>How many Brawlers can I mint?</li>
            <li className="text-green">
              As many as you please with a limit of 10 per transaction.
            </li>
            <li>How does “Brawling” work?</li>
            <li className="text-green">
              You must submit at leat 1 brawler + gas fees at the BRAWLING ARENA
              and an oponent will be chosen for you at random. The winner is
              determined by its rarity index. multiple Brawlers can be submited,
              multiplying the power of the attack. Only even numbers will be
              paired to assure only fair fights happen at our arena and nobody
              gets hurt.
            </li>
          </ul>
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
