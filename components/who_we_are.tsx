import { useWindowSize } from "@/context/window_size";
import { Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";

const text = "ב-MIGO אנחנו מאמינים שטכנולוגיה צריכה לשרת אותך. " +
    "עם ניסיון עשיר ומקצועיות חסרת פשרות, " +
    "אנחנו מספקים פתרונות מתקדמים בתחום המחשוב, התוכנה והתקשורת";

export default function WhoWeAre() {

  const { isMobile, isTablet } = useWindowSize();
    const imageSize = isMobile ? 150 : isTablet ? 180 : 220;
    const direction = isMobile ? "column" : "row";
      const textAlign = isMobile ? "center" : "justify";
        const titleVariant = isMobile ? "h4" : "h2";
     const bodyVariant = isMobile ? "body1" : "h5";

  return (
    <motion.div
    initial={{x:200}}
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
    >
      <Image
        src="/who_we_are_image.png"
        alt="מי אנחנו"
        width={imageSize}
        height={imageSize}
        style={{ objectFit: "contain" }}
      />

      <Stack
        gap={2}
        width={isMobile ? "100%" : "50%"}
        sx={{ textAlign: textAlign }}
      >
        <Typography
          variant={titleVariant}
          fontWeight="bold"
        >
          מי אנחנו ?
        </Typography>

        <Typography
          variant={bodyVariant}
          textAlign={ "center"}

        >
          {text}
        </Typography>
      </Stack>
    </Stack>
    </motion.div>
  );
}
