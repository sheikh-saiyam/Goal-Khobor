import { memo } from "react";

const Header = memo(({ heading }) => {
  return (
    <div>
      <h1 className="bg-black text-white font-semibold text-2xl md:text-3xl tracking-wider w-fit px-4 py-2 mb-6">
        {heading}
      </h1>
    </div>
  );
});

export default Header;
