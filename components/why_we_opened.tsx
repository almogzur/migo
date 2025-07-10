import Image from "next/image";
import { Stack, Typography } from "@mui/material";


const text = 'MIGO הוקמה מתוך תשוקה לטכנולוגיה ומתוך שליחות אמיתית – להפוך את המורכב לפשוט,' +
    ' ולהעניק שירות איכותי בגובה העיניים.' +
    'אנחנו כאן כדי לוודא שהטכנולוגיה תעבוד בשבילך – ולא להיפך.'



export default function WhyWeOpened() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-around"}
            width={'100%'}
            gap={2}
            mt={4}
        >

            <Image
                src="/question.png"
                alt="Why we opened"
                height={200}
                width={200}

            />

            <Stack width={'50%'}  >
                <Typography
                    variant="h2"
                    textAlign="center"
                    fontWeight={400}
                >
                    למה ?
                </Typography>
                <Typography variant="h5">
                    {text}
                </Typography>
            </Stack>
        </Stack>
    );
}
