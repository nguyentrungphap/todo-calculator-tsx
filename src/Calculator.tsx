import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value: string) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const clearInput = () => {
    setInput("0");
  };

  const deleteLast = () => {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-80 mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg mt-10">
      <div className="text-right text-2xl bg-gray-900 p-4 rounded mb-4">{input}</div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            className="p-4 bg-gray-700 rounded text-xl hover:bg-gray-600"
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="p-4 col-span-2 bg-red-600 rounded text-xl" onClick={clearInput}>
          C
        </button>
        <button className="p-4 bg-yellow-500 rounded text-xl" onClick={deleteLast}>
          AC
        </button>
      </div>
    </div>
  );
};

export default Calculator;
