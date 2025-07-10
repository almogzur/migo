'use client';

import {
  Card,
  CardContent,  
  Box,
  Stack,

} from '@mui/material';
import Image from 'next/image';
import CustomList, { ListItemPropsType } from './item_list';


import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import LanIcon from '@mui/icons-material/Lan';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useWindowSize } from '@/context/window_size';

import{ motion } from "framer-motion"

 const services: ListItemPropsType[] = [
    {
      text: 'שירותי מחשוב ותשתיות',
      icon: <ComputerIcon />,
    },
    {
      text: 'תמיכה טכנית מרחוק ובשטח',
      icon: <SupportAgentIcon />,
    },
    {
      text: 'פתרונות רשתות ותקשורת לעסקים',
      icon: <LanIcon />,
    },

    {
      text: 'פיתוח תוכנה ומערכות מותאמות אישית',
      icon: <BuildIcon />,
    },
  ];

  const advantages: ListItemPropsType[] = [
    {
      text: 'זמינות גבוהה ומענה אנושי מהיר',
      icon: <FlashOnIcon />,
    },
    {
      text: 'התאמה אישית לצרכים המדויקים שלך',
      icon: <HandshakeIcon />,
    },
    {
      text: 'ניסיון מוכח בעבודה עם עסקים וארגונים',
      icon: <VerifiedIcon />,
    },
    {
      text: 'שקיפות מלאה – אין הפתעות, רק פתרונות',
      icon: <VisibilityIcon />,
    },
  ];

export default function ProfileCard() {
    

  const {  isMobile , isTablet} = useWindowSize()

  const cardWidth = isMobile ? '90%' : isTablet ? 420 : 580;
  const cardHeight = isTablet ? 'auto' : 1200;

  return (
    <Box width="100%" >
      <Image
        src="/about_bg.png"
        alt=""
        width={1000}
        height={1000}
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5

        }}
      />
      <motion.div
     initial={{y:-200}}
    animate={{y:0 , rotate:[40,0]}} 
    transition={{duration: 1}}
      >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh', px: 2 }}
      >

        <Card
          sx={{
            width: cardWidth,
            height: cardHeight,
            borderRadius: 4,
            boxShadow: 8,
            p: 2,
            mb: 4,
            zIndex: 1,
          }}
          elevation={8}
        >

          {/* Content */}
          <CardContent sx={{ px: 0 }}>
            <Stack sx={{ mb: 2 }} alignItems="center">
              <Image src="/migo.png" alt="" width={isMobile ? 150 : 200} height={isMobile ? 150 : 200} />
              <Image src="/about_face.jpg" alt="" width={isMobile ? 210 : 350} height={isMobile ? 210 : 350} />
            </Stack>
          </CardContent>


   
          <Stack direction={isMobile ? "column" : "row"}>
            <CustomList texts={services} />
            <CustomList texts={advantages} />
          </Stack>
          
        </Card>
   
        
      </Box>
      </motion.div>

    </Box>
  );
}
