import {
    Img,
    Text,
  } from "components";

const GetContact=()=>{
    return(
        <div className="flex flex-col gap-8 items-start justify-start mb-[43px] ml-[150px] mt-[43px] w-[28%] z-[1]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                      size="txtSourceSansProBold48"
                    >
                      Get in touch
                    </Text>
                    <Text
                      className="leading-[120.00%] mt-0.5 text-gray-700 text-lg w-full"
                      size="txtSourceSansProRegular18Gray700"
                    >
                      <span className="text-cyan-900 font-sourcesanspro text-left font-semibold">
                        Contact with our team
                      </span>
                      <span className="text-gray-700 font-sourcesanspro text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-gray-700 font-sourcesanspro text-left font-normal">
                        to talk about how we can help your business process at
                        scale, or sign up for more info
                      </span>
                      <span className="text-gray-700 font-sourcesanspro text-left font-normal">
                        {" "}
                      </span>
                    </Text>
                  </div>
                  <ul className="flex flex-col gap-4 items-start justify-start w-[91%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-start">
                          <Img
                            className="h-6 w-6"
                            src="images/img_mdiaddressmarker.svg"
                            alt="mdiaddressmarke"
                          />
                          <Text
                            className="leading-[120.00%] text-black-900 text-lg w-[88%] sm:w-full"
                            size="txtSourceSansProRegular18"
                          >
                            1-4929, Lane No. 6, Balbirnagar Ext., Shahdara,
                            Delhi 110032
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-center justify-start">
                          <Img
                            className="h-6 w-6"
                            src="images/img_call.svg"
                            alt="call"
                          />
                          <Text
                            className="text-black-900 text-lg"
                            size="txtSourceSansProRegular18"
                          >
                            +91-8888888888
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-center justify-start">
                          <Img
                            className="h-6 w-6"
                            src="images/img_icsharpemail.svg"
                            alt="icsharpemail"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900 text-lg"
                              size="txtSourceSansProRegular18"
                            >
                              info@unyn.com
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
    )
}
export default GetContact