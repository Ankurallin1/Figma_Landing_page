
import {
    Button,
    Img,
    PagerIndicator,
    Text,
  } from "components";
const About=()=>{
    return(
        <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between mt-14 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                <div className="flex flex-col gap-12 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Text
                      className="leading-[120.00%] md:text-5xl text-[64px] text-black-900 w-full"
                      size="txtSourceSansProBold64"
                    >
                      Empowering Youth for a Brighter Future
                    </Text>
                    <Text
                      className="leading-[120.00%] text-blue_gray-400 text-lg w-full"
                      size="txtSourceSansProRegular18Bluegray400"
                    >
                      <>
                        United Youth Network (UNYN) is a dynamic and
                        impactfulinternational student society committed to
                        nurturing the talents and potential of young individuals
                        across colleges and universities of different countries.
                        Join us today to be a part of our mission to create a
                        brighter and more promising future.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[34px] items-center justify-start w-3/5 md:w-full">
                    <Button
                      className="cursor-pointer min-w-[175px] text-center text-lg"
                      shape="round"
                    >
                      Join
                    </Button>
                    <div className="flex flex-row items-center justify-evenly w-[35%]">
                      <a href="javascript:" className="text-blue-500 text-lg">
                        <Text size="txtSourceSansProRegular18Blue500">
                          Learn More
                        </Text>
                      </a>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                <Img
                  className="h-[639px] md:h-auto object-cover w-full"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
                <div className="bg-blue-50 flex flex-col items-center justify-start p-3.5 w-full">
                  <div className="flex flex-col gap-[41px] items-start justify-start mb-2.5 mt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSourceSansProSemibold20"
                      >
                        Empower the Youth Today
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtSourceSansProLight16"
                      >
                        Unlock Your Potential and Make a Diffrence{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <PagerIndicator
                        className="flex h-2 w-8"
                        count={3}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-light_blue-900 w-2"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-200 w-2"
                        selectedWrapperCss="inline-block mx-[2.00px]"
                        unselectedWrapperCss="inline-block mx-[2.00px]"
                      />
                      <Img
                        className="h-6"
                        src="images/img_group9.svg"
                        alt="groupNine"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default About