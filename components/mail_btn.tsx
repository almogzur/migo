import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';


export  type EmailButtonProps = {
  email?: string;
  subject?: string;
  body?: string;
}

const EmailButton = ({
  email = 'almogz.dev@gamil.com',
  subject = '!',
  body = 'I wanted to reach out...',
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
        <Image src={'/mail_icon.png'} alt={''} height={150} width={150} />
    </Button>
  );
};

export default EmailButton;