import {
    Button,
    Text,
  } from "components";
const Promotion=()=>{
    return(
        <div className="bg-blue-500 flex flex-col items-center justify-end p-[108px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[46px] items-center justify-start mt-[3px] w-[67%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtSourceSansProBold48WhiteA700"
                  >
                    Empowering Your Potential with UNYN{" "}
                  </Text>
                  <Text
                    className="mt-0.5 text-blue-50 text-lg"
                    size="txtSourceSansProRegular18Blue50"
                  >
                    Join UNYN and unlock endless opportunities for growth{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-[33px] items-center justify-center w-[43%] md:w-full">
                  <Button
                    className="cursor-pointer min-w-[165px] text-center text-lg"
                    shape="round"
                    color="white_A700"
                  >
                    Join
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[150px] text-center text-lg"
                    shape="round"
                    color="white_A700"
                    variant="outline"
                  >
                    Get evolved
                  </Button>
                </div>
              </div>
            </div>
    )
}
export default Promotion