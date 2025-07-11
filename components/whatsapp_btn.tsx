import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import Image from 'next/image';

interface WhatsappButtonProps {
  phone?: string;
  text?: string;
  dialcode?: string; // Must be full country code like '972'
  invitecode?: string;
  redirect?: boolean; // If true, always use web link
}

export const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phone = '524638610',
  text = 'שלום הגעתי מאתר ',
  dialcode = '972',
  invitecode = '',

}) => {
  const [link, setLink] = useState('');

  useEffect(() => {
    let pre = '';
    let url = '';

    if (invitecode) {
      pre = 'https://chat.whatsapp.com/';
      url = invitecode;
    } else {
      pre = 'https://api.whatsapp.com/send?';
      url = `phone=${dialcode}${phone}&text=${encodeURIComponent(text)}`;
    }

    setLink(`${pre}${url}`);
  }, [phone, text, dialcode, invitecode]);

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Box>
      <Button onClick={handleClick} variant="text">
        <Image src="/whatsapp_icon.png" alt="WhatsApp" width={150} height={150} />
      </Button>
    </Box>
  );
};

export default WhatsappButton;
