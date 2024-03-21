import { useKeenSlider } from "keen-slider/react";
const Projects = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });
  return (
    <div className=" max-w-[75%] mt-10 mx-auto text-center">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold p-4">MY PROJECTS</h1>
      </div>
      <div ref={sliderRef} className="keen-slider flex">
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="keen-slider__slide"
              src="/assets/slider/download (1).jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide absolute -mt-16 font-bold text-slate-100 ">
            <p>Project Link</p>
            <p>Github Repo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
