import { Button } from "@mui/material";
import { FaSquareFacebook } from "react-icons/fa6";

export type FacebookButtonProps = {
  size?: number;
};

export default function FacebookButton({
  size = 40,
}: FacebookButtonProps) {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61578252779932",
      "_blank"
    );
  };

  return (
    <Button variant="text" onClick={handleClick}>
      <FaSquareFacebook size={size} />
    </Button>
  );
}
