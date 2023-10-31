import {
    Button,
    Img,
    Text,
    SelectBox,
  } from "components";
  const moreOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  

const Navbar=()=>{
    return(
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[43%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-12 items-center justify-between w-full">
                  <Img
                    className="h-[31px] md:h-auto object-cover"
                    src="images/img_unynbluelogo01.png"
                    alt="unynbluelogoOne"
                  />
                  <div className="flex sm:flex-1 flex-row gap-[30px] items-center justify-between w-[70%] sm:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtSourceSansProRegular18"
                    >
                      About us
                    </Text>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtSourceSansProRegular18"
                    >
                      Services
                    </Text>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtSourceSansProRegular18"
                    >
                      Events
                    </Text>
                    <SelectBox
                      className="text-black-900 text-left text-lg w-[21%] sm:w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="more"
                      options={moreOptionsList}
                      isSearchable={false}
                      placeholder="More"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[16%] md:w-full">
                <Button
                  className="cursor-pointer min-w-[175px] text-center text-lg"
                  shape="round"
                >
                  Contact us
                </Button>
              </div>
            </div>
    )
}
export default Navbar