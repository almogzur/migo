import { Button } from '@mui/material'
import { green } from '@mui/material/colors';
import { BiSolidPhoneCall } from "react-icons/bi";



export type PhoneButtonProps = {
size?:number
}   

export default function PhoneButton ({ size=40}:PhoneButtonProps) {

const handleCall = () => {
    window.location.href = 'tel:+972524638610'; // Replace with your number
  };

return (
    <Button variant="text" onClick={handleCall} >
        <BiSolidPhoneCall color={green[500]} size={size } />
    </Button>
)


}