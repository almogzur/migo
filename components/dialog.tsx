import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Fragment, useState } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { DialogProps } from '@mui/material/Dialog';
import Image from 'next/image';


export type DialogPropsType   = {
  
    modalTitle:string

    openBtnText?:string
    closedBtnText?:string
    openBtnImage?:string
    
    openBtnProps?:ButtonProps    
    closedBtnProps?:ButtonProps

    dialogProps?:Omit<DialogProps, 'open' | 'onClose'>
    children?:React.ReactNode
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({
    closedBtnText,
    openBtnText,
    openBtnProps,
    closedBtnProps,
    children,
    modalTitle,
    dialogProps,
    openBtnImage

   }:DialogPropsType) {



  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        variant="text"
       onClick={handleClickOpen}
        {...openBtnProps}
       >
      { openBtnText}
      {openBtnImage && <Image src={openBtnImage} alt={''} height={150} width={150} />}
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby={modalTitle}
        open={open}
        {...dialogProps}
      >



        <DialogContent dividers>
          {children}
        </DialogContent>

        <DialogActions>
          <Button 
             {...closedBtnProps}
             autoFocus
             onClick={handleClose}
             >
            {closedBtnText}
          </Button>
        </DialogActions>

      </BootstrapDialog>

    </Fragment>
  );
}