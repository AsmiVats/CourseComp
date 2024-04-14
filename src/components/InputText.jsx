import {useState} from 'react';


const InputText = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleArrowClick = () => {
      setIsClicked(!isClicked);
    };
  
    return (
      <div className="relative">
        <input
          type="text"
          className={`rounded-full py-2 px-4 m-2 shadow-md bg-[#383A3A]  focus:outline-none ${
            isClicked ? 'border-slate-800' : ''
          }`}
          placeholder="Type something..."
        />
        <svg
          onClick={handleArrowClick}
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer ${
            isClicked ? 'animate-bounce' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
};

export default InputText;
