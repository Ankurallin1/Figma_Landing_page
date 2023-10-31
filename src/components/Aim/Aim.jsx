import {
    Img,
    Text,
  } from "components";
const Aim=()=>{
    return(
        <>
            <div className="flex sm:flex-col flex-row md:gap-[46px] items-start justify-between mt-[147px] w-full">
              <Text
                className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtSourceSansProBold48"
              >
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  Empowering Youth for a Brighter Future:{" "}
                </span>
                <span className="text-light_blue-900 font-sourcesanspro text-left font-bold">
                  UNYN’s Impact on Youth Individuals
                </span>
              </Text>
              <Text
                className="leading-[120.00%] text-blue_gray-400 text-lg"
                size="txtSourceSansProRegular18Bluegray400"
              >
                <>
                  United Youth Network (UNYN) is dedicated to empowering young
                  individuals by providing them with opportunities for growth
                  and development. Through our international student society, we
                  aim to nurture their talents and unlock their full potential.
                  By investing in the youth today, we believe that we can create
                  a brighter and more promising future for tomorrow.
                </>
              </Text>
            </div>
            <Img
              className="h-[690px] md:h-auto mt-[60px] object-cover w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />
        </>
    )
}
export default Aim