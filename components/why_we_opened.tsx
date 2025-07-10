import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useWindowSize } from "@/context/window_size";
import { motion } from "motion/react";

const text =
  "MIGO הוקמה מתוך תשוקה לטכנולוגיה ומתוך שליחות אמיתית – להפוך את המורכב לפשוט," +
  " ולהעניק שירות איכותי בגובה העיניים." +
  "אנחנו כאן כדי לוודא שהטכנולוגיה תעבוד בשבילך – ולא להיפך.";

export default function WhyWeOpened() {
  const { isMobile, isTablet } = useWindowSize();

  const imageSize = isMobile ? 150 : isTablet ? 180 : 220;
  const direction = isMobile ? "column" : "row";
  const textAlign = isMobile ? "center" : "justify";
  const titleVariant = isMobile ? "h4" : "h2";
  const bodyVariant = isMobile ? "body1" : "h5";

  return (
    <motion.div
    initial={{x:-200}}
    animate={{x:0}} 
    transition={{duration: 1}}
    >
    <Stack
      direction={direction}
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      gap={4}
      pt={4}
      pb={4}
      mt={4}
      px={isMobile ? 0 : 6}
      bgcolor={grey[50]}
    >
      <Image
        src="/question.png"
        alt="Why we opened"
        width={imageSize}
        height={imageSize}
        style={{ objectFit: "contain" }}
      />

      <Stack 
        width={isMobile ? "100%" : "50%"}
         textAlign={textAlign}
         >
        <Typography variant={titleVariant} fontWeight={500}>
          למה ?
        </Typography>
        <Typography variant={bodyVariant}>{text}</Typography>
      </Stack>
    </Stack>
    </motion.div>
  );
}
