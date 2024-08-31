/* eslint-disable react/prop-types */
import clsx from "clsx";

const Logo = ({ className, ...props }) => {
  return (
    <img
      src="src/assets/images/whiteLogo.png"
      alt=""
      width="50"
      height="30"
      // className="flex-none rounded-lg bg-slate-100"
      loading="lazy"
    />
  );
};

export default Logo;
