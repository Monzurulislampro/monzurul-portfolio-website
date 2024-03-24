const Hero = () => {
  return (
    <div
      id="#hero"
      className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[75%] mt-10"
    >
      <div className="mx-auto text-justify">
        <p className="font-bold text-xl">Hello sir,</p>
        <h1 className="font-bold text-2xl"> It's Monzurul Islam</h1>
        <h1 className="font-bold text-3xl">MERN Stack Developer</h1>
        <p className="text-xl">
          I am passionate about building dynamic and user-friendly web
          applications. I am excited to contribute to innovative projects and
          continue honing my skills in the MERN stack environment.
        </p>
        <button className="btn btn-outline btn-primary mt-3">Resume</button>
        <div className="flex mt-4 w-32 gap-2">
          <a href="https://github.com/Monzurulislampro">
            <img src="/public/assets/icons8-github-48.png" alt="github-icons" />
          </a>
          <a href="https://www.linkedin.com/in/monzurul-islam-pro/">
            <img
              src="/public/assets/icons8-linkedin (1).svg"
              alt="linkedln-icons"
            />
          </a>
          <a href="https://wa.me/qr/EPABDYLFR5VCM1">
            <img src="/public/assets/icons8-whatsapp.svg" alt="github-icons" />
          </a>
        </div>
      </div>
      <img
        className="mx-auto avatar w-52 rounded-full"
        src="/assets/monzurul-portfolio.png"
        alt="Monzurul-portfolio"
      />
    </div>
  );
};

export default Hero;
