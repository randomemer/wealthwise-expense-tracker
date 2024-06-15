import homeBgImg from "@/public/images/home-bg.png";
import { styled } from "@mui/material";

export const IndexMain = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;

  background-image: url(${homeBgImg.src});
  background-size: cover;
`;
