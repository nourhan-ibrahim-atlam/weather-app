import "./App.css";
import Weather from "./Components/Weather";

function App() {
  return (
    <>
      {/* Background Image */}
      <img
        src="backgroundImage.jpg"
        alt="background-img"
        className="w-full h-dvh absolute opacity-50"
      />

      {/* Show Weather */}
      <Weather />
    </>
  );
}

export default App;
