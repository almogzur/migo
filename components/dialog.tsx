


import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment, useState } from 'react';
import { ButtonProps } from '@mui/material/Button';
export type DialogPropsType   = {
  
    modalTitle?:string

    openButtonText:string
    openBtnProps?:ButtonProps
    
    closedBtnProps?:ButtonProps
    closedBittonText:string

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

export default function CustomizedDialogs({closedBittonText,openButtonText,openBtnProps,closedBtnProps,children,modalTitle}:DialogPropsType) {
  
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
        variant="outlined"
       onClick={handleClickOpen}
        {...openBtnProps}
       >
      {openButtonText}
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {modalTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          <Button 
             {...closedBtnProps}
             autoFocus
             onClick={handleClose}
             >
            {closedBittonText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
}