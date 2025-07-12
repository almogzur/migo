import { Stack, Button } from "@mui/material";
import Image from "next/image";
import CustomizedDialogs from "./dialog";
import WhatsAppBtn from "./whatsapp_btn";
import { useRouter } from "next/router";
import { useWindowSize } from "@/context/window_size";
import MailButton from "@/components/mail_btn";
import PhoneButton from "./phone_button";
import FacebookButton from "./facebook_button";


 export   function getDeviceType() {
        const userAgent = navigator.userAgent;
        if (/Mobi|Android/i.test(userAgent)) {
            return "Mobile";
        } else if (/Tablet|iPad/i.test(userAgent)) {
            return "Tablet";
        } else {
            return "Desktop";
        }
    }



export default function NavigationBar() {

    const router = useRouter();
    const { isMobile, isTablet } = useWindowSize();

    const isSmallScreen = isMobile || isTablet;
    const imageWidthSize = isMobile ? 100 : isTablet ? 120 : 140;
    const imageHeightSize = isMobile ? 100 : 120;




    return (

        <Stack
            direction={"row"}
            width={"100%"}
            height={"70px"}
            alignItems={"center"}


        >
            <Stack
                direction={"row"}
                sx={{ marginRight: isSmallScreen ? 0 : "20px" }}
                gap={0}
                alignItems={"center"}
                justifyItems={"center"}
                alignContent={"center"}
            >

                <CustomizedDialogs
                    openBtnText="צור קשר"
                    openBtnProps={{ sx: { width: "100px" } }}
                    modalTitle="אפשריות  "
                    closedBtnText={"סגור"}
                    dialogProps={{  fullWidth: true}}
                    >
                    <Stack
                        direction={isSmallScreen ? "column" : "row"}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <WhatsAppBtn size={100} />
                        <MailButton size={100}/>
                        <FacebookButton size={100}/>
                         {getDeviceType() === 'Mobile' &&
                        <PhoneButton size={100}/>
                           }


                    </Stack>



                </CustomizedDialogs>

                {router.pathname !== "/about" &&
                    <Button
                        variant="text"
                        onClick={() => router.push("/about")}
                    >אודות
                    </Button>}

                {router.pathname !== "/" &&
                    <Button
                        onClick={() => router.push("/")}
                        variant="text"
                    >
                        דף הבית
                    </Button>
                }

            </Stack>



            <Image
                src="/migo.png"
                alt="migo"
                width={imageWidthSize}
                height={imageHeightSize}
                style={{ marginRight: 'auto' }}
            />
        </Stack>



    )
}