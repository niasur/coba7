import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const Home: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("Welcome to My Portfolio");
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessage("Explore my work and projects!");
    }, 3000);

    if (clickedButton === "about") {
      navigate("/about");
    } else if (clickedButton === "contact") {
      navigate("/contact");
    }

    return () => clearTimeout(timer);
  }, [clickedButton, navigate]);

  const handleButtonClick = (button: string) => {
    setClickedButton(button);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">{welcomeMessage}</h1>
      <p className="mt-4 text-center">
        Hi, I'm a web developer passionate about building clean and scalable solutions.
      </p>

      <div className="flex flex-col items-center mt-10 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto sm:max-w-2xl lg:max-w-4xl">
        
  {/* Logo Section as Vector */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    className="w-24 h-24 md:w-32 md:h-32"
  >
    <rect
      x="10"
      y="10"
      width="40"
      height="40"
      fill="#EF4444"
      transform="rotate(45, 30, 30)"
    />
    <rect
      x="50"
      y="10"
      width="40"
      height="40"
      fill="#22C55E"
      transform="rotate(-45, 70, 30)"
    />
    <rect
      x="10"
      y="50"
      width="40"
      height="40"
      fill="#3B82F6"
      transform="rotate(45, 30, 70)"
    />
    <rect
      x="50"
      y="50"
      width="40"
      height="40"
      fill="#FACC15"
      transform="rotate(-45, 70, 70)"
    />
  </svg>

  {/* Title and Buttons */}
  <h2 className="text-lg md:text-xl font-semibold mt-4 text-center px-4">
    Bringing Ideas to Reality with Code
  </h2>
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 w-full justify-center">
    
    {/* Resume Button */}
    <button
      onClick={() => handleButtonClick("about")}
      className={`py-2 px-4 rounded w-full md:w-40 ${
        clickedButton === "about" ? "bg-blue-600 text-white" : "bg-black text-white"
      } hover:bg-blue-500`}
    >
      Resume
    </button>

    {/* Contact Button */}
    <button
      onClick={() => handleButtonClick("contact")}
      className={`py-2 px-4 rounded border-2 w-full md:w-40 ${
        clickedButton === "contact"
          ? "border-blue-600 text-blue-600"
          : "border-gray-500 text-gray-500"
      } hover:border-blue-500 hover:text-blue-500 bg-transparent`}
    >
      Get in Touch
    </button>
  </div>
      </div>
    </div>
  );
};

export default Home;
