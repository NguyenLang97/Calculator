import { useState, useEffect } from "react";

function App() {
    const operators = ["/", "x", "+", "-"];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("");
    const [calculatorData, setCalculatorData] = useState("");

    const handleNumbers = (value) => {
        if (!calculatorData.length) {
            setInput(`${value}`);
            setCalculatorData(`${value}`);
        } else {
            if (value === 0 && (calculatorData === "0" || input === "0")) {
                setCalculatorData(`${calculatorData}`);
            } else {
                const lastChat = calculatorData.charAt(
                    calculatorData.length - 1
                );
                const isLastChatOperator =
                    lastChat === "*" || operators.includes(lastChat);

                setInput(isLastChatOperator ? `${value}` : `${input}${value}`);
                setCalculatorData(`${calculatorData}${value}`);
            }
        }

        if (calculatorData.includes("=")) {
            console.log(input);
            console.log(output);
            console.log(calculatorData);
            setCalculatorData(value);
            setInput(value);
        }
    };

    const dotOperator = () => {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        if (!calculatorData.length) {
            setInput("0.");
            setCalculatorData("0.");
        } else {
            if (lastChat === "*" || operators.includes(lastChat)) {
                setInput("0.");
                setCalculatorData(`${calculatorData} 0.`);
            } else {
                setInput(
                    lastChat === "." || input.includes(".")
                        ? `${input}`
                        : `${input}.`
                );
                const formattedValue =
                    lastChat === "." || input.includes(".")
                        ? `${calculatorData}`
                        : `${calculatorData}.`;
                setCalculatorData(formattedValue);
            }
        }
    };

    const handleOperators = (value) => {
        if (calculatorData.length) {
            setInput(`${value}`);
            const beforeLastChat = calculatorData.charAt(
                calculatorData.length - 2
            );

            const beforeLastChatIsOperator =
                operators.includes(beforeLastChat) || beforeLastChat === "*";

            const lastChat = calculatorData.charAt(calculatorData.length - 1);

            const lastChatIsOperator =
                operators.includes(lastChat) || lastChat === "*";

            const validOp = value === "x" ? "*" : value;
            if (
                (lastChatIsOperator && value !== "-") ||
                (beforeLastChatIsOperator && lastChatIsOperator)
            ) {
                if (beforeLastChatIsOperator) {
                    const updatedValue = `${calculatorData.substring(
                        0,
                        calculatorData.length - 2
                    )}${value}`;
                    setCalculatorData(updatedValue);
                } else {
                    setCalculatorData(
                        `${calculatorData.substring(
                            0,
                            calculatorData.length - 1
                        )}${validOp}`
                    );
                }
            } else {
                setCalculatorData(`${calculatorData}${validOp}`);
            }
        }
    };

    const handleInput = (value) => {
        const number = numbers.find((num) => num === value);
        const operator = operators.find((op) => op === value);

        switch (value) {
            case "=":
                handleSubmit(value);
                break;
            case "AC":
                handleClear();
                break;
            case number:
                handleNumbers(value);
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

    const handleSubmit = (value) => {
        const total = eval(calculatorData);
        setInput(total);
        setOutput(`${total} = ${total}`);
        setCalculatorData((pre) => pre + "=" + total);
    };

    const handleClear = () => {
        setInput("0");
        setCalculatorData("");
    };

    const handleOutput = () => {
        setOutput(calculatorData);
    };

    useEffect(() => {
        handleOutput();
    }, [calculatorData]);

    return (
        <div className="pt-[100px] flex justify-center items-center font-mono ">
            <div className="grid grid-cols-4 grid-rows-6 border-2 border-solid border-[#47476b] px-[5px] py-[5px] bg-black">
                <div className="bg-black col-span-full text-right text-[20px]">
                    <div className="text-[yellow] w-full px-[20px] py-[5px] text-right bg-black">
                        {output}
                    </div>
                    <div className="px-[20px] py-[5px] text-[white]">
                        {input}
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
                    onClick={() => handleInput("x")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    x
                </div>
                <div
                    onClick={() => handleInput(7)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    7
                </div>
                <div
                    onClick={() => handleInput(8)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    8
                </div>
                <div
                    onClick={() => handleInput(9)}
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
                    onClick={() => handleInput(4)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    4
                </div>
                <div
                    onClick={() => handleInput(5)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    5
                </div>
                <div
                    onClick={() => handleInput(6)}
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
                    onClick={() => handleInput(1)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    1
                </div>
                <div
                    onClick={() => handleInput(2)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    2
                </div>
                <div
                    onClick={() => handleInput(3)}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    3
                </div>
                <div
                    onClick={handleSubmit}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#004466] color text-white border border-solid border-black cursor-pointer text-[20px] row-span-2"
                >
                    =
                </div>
                <div
                    onClick={() => handleInput(0)}
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
