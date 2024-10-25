import bannerImg from "../../assets/banner.png";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="w-full md:w-1/2 flex items-center md:justify-end">
        <img src={bannerImg} alt="Banner Image" />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-5xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          fugiat debitis corrupti, qui tenetur consequatur, cum asperiores
          eligendi consectetur est maxime maiores exercitationem. Laborum
          sapiente in non consequuntur beatae?
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;
