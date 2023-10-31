import {
    Img,
    Text,
  } from "components";
const Join=()=>{
    return(
        <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-40 w-full">
              <div className="flex flex-col gap-4 items-center justify-start">
                <Text
                  className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtSourceSansProBold48"
                >
                  Unlock Your Potential and Make a Lasting Impact with UNYN
                </Text>
                <Text
                  className="leading-[120.00%] text-blue_gray-400 text-lg w-full"
                  size="txtSourceSansProRegular18Bluegray400"
                >
                  Joining UNYN offers a unique opportunity for personal growth,
                  professional development, and making a positive difference in
                  the world. Our dynamic and impactful international student
                  society is dedicated to nurturing the talents and potential of
                  young individuals across colleges and universities worldwide.
                  Through our diverse range of programs, events, and
                  initiatives, we empower the youth today to create a brighter
                  and more promising future for tomorrow.
                </Text>
              </div>
              <Img
                className="h-[544px] md:h-auto object-cover"
                src="images/img_rectangle6.png"
                alt="rectangleSix"
              />
              
            </div>
    )
}
export default Join