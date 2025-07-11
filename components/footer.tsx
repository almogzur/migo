import React from 'react';
import { Avatar, IconButton, Typography, Stack } from '@mui/material';
import { Facebook, WhatsApp, Mail } from '@mui/icons-material';
import { useWindowSize } from '@/context/window_size';

export default function Footer ()  {
    const { isMobile, } = useWindowSize();

    return (
        <Stack
            direction={isMobile ? 'column' : 'row'}
            justifyContent= { isMobile ?"space-between" : "space-around" }
            alignItems="center"
            spacing={isMobile ? 1 : 0}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
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
                spacing={1}
                justifyContent="center">
                <IconButton
                    component="a"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)' },
                    }}
                >
                    <Avatar sx={{ bgcolor: '#1877f2' }}>
                        <Facebook />
                    </Avatar>
                </IconButton>

                <IconButton
                    component="a"
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)' },
                    }}
                >
                    <Avatar sx={{ bgcolor: '#25D366' }}>
                        <WhatsApp />
                    </Avatar>
                </IconButton>

                <IconButton
                    component="a"
                    href="mailto:example@example.com"
                    sx={{
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)' },
                    }}
                >
                    <Avatar sx={{ bgcolor: '#d93025' }}>
                        <Mail />
                    </Avatar>
                </IconButton>
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
