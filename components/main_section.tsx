import { useWindowSize } from "@/context/window_size";
import { Button, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import {motion} from "framer-motion"

export default function MainSection() {
  const { isMobile, isTablet } = useWindowSize(); // ✅ FIX: added ()

  const isSmallScreen = isMobile || isTablet;

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 2}}
    >
    <Stack
      mt={isSmallScreen? 2 : undefined}
      direction={isSmallScreen ? "column" : "row"}
      gap={4}
      bgcolor={grey[50]}
      minHeight={"35vh"}
      alignItems="center"
      justifyContent={ "center"}
    >
      <Stack alignItems="center">
    <motion.div 
      style={{margin:0,padding:0}}
      animate={{rotate: 360}}
      transition={{ duration: 1}}
       >
        <Image
          src="/section_image.png"
          alt="Main Visual"
          
          height={isSmallScreen ? 200 : 450}
          width={isSmallScreen ? 200 : 550}
          style={{ maxWidth: "100%", height: "auto" , marginRight: isSmallScreen ? undefined : 0, borderRadius: isSmallScreen ? 20: 0}}
        />
        </motion.div>
      </Stack>
      <Stack

        width="100%"
        spacing={2}
        alignItems="center"
        textAlign="center"
      >
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          fontWeight={400}
        >
          מחשבים תקשורת ותוכנה
        </Typography>

        <Typography
          variant={isSmallScreen ? "h6" : "h4"}
          fontWeight={300}
        >
          פתרונות IT חכמים לעסק ולבית
        </Typography>

        <Button
          variant="contained"
          sx={{ width: 120 }}
        >
          צור קשר
        </Button>
      </Stack>
    </Stack>
    </motion.div>
  );
}
