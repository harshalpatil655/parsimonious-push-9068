import React, { useContext } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import FooterPart from "../Components/Home/Navbar/FooterPart";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { CartContext } from "../Context/CartProvider";

export const Product = () => {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <div>
      <Navbar />
      <Box w="78%" p={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {state.map((el, ind) => {
            if (ind !== 0) {
              return (
                <div>
                  <GridItem colSpan={2}>
                    <div
                      style={{
                        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                      }}
                    >
                      <img
                        style={{ height: "500px", width: "400px" }}
                        src={el.imgUrl}
                      />
                      <h1>{el.price}</h1>
                    </div>
                  </GridItem>
                </div>
              );
            }
          })}
        </Grid>
      </Box>

      <FooterPart />
    </div>
  );
};
