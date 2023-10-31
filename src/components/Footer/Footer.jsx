import {
    Button,
    Img,
    Input,
    Line,
    Text,
  } from "components";

  const Footer=()=>{
    return(
        
        <div className="bg-light_blue-900 flex flex-col items-center justify-end mt-auto mx-auto p-[77px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start mt-[170px] w-[90%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-[99%] md:w-full">
                  <Img
                    className="h-8 md:h-auto object-cover w-[24%]"
                    src="images/img_unynwhitelogo01.png"
                    alt="unynwhitelogoOne"
                  />
                  <Text
                    className="leading-[120.00%] text-blue-50 text-lg w-full"
                    size="txtSourceSansProRegular18Blue50"
                  >
                    Stay up to date on the latest features and
                    releases by joining our newslatter.
                  </Text>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <Input
                      name="groupFive"
                      placeholder="Enter your email"
                      className="p-0 placeholder:text-gray-100 text-left text-lg w-full"
                      wrapClassName="sm:flex-1 rounded-[24px] sm:w-full"
                      type="email"
                      color="white_A700"
                    ></Input>
                    <Button
                      className="!text-light_blue-900 cursor-pointer min-w-[165px] text-center text-lg"
                      shape="round"
                      color="white_A700"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <Text
                    className="leading-[120.00%] text-sm text-white-A700 w-[99%] sm:w-full"
                    size="txtSourceSansProRegular14WhiteA700"
                  >
                    By subscribing, you agree to our Privacy Policy
                    and consent to receive updates from our company.{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[9%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtSourceSansProBold20"
              >
                Quick Links
              </Text>
              <ul className="flex flex-col gap-[13px] items-start justify-start md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      About us
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      Services
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      Events
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[7%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtSourceSansProBold20"
              >
                Updates
              </Text>
              <ul className="flex flex-col gap-[15px] items-start justify-start md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      News
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      FAQ’s
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700"
                  >
                    <Text size="txtSourceSansProRegular16WhiteA700">
                      Contact us
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start w-[10%] md:w-full">
              <Text
                className="text-center text-white-A700 text-xl"
                size="txtSourceSansProBold20"
              >
                Follow us
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-4 items-start justify-start">
                      <Img
                        className="h-6 w-6"
                        src="images/img_antdesigntwit.svg"
                        alt="antdesigntwit"
                      />
                      <Text
                        className="mt-0.5 text-base text-center text-white-A700"
                        size="txtSourceSansProRegular16WhiteA700"
                      >
                        Twitter
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <Img
                        className="h-6 w-6"
                        src="images/img_icoutlinefacebook.svg"
                        alt="icoutlinefacebo"
                      />
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtSourceSansProRegular16WhiteA700"
                      >
                        Facebook
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-4 items-start justify-start">
                      <Img
                        className="h-6 w-6"
                        src="images/img_riinstagramfill.svg"
                        alt="riinstagramfill"
                      />
                      <Text
                        className="mt-1 text-base text-center text-white-A700"
                        size="txtSourceSansProRegular16WhiteA700"
                      >
                        Instagram
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <Line className="bg-white-A700 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row gap-6 items-start justify-between w-[37%] md:w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtSourceSansProRegular14WhiteA700"
                  >
                    © 2023 UNYN. All rights reserved.
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row gap-6 items-start justify-between w-full">
                      <a
                        href="javascript:"
                        className="text-sm text-white-A700"
                      >
                        <Text size="txtSourceSansProRegular14WhiteA700">
                          Privacy Policy
                        </Text>
                      </a>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtSourceSansProRegular14WhiteA700"
                      >
                        Term of Service
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-sm text-white-A700"
                  size="txtSourceSansProRegular14WhiteA700"
                >
                  <span className="text-white-A700 font-sourcesanspro text-left font-normal">
                    Design and Developed by{" "}
                  </span>
                  <span className="text-white-A700 font-sourcesanspro text-left font-normal">
                    InGelt
                  </span>
                  <span className="text-white-A700 font-sourcesanspro text-left font-normal">
                    {" "}
                    Pvt. Ltd.
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Footer