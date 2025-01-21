import YoutubeVideos from "../Components/Youtube/YoutubeVideos";

const YoutubeSection = () => {
  return (
    <div className="flex flex-col w-full h-auto bg-[#E0FFF1] pb-20">
      <div>
        <h1 className="text-black text-center text-4xl font-bold">
          Voices of <span className="text-[#008145]">Experience </span>
        </h1>
        <h3 className="text-center text-lg sm:text-xl md:text-xl font-medium text-black text-opacity-70 mt-3">
          These are not just Testimonials, they are stories of Transformation.
        </h3>
        <YoutubeVideos />
      </div>
    </div>
  );
};

export default YoutubeSection;
