const Hero = () => {
  return (
    <div id="#hero" className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[75%] mt-10">
    <div className="mx-auto text-justify">
      <p className="font-bold text-xl">Hello sir,</p>
        <h1 className="font-bold text-2xl"> It's Monzurul Islam</h1>
        <h1 className="font-bold text-3xl">MERN Stack Developer</h1>
        <p className="text-xl">Highly Interested to join with your team</p>
        <button className="btn btn-outline btn-primary mt-3">Resume</button>
        <div className="flex p-2 gap-2 w-10">
          <img src="/assets/icons8-github.svg" alt="github-icons" />
          <img src="/assets/icons8-linkedin.svg" alt="linkedln-icons" />
          <img src="/assets/icons8-gmail.svg" alt="github-icons" />
        </div>
      </div>
       <img className="mx-auto avatar w-52 rounded-full" src="/assets/monzurul-portfolio.png" alt="Monzurul-portfolio" srcset="" />
    </div>
  );
};

export default Hero;
