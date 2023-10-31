import {
    Img,
    List,
    RatingBar,
    Text,
  } from "components";

const Test=()=>{
    return(
        <div className="flex flex-col gap-[58px] items-start justify-start mt-[158px] w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtSourceSansProBold48"
                >
                  Member Testimonials
                </Text>
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtSourceSansProRegular18Bluegray400"
                >
                  Here what our members have to say about their experience with
                  UNYN
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-1/4 md:w-full">
                    <RatingBar
                      className="flex justify-between w-[136px]"
                      value={4}
                      starCount={5}
                      color="#ced1d4"
                      activeColor="#1aa7ec"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[120.00%] text-black-900 text-lg w-full"
                    size="txtSourceSansProSemibold18"
                  >
                    UNYN has provided me with incredible opportunities to grow
                    and connect with like-minded individuals.
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <Img
                      className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                      src="images/img_ellipse5.png"
                      alt="ellipseFive"
                    />
                    <div className="flex flex-col items-start justify-start w-[72%]">
                      <Text
                        className="text-base text-black-900"
                        size="txtSourceSansProRegular16"
                      >
                        John Doe
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtSourceSansProRegular12"
                        >
                          Marketing Manager, XYZ Company
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-1/4 md:w-full">
                    <RatingBar
                      className="flex justify-between w-[136px]"
                      value={4}
                      starCount={5}
                      color="#ced1d4"
                      activeColor="#1aa7ec"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[120.00%] text-black-900 text-lg w-full"
                    size="txtSourceSansProSemibold18"
                  >
                    UNYN has provided me with incredible opportunities to grow
                    and connect with like-minded individuals.
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <Img
                      className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                      src="images/img_ellipse5_60x60.png"
                      alt="ellipseFive"
                    />
                    <div className="flex flex-col items-start justify-start w-[72%]">
                      <Text
                        className="text-base text-black-900"
                        size="txtSourceSansProRegular16"
                      >
                        John Doe
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtSourceSansProRegular12"
                        >
                          Marketing Manager, XYZ Company
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
    )
}
export default Test