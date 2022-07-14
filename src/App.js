import { useState } from "react";

function App() {
    const operators = ["/", "*", "+", "-"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const [display, setDisplay] = useState("0");
    const [equation, setEquation] = useState("");

    const numInput = (value) => {
        if (equation.match(/[0-9\.]$/) && !equation.includes("=")) {
            if (equation.match(/[+\-*\/]/) == null) {
                let val = equation + value;
                setDisplay(val);
                setEquation(val);
            } else {
                setDisplay(display + value);
                setEquation(equation + value);
            }
        } else if (equation.match(/[+\-*\/]$/)) {
            let val = equation + value;
            setDisplay(value);
            setEquation(val);
        } else if (
            (display === "0" && value !== "0") ||
            equation.includes("=")
        ) {
            setDisplay(value);
            setEquation(value);
        }
    };

    const dotOperator = (value) => {
        if (equation == "" || equation.includes("=")) {
            let val = "0.";

            setDisplay(val);
            setEquation(val);
        } else if (equation.match(/[+\-*\/]$/)) {
            let val = "0.";

            setDisplay(val);
            setEquation(equation + val);
        } else if (!display.includes(".")) {
            setDisplay(display + value);
            setEquation(equation + value);
        }
    };

    const handleOperators = (value) => {
        if (equation.includes("=")) {
            let val = display;
            val += value;
            setDisplay(value);

            setEquation(val);
        } else {
            if (equation != "" && equation.match(/[*\-\/+]$/) == null) {
                let val = equation;
                val += value;
                setDisplay(value);

                setEquation(val);
            } else if (equation.match(/[*\-\/+]$/) != null) {
                let val = equation;
                val = val.substring(0, val.length - 1);
                val += value;

                setEquation(val);
            }
        }
    };

    const handleInput = (value) => {
        const number = numbers.find((num) => num === value);
        const operator = operators.find((op) => op === value);

        switch (value) {
            case "=":
                calculate(value);
                break;
            case "AC":
                handleClear();
                break;
            case number:
                numInput(value);
                break;
            case ".":
                dotOperator(value);
                break;
            case operator:
                handleOperators(value);
                break;
            default:
                break;
        }
    };

    const calculate = () => {
        if (equation.includes("=")) {
            // let val = `${display} = ${display}`;
            // setEquation(val);
            setEquation(equation);
            setDisplay(display);
        } else if (
            equation != "" &&
            equation.match(/[+\-*\/]/) != null &&
            equation.match(/[+\-*\/]$/) == null
        ) {
            let result = Number.isInteger(eval(equation))
                ? eval(equation)
                : parseFloat(eval(equation).toFixed(5));
            let val = equation;
            val += ` = ${result}`;

            setDisplay(result);
            setEquation(val);
        }
    };

    const handleClear = () => {
        setDisplay("0");
        setEquation("");
    };

    return (
        <div className="pt-[100px] flex justify-center items-center font-mono ">
            <div className="grid grid-cols-4 grid-rows-6 border-2 border-solid border-[#47476b] px-[5px] py-[5px] bg-black">
                <div className="bg-black col-span-full text-right text-[20px] h-[86px] relative">
                    <div className="text-[yellow] w-full px-[20px] py-[5px] my-[2px] text-right bg-black">
                        {equation}
                    </div>
                    <div className="px-[20px] py-[5px] my-[2px] text-[white] absolute right-0 bottom-0">
                        {display}
                    </div>
                </div>
                <div
                    onClick={handleClear}
                    className="hover:border hover:border-solid hover:border-white hover:text-black flex justify-center items-center py-[20px] px-[40px] bg-[#ac3939] color text-white border border-solid border-black cursor-pointer text-[20px] col-span-2"
                >
                    AC
                </div>
                <div
                    onClick={() => handleInput("/")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    /
                </div>
                <div
                    onClick={() => handleInput("*")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    x
                </div>
                <div
                    onClick={() => handleInput("7")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    7
                </div>
                <div
                    onClick={() => handleInput("8")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    8
                </div>
                <div
                    onClick={() => handleInput("9")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    9
                </div>
                <div
                    onClick={() => handleInput("-")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    -
                </div>
                <div
                    onClick={() => handleInput("4")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    4
                </div>
                <div
                    onClick={() => handleInput("5")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    5
                </div>
                <div
                    onClick={() => handleInput("6")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    6
                </div>
                <div
                    onClick={() => handleInput("+")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    +
                </div>
                <div
                    onClick={() => handleInput("1")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    1
                </div>
                <div
                    onClick={() => handleInput("2")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    2
                </div>
                <div
                    onClick={() => handleInput("3")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    3
                </div>
                <div
                    onClick={calculate}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#004466] color text-white border border-solid border-black cursor-pointer text-[20px] row-span-2"
                >
                    =
                </div>
                <div
                    onClick={() => handleInput("0")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px] col-span-2"
                >
                    0
                </div>
                <div
                    onClick={() => handleInput(".")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    .
                </div>
            </div>
        </div>
    );
}

export default App;
