import React from 'react';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';

const EmailButton = ({
  email = 'example@example.com',
  subject = 'Hello!',
  body = 'I wanted to reach out...',
}: {
  email?: string;
  subject?: string;
  body?: string;
}) => {
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