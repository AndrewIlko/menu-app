import image from "../../images/profile-img.avif";

const Logo = (): JSX.Element => {
  return (
    <>
      <div className="flex gap-4">
        <div
          className="h-14 w-14 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div>
          <div className="text-2xl font-bold">Eat me!</div>
          <div className="text-xs text-[#4f4f4f] font-bold">Cafe</div>
        </div>
      </div>
    </>
  );
};

export default Logo;
