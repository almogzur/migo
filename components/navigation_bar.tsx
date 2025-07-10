import { Stack, Button } from "@mui/material";
import Image from "next/image";
import CustomizedDialogs from "./dialog";
export default function NavigationBar() {



    return (
        <Stack
            direction={"row"}
            width={"100%"}
        >
            <Stack
                direction={"row"}
                sx={{ marginRight: "20px" }}
                gap={2}
                alignItems={"center"}
                justifyItems={"center"}
                alignContent={"center"}

            >
               
                <CustomizedDialogs 
                    openButtonText="צור קשר"
                    openBtnProps={{
                        variant: "contained",
                        sx: { marginLeft: "25px", borderRadius: 2, width: "100px" }
                    }} 
                    closedBittonText={"סגור"}
                                         />
                <Button variant="text" >אודות</Button>
                <Button variant="text" >עזרה</Button>
 
            </Stack>


            <Stack
                direction={"row"}
                sx={{
                    marginLeft: "auto"
                }}
            >

            </Stack>
            <Image
                src="/migo.png"
                alt="migo"
                width={120}
                height={120}
                style={{
                    marginLeft: 10,

                     }} />
        </Stack>


    )
}