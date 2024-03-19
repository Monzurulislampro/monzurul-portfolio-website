const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 max-w-[75%] mt-10">
    <div className="mx-auto text-justify">
      <p>Hello sir,</p>
        <h1 className="font-bold text-xxl"> It's Monzurul Islam</h1>
        <h1 className="font-bold text-2xl">MERN Stack Developer</h1>
        <p className="">Highly Interested to join with your team</p>
        <button className="btn btn-outline btn-primary mt-3">Resume</button>
        <div className="flex p-2 gap-2 w-10">
          <img src="/public/assets/icons8-github.svg" alt="github-icons" />
          <img src="/public/assets/icons8-linkedin.svg" alt="linkedln-icons" />
          <img src="/public/assets/icons8-gmail.svg" alt="github-icons" />
        </div>
      </div>
       <img className="mx-auto avatar w-52 rounded-full" src="/assets/monzurul-portfolio.png" alt="Monzurul-portfolio" srcset="" />
    </div>
  );
};

export default Hero;
