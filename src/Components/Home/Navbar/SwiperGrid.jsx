import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styles from "../Navbar/CSS/SwiperGrid.module.css";

export const SwiperGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>You May Also Like</h1>
      </div>
      <div className={styles.bor}></div>
      <Box className={styles.box2} w="93%" p={4}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem w="100%">
            <div>
              <img
                className={styles.img1}
                src="https://images.urbndata.com/is/image/Anthropologie/65889495_006_b?$an-category$&qlt=80&fit=constrain"
                alt="one"
              />
              <h1>Briar Side Plate</h1>
            </div>
          </GridItem>
          <GridItem w="100%">
            <div>
              <img
                className={styles.img2}
                src="https://images.urbndata.com/is/image/Anthropologie/45405812AG_006_b?$an-category$&qlt=80&fit=constrain"
                alt="two"
              />
              <h1>Rivulets Euro Sham</h1>
            </div>
          </GridItem>
          <GridItem w="100%">
            <div>
              <img
                className={styles.img3}
                src="https://images.urbndata.com/is/image/Anthropologie/68836592_220_b?$an-category$&qlt=80&fit=constrain"
                alt="three"
              />
              <h1>Cookie Scented Ballerina Doll</h1>
            </div>
          </GridItem>
          <GridItem w="100%">
            <div>
              <img
                className={styles.img4}
                src="https://images.urbndata.com/is/image/Anthropologie/48943211_004_b?$an-category$&qlt=80&fit=constrain"
                alt="four"
              />
              <h1>Constance TieBack</h1>
            </div>
          </GridItem>
        </Grid>
      </Box>
      <div className={styles.head2}>
        <h1>Trending Now</h1>
      </div>
      <div className={styles.bor2}></div>
      <Box style={{ margin: "auto" }} w="93%" p={4}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%">
            <img
              className={styles.img5}
              src="https://images.urbndata.com/is/image/Anthropologie/68090588_066_b?$an-category$&qlt=80&fit=constrain"
              alt="one"
            />
            <h1>Botanist Abroad Floral Earrings</h1>
          </GridItem>
          <GridItem w="100%">
            <img
              className={styles.img6}
              src="https://images.urbndata.com/is/image/Anthropologie/40110009_011_a?$an-category$&qlt=80&fit=constrain"
              alt="two"
            />
            <h1>Badgley Mischka Gigi Flats</h1>
          </GridItem>
          <GridItem w="100%">
            <img
              className={styles.img7}
              src="https://images.urbndata.com/is/image/Anthropologie/4123583310007_040_b?$an-category$&qlt=80&fit=constrain"
              alt="three"
            />
            <h1>Meave The Colette Faux Leather Pants</h1>
          </GridItem>
          <GridItem w="100%">
            <img
              className={styles.img8}
              src="https://images.urbndata.com/is/image/Anthropologie/66292673_001_b?$an-category$&qlt=80&fit=constrain"
              alt="four"
            />
            <h1>Bali Circle Crossbody Bag</h1>
          </GridItem>
          <GridItem w="100%">
            <img
              className={styles.img9}
              src="https://images.urbndata.com/is/image/Anthropologie/B28128841_014_b?$an-category$&qlt=80&fit=constrain"
              alt="five"
            />
            <h1>Washed Wood Six-Drawer Dresser</h1>
          </GridItem>
        </Grid>
      </Box>
      <Box style={{ marin: "auto" }} w="100%" p={4}>
        <div className={styles.head3}>
          <h1>More to Explore</h1>
        </div>
        <div className={styles.bor3}></div>
      </Box>
      <Box style={{ margin: "auto" }} w="93%" p={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%">
            <img
              className={styles.img10}
              src="https://images.ctfassets.net/5de70he6op10/6tH64sV86gPTuv61SGwSdJ/a1ebca8dd5b76585f243785f9aff1d8a/MTE_01.jpg?w=856&q=80&fm=webp"
              alt="one"
            />
            <h1
              style={{
                fontSize: "27px",
                textAlign: "start",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Good Jeans : The Denim Fit Guide
            </h1>
            <p style={{ textAlign: "start", fontSize: "14px" }}>
              Introducing the perfect pairs for every wear. From rise to size,
              here's how to find your favourite jeans
            </p>
            <p
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "12px",
                textAlign: "start",
              }}
            >
              find your fit
            </p>
          </GridItem>
          <GridItem w="100%">
            <img
              className={styles.img11}
              src="https://images.ctfassets.net/5de70he6op10/1VBN5qcyiZzeTQ4o5OGPfP/0d1ca087d53e94d2c8829b74e08ae99d/MTE_Bedding.jpg?w=856&q=80&fm=webp"
              alt="two"
            />
            <h1
              style={{
                fontSize: "27px",
                textAlign: "start",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Suite Dreams
            </h1>
            <p style={{ textAlign: "start", fontSize: "14px" }}>
              A serene sanctuary encourages relaxation; a superior sanctuary
              inspires imagination
            </p>

            <p
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "12px",
                textAlign: "start",
              }}
            >
              welcome guests warmly
            </p>
          </GridItem>
          <GridItem w="100%">
            <img
              className={styles.img12}
              src="https://images.ctfassets.net/5de70he6op10/5z1SzJjtkNuitP2HKuc7Ww/4f0f76621a8587e50d4b9e96a30edf36/041122_HPG_MTE_GreaterGood.jpg?w=856&q=80&fm=webp"
              alt="three"
            />
            <h1
              style={{
                fontSize: "27px",
                textAlign: "start",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              A Greater Good
            </h1>
            <p style={{ textAlign: "start", fontSize: "14px" }}>
              Our priority: to be a force for good, a greator good, in better
              service of our planets, its people, and our products.
            </p>

            <p
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "12px",
                textAlign: "start",
              }}
            >
              learn more about our journey
            </p>
          </GridItem>
        </Grid>
      </Box>
      <Box w="100%" p={4}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Extra 40% off sale items are final sale. Exclusions apply-see- </p>
          <p style={{ textDecoration: "underline" }}>details</p>
        </div>
      </Box>
      <Box style={{ marin: "auto" }} w="100%" p={4}>
        <div className={styles.head4}>
          <h1>About Us</h1>
        </div>
        <div className={styles.bor4}></div>
        <p
          style={{
            textAlign: "start",
            width: "93%",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our products with care, ensuring that any
          treasure you find at Anthropologie is unique, just like you. Explore
          our dress shop to find styles and fits perfect for any occasi...
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "blue",
            textDecoration: "underline",
            borderBottom: "solid gray",
            textAlign: "start",
            width: "93%",
            margin: "auto",
            paddingBottom: "15px",
          }}
        >
          Read More
        </p>
      </Box>
    </div>
  );
};
