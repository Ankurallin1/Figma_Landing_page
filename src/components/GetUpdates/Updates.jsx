import {
    Button,
    Img,
    Input,
    Text,
  } from "components";
const Update=()=>{
    return(
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1140px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[49%] md:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                  <Text
                    className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                    size="txtSourceSansProBold48"
                  >
                    Stay Updated with UNYN Newsletter
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtSourceSansProRegular18Bluegray400"
                  >
                    Gets the latest updates, news and exciting opportunities for
                    UNYN.{" "}
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <Input
                      name="groupThree"
                      placeholder="Enter your email"
                      className="p-0 placeholder:text-blue_gray-400 text-left text-lg w-full"
                      wrapClassName="sm:flex-1 rounded-[24px] sm:w-full"
                      type="email"
                      color="blue_500"
                    ></Input>
                    <Button
                      className="cursor-pointer min-w-[165px] text-center text-lg"
                      shape="round"
                    >
                      Sign up
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtSourceSansProRegular14"
                  >
                    By signing up, you agree to our Term and Conditions.
                  </Text>
                </div>
              </div>
              <Img
                className="md:flex-1 h-[310px] sm:h-auto object-cover w-[49%] md:w-full"
                src="images/img_rectangle8.png"
                alt="rectangleEight"
              />
            </div>
    )
}
export default Update