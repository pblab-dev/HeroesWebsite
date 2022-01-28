import { Box } from "native-base";

function Card({ children }) {
  return (
    <Box bg="rgb(112, 115, 25)" borderRadius={3}>
      {children}
    </Box>
  );
}

export default Card;
