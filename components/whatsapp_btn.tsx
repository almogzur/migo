import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import Image from 'next/image';

interface WhatsappButtonProps {
  phone?: string;
  text?: string;
  dialcode?: string;
  invitecode?: string;
  responsive?: boolean;
  redirect?: boolean;
  leading?: boolean;
  dialog?: boolean;
}

export const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phone = '',
  text = 'Hi!',
  dialcode = '',
  invitecode = '',
  redirect = false,
}) => {
  const [link, setLink] = useState('');
  const [appLink, setAppLink] = useState('');
  

  useEffect(() => {
    const pre = invitecode
      ? 'https://chat.whatsapp.com/'
      : 'https://api.whatsapp.com/send?';
    const appPre = invitecode ? 'whatsapp://chat/?' : `whatsapp://send/?`;

    const url = invitecode
      ? `${invitecode}`
      : `phone=${dialcode}${phone}&text=${encodeURIComponent(text)}`;

    setLink(`${pre}${url}`);
    setAppLink(`${appPre}${url}`);
  }, [phone, text, dialcode, invitecode]);

  const handleClick = () => {
    
    window.open(redirect ? link : appLink);
  };

  return (
    <>
      <Box>
        <Button
          onClick={handleClick}
          variant='text'
        >
            <Image src={'/whatsapp_icon.png'} alt={''}   width={150} height={150} />
        </Button>
      </Box>


    </>
  );
};

export default WhatsappButton;