import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 py-4 shadow-md mt-20">
      <Marquee speed={50} pauseOnHover gradient={false}>
        <span className="mx-8 text-lg  font-semibold text-white flex items-center gap-2">
          📚 New Arrivals: The Silent Patient
        </span>
        <span className="mx-8 text-lg  font-semibold text-white flex items-center gap-2">
          🎉 Special Discount on Memberships
        </span>
        <span className="mx-8 text-lg  font-semibold text-white flex items-center gap-2">
          📖 New Arrivals: Atomic Habits
        </span>
        <span className="mx-8 text-lg font-semibold text-white flex items-center gap-2">
          🔥 Limited Time Offer on Yearly Plans
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;