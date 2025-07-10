import { Stack, Typography } from "@mui/material";
import Image from "next/image";


const text = "ב-MIGO אנחנו מאמינים שטכנולוגיה צריכה לשרת אותך.   " +
    "עם ניסיון עשיר ומקצועיות חסרת פשרות," +
    " אנחנו מספקים פתרונות מתקדמים בתחום המחשוב," +
    "התוכנה והתקשורת"

export default function WhoWeAre() {
    return (
        <Stack
            direction={"row"}
            width={'100%'}
            gap={2}
            justifyContent={"space-around"}
            mt={4}
            


        >
            <Image
                src={'/who_we_are_image.png'}
                alt={""}
                height={200}
                width={200}

            />
            <Stack
                gap={1}
                sx={{ marginRight: "25px" }}
                width={'50%'}
            >
                <Typography
                    variant="h2"
                    textAlign={"center"} >
                    מי אנחנו
                </Typography>

                <Typography
                    textAlign={"center"}
                    variant="h5"

                >
                    {text}
                </Typography>

            </Stack>




        </Stack>
    )
}