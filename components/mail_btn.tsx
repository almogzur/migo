import React from 'react';
import {  Button } from '@mui/material';
import { FcFeedback } from "react-icons/fc";


export  type EmailButtonProps = {
  email?: string;
  subject?: string;
  body?: string;
  size?: number
}

const EmailButton = ({
  email = 'almogz.dev@gamil.com',
  subject = '',
  body = 'היי הגעתי מהאתר ',
  size = 40

}: EmailButtonProps ) => {


  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (

    <Button
      variant="text"
      onClick={handleClick}
    >
      <FcFeedback size={size}/>
    </Button>

  );
};

export default EmailButton;