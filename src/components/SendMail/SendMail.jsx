
import {useState} from 'react'
import {
    Button,
    Input,
    Text,
    TextArea,
  } from "components";
const SendMail=()=>{
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: name,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      mode:"cors",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
    return(
        <div className="flex flex-col gap-[17px] items-start justify-start mb-0.5 mt-[5px] w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                      size="txtSourceSansProBold48"
                    >
                      Say something
                    </Text>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <input 
                      type='text'
                      className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full" 
                      placeholder='Your Name'
                      onChange={(e) => setName(e.target.value)}  
                      />
                      <input 
                      type='text'
                      className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full" 
                      placeholder='Your Mail'
                      onChange={(e) => setEmail(e.target.value)}  
                      />
                      <textarea
                       className="bg-transparent border border-light_blue-900 border-solid pb-[35px] pl-[22px] pr-[35px] pt-[19px] sm:px-5 rounded-[10px] text-base placeholder:text-blue_gray-400 text-blue_gray-400 text-left w-full"
                        placeholder='Your Message'
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <Button className="cursor-pointer min-w-[480px] sm:min-w-full rounded-[10px] text-center text-lg" onClick={() => sendEmail()}>
                        Send
                      </Button>
                    </div>
                  </div>
    )
}
export default SendMail