import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const ProductGrid = () => {
  return (
    <div>
      <Box
        style={{ margin: "auto", border: "1px solid red" }}
        w="93%"
        p={4}
        color="white"
      >
        <Grid
          templateRows="repeat(8, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={3} colSpan={3} bg="tomato">
            <img
              alt="one"
              src="https://images.ctfassets.net/5de70he6op10/6L7PLVnwzkVxVSXUzc12WN/013637593738020d6885650c300d2207/LS_M1.jpg?w=1756&q=80&fm=webp"
            />
          </GridItem>
          <GridItem rowSpan={4} colSpan={2} bg="tomato">
            {" "}
            <img
              alt="two"
              src="https://images.ctfassets.net/5de70he6op10/64HS0WF1TcoLPFrhsQeQzH/676b1f2c8c04a9d6e79d93cdbf4f3220/RR_Jeans.jpg?w=856&q=80&fm=webp"
            />
          </GridItem>
          <GridItem rowSpan={4} colSpan={2} bg="tomato" />
          <GridItem rowSpan={2} colSpan={2} bg="tomato" />
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem rowSpan={4} colSpan={2} bg="tomato" />
        </Grid>
      </Box>
    </div>
  );
};
