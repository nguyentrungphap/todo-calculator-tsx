import { useState } from "react";

const MainCalculator = () => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInput(value);
    }
  };
  console.log(input)

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg mx-auto mt-10">
      <input
        className="text-left text-5xl font-bold p-4 bg-gray-100 rounded-lg mb-4 min-h-[60px]"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <div className="grid grid-cols-4 gap-2">
      </div>
    </div>
  );
};

export default MainCalculator;