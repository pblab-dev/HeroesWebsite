import { Box } from "native-base";

function Card({ children, ...restProps }) {
  return (
    <Box
      bg="rgba(28, 25, 23, 0.2)"
      borderRadius={5}
      p={10}
      pt={5}
      m={10}
      {...restProps}
      // borderColor="rgba(28, 25, 23, 0.2)"
      // borderWidth="4px"
    >
      {children}
    </Box>
  );
}

export default Card;
