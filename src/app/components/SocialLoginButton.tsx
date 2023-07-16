import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialButtonProps {
  icon: any;
  onClick: () => void;
  name: string;
}

const SocialLoginButton = ({ icon, onClick, name }: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2  rounded-lg bg-white border  ${
        name === "google" ? "hover:bg-[#DB4437] " : null
      } ${name === "apple" ? "hover:bg-black " : null} ${
        name === "facebook" ? "hover:bg-blue-500 " : null
      }   transition-all !duration-500 group`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${
          name === "facebook"
            ? "text-blue-500 group-hover:text-white"
            : name === "google"
            ? "text-[#DB4437] group-hover:text-white"
            : "text-black group-hover:text-white"
        }`}
      />
    </button>
  );
};

export default SocialLoginButton;
