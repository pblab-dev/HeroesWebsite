import { Box } from "native-base";

function Card({ children, ...restProps }) {
  return (
    <Box {...restProps}>
      <Box
        w="100%"
        bg="rgba(28, 25, 23, 0.2)"
        borderRadius={5}
        p={10}
        pt={5}
        // borderColor="rgba(28, 25, 23, 0.2)"
        // borderWidth="4px"
      >
        {children}
      </Box>
    </Box>
  );
}

export default Card;
