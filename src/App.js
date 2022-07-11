import { useState } from "react";

function App() {
    const [expression, setExpression] = useState("");
    const [answer, setAnswer] = useState(0);
    const [operator, setOperator] = useState('')

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
        if (expression[expression.length - 1] == "=") {
            if (/[1-9.]/.test(symbol)) {
                setExpression(symbol);
            } else {
                setExpression(answer + symbol);
            }
        }

    };

    const calculate = () => {
        setAnswer(eval(expression));
        setExpression((prev) => prev + "=");
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0);
        // setOperator('')
    };
    return (
        <div className="pt-[100px] flex justify-center items-center font-mono ">
            <div className="grid grid-cols-4 grid-rows-6 border-2 border-solid border-[#47476b] px-[5px] py-[5px] bg-black">
                <div
                    onClick={display}
                    className="bg-black col-span-full text-right text-[20px]"
                >
                    <input
                        className="text-[yellow] w-full px-[20px] py-[5px] text-right bg-black"
                        type="text"
                        value={expression}
                        disabled
                    />
                    <div className="px-[20px] py-[5px] text-[white]">
                        {answer}
                    </div>
                </div>
                <div
                    onClick={allClear}
                    className="hover:border hover:border-solid hover:border-white hover:text-black flex justify-center items-center py-[20px] px-[40px] bg-[#ac3939] color text-white border border-solid border-black cursor-pointer text-[20px] col-span-2"
                >
                    AC
                </div>
                <div
                    onClick={() => display("/")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    /
                </div>
                <div
                    onClick={() => display("*")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    x
                </div>
                <div
                    onClick={() => display("7")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    7
                </div>
                <div
                    onClick={() => display("8")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    8
                </div>
                <div
                    onClick={() => display("9")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    9
                </div>
                <div
                    onClick={() => display("-")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    -
                </div>
                <div
                    onClick={() => display("4")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    4
                </div>
                <div
                    onClick={() => display("5")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    5
                </div>
                <div
                    onClick={() => display("6")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    6
                </div>
                <div
                    onClick={() => display("+")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[gray] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    +
                </div>
                <div
                    onClick={() => display("1")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    1
                </div>
                <div
                    onClick={() => display("2")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    2
                </div>
                <div
                    onClick={() => display("3")}
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
                    onClick={() => display("0")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px] col-span-2"
                >
                    0
                </div>
                <div
                    onClick={() => display(".")}
                    className="flex justify-center items-center py-[20px] px-[40px] bg-[#4d4d4d] color text-white border border-solid border-black cursor-pointer text-[20px]"
                >
                    .
                </div>
            </div>
        </div>
    );
}

export default App;
