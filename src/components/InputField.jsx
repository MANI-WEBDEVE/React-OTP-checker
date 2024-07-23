import { useState } from "react";
//#FFFFFF

function InputField() {
  const [firstInput, setFirstInput] = useState("");
  const [second, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [fourthInput, setFourthInput] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [textColor, setTextXolor] = useState("");

  console.log(firstInput, second, thirdInput, fourthInput);

  let OPT = 1234;
  const handleVerify = () => {
    let enteredOTP = parseInt(
      `${firstInput}${second}${thirdInput}${fourthInput}`
    );
    const checkOTP = enteredOTP === OPT ? "rgba(58, 219, 112, 0.897)" : "red";
    const checkOTP1 = enteredOTP === OPT ? "black" : "white";
    setButtonColor(checkOTP);
    setTextXolor(checkOTP1);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] relative bg-blue-400">
        <h1 className="text-6xl text-white  text-center font-bold relative top-7">
          Chai Or Code
        </h1>
        <p className="text-sm font-thin text-center absolute right-[60%] top-28">
          Correct OTP: 1234
        </p>
        <div className=" flex items-center justify-center ">
          <div className="h-[67vh] w-[78vw] md:w-[52vw] md:h-[68vh]  sm:w-[54vw] bg-white mt-[74px] rounded-lg">
            <h2 className="text-center text-3xl font-semibold  mt-4">
              Mobile Phone Verification
            </h2>
            <p className="text-center mt-2 leading-tight text-gray-300 text-2xl">
              Enter your mobile phone text to verify your account
            </p>
            <div className="flex items-center justify-center mt-[50px] gap-5">
              <input
                className="w-[77px] h-[89px] bg-blue-200 text-center text-5xl font-bold rounded-lg md:w-[67px] md:h-[79px] sm:w-[57px] sm:h-[65px] "
                type="text"
                maxLength="1"
                autoFocus
                onChange={(e) => setFirstInput(e.target.value)}
              />
              <input
                className="w-[77px] h-[89px] bg-blue-200 text-center text-5xl font-bold rounded-lg md:w-[67px] md:h-[79px] sm:w-[57px] sm:h-[65px] "
                type="text"
                maxLength="1"
                onChange={(e) => setSecondInput(e.target.value)}
              />
              <input
                className="w-[77px] h-[89px] bg-blue-200 text-center text-5xl font-bold rounded-lg md:w-[67px] md:h-[79px] sm:w-[57px] sm:h-[65px] "
                type="text"
                maxLength="1"
                onChange={(e) => setThirdInput(e.target.value)}
              />
              <input
                className="w-[77px] h-[89px] bg-blue-200 text-center text-5xl font-bold rounded-lg md:w-[67px] md:h-[79px] sm:w-[57px] sm:h-[65px] "
                type="text"
                maxLength="1"
                onChange={(e) => setFourthInput(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mt-5 bgColor">
              <button
                onClick={handleVerify}
                style={{ backgroundColor: buttonColor, color: textColor }}
                className="bg-blue-950 py-[11px] px-[126px] rounded-xl text-white text-[19px] font-medium"
              >
                Verify Acount
              </button>
            </div>
            <div className="flex items-center justify-center mt-2 gap-1">
              <p className="text-gray-700 text-opacity-30 text-[19px] font-medium ">
                Didn`t recive code?
              </p>
              <p className="text-blue-950 text-[19px] font-medium">Resend</p>
            </div>
          </div>
        </div>
        <div>
          <a href="https://chaicode.com/ " target="_blank">
            <img
              src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__"
              className="overflow-hidden absolute w-[80px] h-[80px] right-7 top-[85%] rounded-xl hover:border 1 hover: border-white  "
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default InputField;
