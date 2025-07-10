import { Button, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

export default function MainSection() {
    return (
        <Stack 
            direction={"row"} 
            gap={2}
             bgcolor={grey[50]} 
             
             >
            <Stack>
            <Image
                src={'/main_section_image.png'}
                alt={""}
                height={300}
                width={300}
            />
            </Stack>
            
            <Stack
                width={"100%"}             
            >
                <Typography
                    variant="h2"
                    textAlign={"center"}
                    fontWeight={400}
                > מחשבים תקשורת  ותוכנה 
                </Typography>

                <Typography 
                variant="h4"
                textAlign={"center"}
                fontWeight={300}
                > פתרונות IT חכמים  לעסק ולבית 
                </Typography>
                <Button
                 sx={{width:100,alignSelf:"center",margin:"auto"}} 
                 
                 >צור קשר</Button>
            </Stack>
               
        </Stack>
    )
}