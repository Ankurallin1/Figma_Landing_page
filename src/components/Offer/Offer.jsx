import {
    Button,
    Img,
    List,
    Text,
  } from "components";

const Offer=()=>{
    return (
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mt-[161px] w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-black-900 text-lg"
                  size="txtSourceSansProSemibold18"
                >
                  Empower
                </Text>
                <Text
                  className="mt-1 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtSourceSansProBold48"
                >
                  Unlock Your Potential with UNYN
                </Text>
                <Text
                  className="leading-[120.00%] mt-1.5 text-blue_gray-400 text-center text-lg w-full"
                  size="txtSourceSansProRegular18Bluegray400"
                >
                  <>
                    At UNYN, we offer a range of impactful programs and events
                    designed to empower young individuals. From mentorship
                    programs to networking events and international
                    collaborations, we provide the resources and support needed
                    to help you thrive.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[84px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="circle"
                      color="blue_50"
                    >
                      <Img
                        className="h-8"
                        src="images/img_group11.png"
                        alt="groupEleven"
                      />
                    </Button>
                    <Text
                      className="mt-[17px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtSourceSansProBold24"
                    >
                      Mentorship Programs
                    </Text>
                    <Text
                      className="leading-[120.00%] mt-3 text-blue_gray-400 text-center text-lg w-full"
                      size="txtSourceSansProRegular18Bluegray400"
                    >
                      Connect with experienced mentors who will guide you
                      towards success.
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="circle"
                      color="blue_50"
                    >
                      <Img
                        className="h-8"
                        src="images/img_group12.png"
                        alt="groupTwelve"
                      />
                    </Button>
                    <Text
                      className="mt-[17px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtSourceSansProBold24"
                    >
                      Networking Events
                    </Text>
                    <Text
                      className="leading-[120.00%] mt-3 text-blue_gray-400 text-lg w-full"
                      size="txtSourceSansProRegular18Bluegray400"
                    >
                      Expand your network and forge valuable connections with
                      like- minded individual.
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-3.5 items-center justify-start sm:ml-[0] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="circle"
                      color="blue_50"
                    >
                      <Img
                        className="h-8"
                        src="images/img_group14.png"
                        alt="groupFourteen"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtSourceSansProBold24"
                    >
                      International Collaborations
                    </Text>
                    <Text
                      className="leading-[120.00%] text-blue_gray-400 text-center text-lg w-full"
                      size="txtSourceSansProRegular18Bluegray400"
                    >
                      Gain global exposure and collaborate with students from
                      different ocuntries.
                    </Text>
                  </div>
                </List>
                <div className="flex flex-row gap-8 items-center justify-center w-[28%] md:w-full">
                  <Button
                    className="cursor-pointer min-w-[175px] text-center text-lg"
                    shape="round"
                  >
                    Join
                  </Button>
                  <div className="flex flex-row items-center justify-evenly w-[36%]">
                    <a href="javascript:" className="text-blue-500 text-lg">
                      <Text size="txtSourceSansProRegular18Blue500">
                        Learn More
                      </Text>
                    </a>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                  </div>
                </div>
              </div>
            </div>
    )
}
export default Offer