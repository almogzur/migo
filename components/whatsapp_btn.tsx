import React, {  useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { TbBrandWhatsappFilled } from "react-icons/tb";

interface WhatsappButtonProps {
  phone?: string;
  text?: string;
  dialcode?: string; // Must be full country code like '972'
  invitecode?: string;
  redirect?: boolean; // If true, always use web link
  size?:number
}

export const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phone = '524638610',
  text = 'שלום הגעתי מאתר ',
  dialcode = '972',
  invitecode = '',
  size=40


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

      <Button onClick={handleClick} variant="text">
        <TbBrandWhatsappFilled color={'#37db52'} size={size} />
      </Button>

  );
};

export default WhatsappButton;
