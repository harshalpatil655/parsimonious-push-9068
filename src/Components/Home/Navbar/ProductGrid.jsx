import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/ProductGrid.module.css";

export const ProductGrid = () => {
  return (
    <div>
      <Box style={{ margin: "auto" }} w="93%" p={4} color="white">
        <Grid
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={4} colSpan={8}>
            <div>
              <img
                className={styles.img1}
                src="https://images.ctfassets.net/5de70he6op10/6L7PLVnwzkVxVSXUzc12WN/013637593738020d6885650c300d2207/LS_M1.jpg?w=1756&q=80&fm=webp"
                alt="one"
              />
              <Button className={styles.but1}>
                Shop new clothing & accessories
              </Button>
            </div>
          </GridItem>
          <GridItem rowSpan={3} colSpan={4}>
            <div>
              <img
                className={styles.img2}
                src="https://images.ctfassets.net/5de70he6op10/64HS0WF1TcoLPFrhsQeQzH/676b1f2c8c04a9d6e79d93cdbf4f3220/RR_Jeans.jpg?w=856&q=80&fm=webp"
                alt="two"
              />
              <Button className={styles.but2}>shop jeans</Button>
            </div>
          </GridItem>
          <GridItem rowSpan={3} colSpan={4}>
            <div>
              <img
                className={styles.img3}
                src="https://images.ctfassets.net/5de70he6op10/zMXnxHpTVbbedCkuXDs3j/0a25583d2ace13fba8e11b2709f6701a/RR_NewArrivals.jpg?w=856&q=80&fm=webp"
                alt="three"
              />
              <Button className={styles.but3}>shop kitchen & dining</Button>
            </div>
          </GridItem>
          <GridItem rowSpan={4} colSpan={4}>
            <div>
              <img
                className={styles.img4}
                src="https://images.ctfassets.net/5de70he6op10/PyCTRdNDeeACFfzYKTHc2/785b46381bf9362de695cf48cc35efd9/2UP_Tops.jpg?w=856&q=80&fm=webp"
                alt="four"
              />
            </div>
            <Button className={styles.but4}>shop tops</Button>
          </GridItem>
          <GridItem rowSpan={4} colSpan={4}>
            <div>
              <img
                className={styles.img5}
                src="https://images.ctfassets.net/5de70he6op10/4N5KvWIEA9kzUKUvlCjFr9/a3fa55ed35c1e319d26fadaa0468b46e/2UP_NewAccessories.jpg?w=856&q=80&fm=webp"
                alt="five"
              />
            </div>
            <Button className={styles.but5}>shop tops</Button>
          </GridItem>
          <GridItem rowSpan={3} colSpan={4}>
            <div>
              <img
                className={styles.img6}
                src="https://images.ctfassets.net/5de70he6op10/2A5JcSP9weOEvCYtMm5D8Y/75c5d03edf5e2a36e0a3ca453b1dfee7/RR_BHLDN.jpg?w=856&q=80&fm=webp"
                alt="six"
              />
              <Button className={styles.but6}>shop bhldn weddings</Button>
            </div>
          </GridItem>
          <GridItem rowSpan={4} colSpan={8}>
            <div>
              <img
                className={styles.img7}
                src="https://images.ctfassets.net/5de70he6op10/1kAlTgmTgNVwEvOdaygujG/24f380d0322fd28b161dbbf9b439d6d4/LS_M2.jpg?w=1756&q=80&fm=webp"
                alt="seven"
              />
              <Button className={styles.but7}>shop the exclusive collab</Button>
            </div>
          </GridItem>
          <GridItem rowSpan={4} colSpan={4}>
            <div>
              <img
                className={styles.img8}
                src="https://images.ctfassets.net/5de70he6op10/6TIhpD3Lh2NHWsTFjH5A4h/2dc26213931d34768ea089d58dedd3f8/071122_HPG_RR_Shoes.jpg?w=856&q=80&fm=webp"
                alt="eight"
              />
              <Button className={styles.but8}>shop shoes</Button>
            </div>
          </GridItem>
        </Grid>
      </Box>
      <Box style={{ margin: "auto" }} w="93%" p={4} color="white">
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1} bg="tomato">
            <div>
              <img
                className={styles.img9}
                src="https://images.ctfassets.net/5de70he6op10/FVlmjk59pwYLRQ7fpD8TI/98f6c5a1d360224a786a4cbb3f998ab4/LS_M3.jpg?w=2694&q=80&fm=webp"
                alt="nine"
              />
              <Button className={styles.but9}>shop dresses</Button>
            </div>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};
