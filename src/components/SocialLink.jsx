import React from "react";
const SocialLink = ({ icon: Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex justify-center items-center rounded-full 
                 border-2 border-fuchsia-500 text-fuchsia-500 
                 hover:bg-fuchsia-500 hover:text-black transition-colors duration-300"
    >
      <Icon className="text-xl" />
    </a>
  );
};
export default SocialLink;
