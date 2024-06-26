import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Button() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <button
      onClick={handleClick}
      className="bg-white px-9 py-2 shadow-md rounded-sm mt-16 flex items-center text-[#858585] hover:bg-gray-200 dark:bg-[#2B3945] dark:hover:bg-[#1f282f] dark:text-white"
    >
      {" "}
      <FontAwesomeIcon
        className="font-thin mr-4 text-black dark:text-white"
        icon={faArrowLeft}
      />{" "}
      Back
    </button>
  );
}
