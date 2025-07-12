import React from 'react';
import { Typography, Stack } from '@mui/material';
import { useWindowSize } from '@/context/window_size';
import WhatsappButton from './whatsapp_btn';
import MailButton from '@/components/mail_btn';
import FacebookButton from './facebook_button';
import { getDeviceType } from './navigation_bar';
import PhoneButton from './phone_button';

export default function Footer() {
    const { isMobile, } = useWindowSize();

    return (
        <Stack
            direction={isMobile ? 'column' : 'row'}
            justifyContent={isMobile ? "space-between" : "space-around"}
            alignItems="center"
            spacing={isMobile ? 1 : 0}
            sx={{

                px: isMobile ? 2 : 4,
                py: isMobile ? 1 : 2,
                boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
                zIndex: 1000,
                background: '#fff',
                textAlign: isMobile ? 'center' : 'inherit',
            }}
        >
            <Typography variant="h6" fontWeight={500}>
                צור קשר
            </Typography>

            <Stack
                direction="row"
                justifyContent="center">
                    <WhatsappButton />
                    <MailButton />
                    <FacebookButton  />
                           {getDeviceType() === 'Mobile' &&
                                            <PhoneButton />
                                               }

            </Stack>

            <Stack>
                <Typography variant="body2" color="text.secondary">
                    © 2025 MIGO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    כל הזכויות שמורות
                </Typography>

            </Stack>

        </Stack>
    );
};
