import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useWindowSize } from "@/context/window_size";
import { motion } from "motion/react";

const text: string =
  "הטכנולוגיה זזה מהר – ואנחנו תמיד צעד לפניה. " +
  "בעולם שבו חדשנות קובעת את הקצב, אנחנו ב-MIGO מביאים לך יתרון תחרותי אמיתי. " +
  "אנו לא מסתפקים בלפתור תקלות – אנחנו מונעים אותן מראש. " +
  "הידע, הכלים והניסיון שלנו מאפשרים לך להתמקד במה שחשוב באמת: העסק שלך. " +
  "עם פתרונות טכנולוגיים מתקדמים, שירות אישי ומקצועי וליווי צמוד – אנחנו לא רק ספקים, אלא שותפים.";

export default function MovingFast() {
  const { isMobile, isTablet } = useWindowSize();

  const direction = isMobile ? "column" : "row";
  const imageSize = isMobile ? 150 : isTablet ? 180 : 220;
  const titleVariant = isMobile ? "h4" : "h2";
  const bodyVariant = isMobile ? "body1" : "h5";
  const textAlign = isMobile ? "center" : "justify";
  const textStackWidth = isMobile ? "100%" : "50%";

  return (
   <motion.div
    initial={{y:200}}
    animate={{y:0}} 
    transition={{duration: 1}}
    style={{marginBottom: isMobile ? 200: 100}}
    
    >
    <Stack
      direction={direction}
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      gap={4}
      mt={4}
      px={isMobile ? 0 : 6}
    >
      <Image
        src="/moving_fast.png"
        alt="זזים מהר"
        width={imageSize}
        height={imageSize}
        style={{ objectFit: "contain" }}
      />

      <Stack width={textStackWidth} textAlign={textAlign}>
        <Typography variant={titleVariant} fontWeight={500}>
          זזים מהר
        </Typography>
        <Typography variant={bodyVariant}>{text}</Typography>
      </Stack>
    </Stack>
    </motion.div>
  );
}
