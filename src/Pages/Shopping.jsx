import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Select,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import Navbar from "../Components/Home/Navbar/Navbar";
import styles from "./Shopping.module.css";
import FooterPart from "../Components/Home/Navbar/FooterPart";
import { CartContext } from "../Context/CartProvider";

let mydata = [
  {
    id: 1,
    img: "https://images.urbndata.com/is/image/Anthropologie/4115650590054_072_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: " Maeve Double-Breasted Blazer",
    price: "$178.00",
  },
  {
    id: 2,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123650590179_024_b15?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Maeve Wide-Leg Trousers",
    price: "$140.00",
  },
  {
    id: 3,
    img: "https://images.urbndata.com/is/image/Anthropologie/78065562_049_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Current Air Neck Tie",
    price: "$38.00",
  },
  {
    id: 4,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123057270018_015_b5?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Paige Avedon Trousers",
    price: "$249",
  },
  {
    id: 5,
    img: "https://images.urbndata.com/is/image/Anthropologie/67845016_025_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Schutz Mary Boots",
    price: "$218.00",
  },
  {
    id: 6,
    img: "https://images.urbndata.com/is/image/Anthropologie/4113086690037_004_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Ribbed Vest",
    price: "$148.00",
  },
  {
    id: 7,
    img: "https://images.urbndata.com/is/image/Anthropologie/4115607630002_010_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Maeve Collegiate Blazer",
    price: "$149.00",
  },
  {
    id: 8,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123650590225_211_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Maeve Plaid Trousers",
    price: "$150.00",
  },
  {
    id: 9,
    img: "https://images.urbndata.com/is/image/Anthropologie/4120257230045_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Brooklyn Leather Pinafore",
    price: "$110.00",
  },
  {
    id: 10,
    img: "https://images.urbndata.com/is/image/Anthropologie/69326593_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Dolce Vita Heels",
    price: "$115.00",
  },
  {
    id: 11,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123942140004_038_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Exquise Patterned Trousers",
    price: "$180.00",
  },
  {
    id: 12,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123650590220_059_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Margot Kick-Flare Pants",
    price: "$98.00",
  },
  {
    id: 13,
    img: "https://images.urbndata.com/is/image/Anthropologie/65515702_031_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Favorite Daughter Bodysuit",
    price: "$198.00",
  },
  {
    id: 14,
    img: "https://images.urbndata.com/is/image/Anthropologie/4115650590053_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Corduroy Duster",
    price: "$180.00",
  },
  {
    id: 15,
    img: "https://images.urbndata.com/is/image/Anthropologie/4130647160142_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Printed Dress",
    price: "$180.00",
  },
  {
    id: 16,
    img: "https://images.urbndata.com/is/image/Anthropologie/4113368730008_041_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Sweater",
    price: "$98.00",
  },
  {
    id: 17,
    img: "https://images.urbndata.com/is/image/Anthropologie/4113368730011_018_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Puff-Sleeve Sweater",
    price: "$198.00",
  },
  {
    id: 18,
    img: "https://images.urbndata.com/is/image/Anthropologie/4130556770001_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Dress",
    price: "$180.00",
  },
  {
    id: 19,
    img: "https://images.urbndata.com/is/image/Anthropologie/4115650590054_072_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: " Maeve Double-Breasted Blazer",
    price: "$178.00",
  },
  {
    id: 20,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123650590179_024_b15?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Maeve Wide-Leg Trousers",
    price: "$140.00",
  },
  {
    id: 21,
    img: "https://images.urbndata.com/is/image/Anthropologie/78065562_049_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Current Air Neck Tie",
    price: "$38.00",
  },
  {
    id: 22,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123057270018_015_b5?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Paige Avedon Trousers",
    price: "$249",
  },
  {
    id: 23,
    img: "https://images.urbndata.com/is/image/Anthropologie/67845016_025_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Schutz Mary Boots",
    price: "$218.00",
  },
  {
    id: 24,
    img: "https://images.urbndata.com/is/image/Anthropologie/4113086690037_004_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Ribbed Vest",
    price: "$148.00",
  },
  {
    id: 25,
    img: "https://images.urbndata.com/is/image/Anthropologie/4115607630002_010_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Maeve Collegiate Blazer",
    price: "$149.00",
  },
  {
    id: 26,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123650590225_211_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Maeve Plaid Trousers",
    price: "$150.00",
  },
  {
    id: 27,
    img: "https://images.urbndata.com/is/image/Anthropologie/4120257230045_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Brooklyn Leather Pinafore",
    price: "$110.00",
  },
  {
    id: 28,
    img: "https://images.urbndata.com/is/image/Anthropologie/69326593_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Dolce Vita Heels",
    price: "$115.00",
  },
  {
    id: 29,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123942140004_038_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Exquise Patterned Trousers",
    price: "$180.00",
  },
  {
    id: 30,
    img: "https://images.urbndata.com/is/image/Anthropologie/4123650590220_059_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Margot Kick-Flare Pants",
    price: "$98.00",
  },
  {
    id: 31,
    img: "https://images.urbndata.com/is/image/Anthropologie/65515702_031_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Favorite Daughter Bodysuit",
    price: "$198.00",
  },
  {
    id: 32,
    img: "https://images.urbndata.com/is/image/Anthropologie/4115650590053_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Corduroy Duster",
    price: "$180.00",
  },
  {
    id: 33,
    img: "https://images.urbndata.com/is/image/Anthropologie/4130647160142_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Printed Dress",
    price: "$180.00",
  },
  {
    id: 34,
    img: "https://images.urbndata.com/is/image/Anthropologie/4113368730008_041_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Sweater",
    price: "$98.00",
  },
  {
    id: 35,
    img: "https://images.urbndata.com/is/image/Anthropologie/4113368730011_018_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Puff-Sleeve Sweater",
    price: "$198.00",
  },
  {
    id: 36,
    img: "https://images.urbndata.com/is/image/Anthropologie/4130556770001_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Anthropologie Dress",
    price: "$180.00",
  },
];

export const Shopping = () => {
  const [data, setData] = useState(mydata);

  const { state, dispatch } = useContext(CartContext);
  const handleClick = (id) => {
    data.filter((el) => {
      if (el.id === id) {
        dispatch({
          type: "add",
          id: Date.now(),
          imgUrl: el.img,
          price: el.price,
        });
      }
    });
  };
  console.log(state);
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "600px" }}>
          <Box w="100%" p={4}>
            <VStack
              divider={<StackDivider borderColor="lightgray" />}
              spacing={4}
              align="stretch"
            >
              <Box h="100px">
                <div style={{ textAlign: "start" }}>Browse by:</div>
                <div
                  style={{
                    textDecoration: "underline",
                    color: "#70b2be",
                    textAlign: "start",
                  }}
                >
                  Shop All New Arrivals
                </div>
                <div style={{ borderTop: "1px solid lightgray" }}>Clothing</div>
                <div>Shoes</div>
                <div>Accessories</div>
              </Box>
              <Box h="20px">
                <p>Filter by:</p>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>Price</div>
                  <div>
                    <AiOutlinePlus />
                  </div>
                </div>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>Color</div>
                  <div>
                    <AiOutlinePlus />
                  </div>
                </div>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>Brand</div>
                  <div>
                    <AiOutlinePlus />
                  </div>
                </div>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>Size</div>
                  <div>
                    <AiOutlinePlus />
                  </div>
                </div>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>In Stock</div>
                  <div>
                    <AiOutlinePlus />
                  </div>
                </div>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>Free Pickup</div>
                  <div>
                    <AiOutlinePlus />
                  </div>
                </div>
              </Box>
              <Box h="10px">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "35px",
                    marginRight: "25px",
                    fontSize: "20px",
                  }}
                >
                  <div>Reset All Filters</div>
                  <div>
                    <GrPowerReset />
                  </div>
                </div>
              </Box>
            </VStack>
          </Box>
        </div>
        <div>
          <div>
            <Box w="100%" p={4}>
              <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                {data.map((el) => (
                  <div className={styles.prod} key={el.id}>
                    <GridItem colSpan={1}>
                      <div style={{ height: "400px" }}>
                        <img src={el.img} alt={`img ${el.id}`} />
                        <p style={{ fontSize: "12px" }}>{el.name}</p>
                        <h1>{el.price}</h1>
                        <Select placeholder="Choose Color">
                          <option
                            style={{ backgroundColor: "Black", color: "white" }}
                            value="Black"
                          >
                            Black
                          </option>
                          <option
                            style={{ backgroundColor: "gray", color: "white" }}
                            value="gray"
                          >
                            Gray
                          </option>
                          <option
                            style={{ backgroundColor: "navy", color: "white" }}
                            value="Cream"
                          >
                            Navy
                          </option>
                          <option
                            style={{ backgroundColor: "White", color: "Black" }}
                            value="Navy"
                          >
                            White
                          </option>
                        </Select>
                        <div>
                          <Button
                            onClick={() => handleClick(el.id)}
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme="teal"
                            variant="outline"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </GridItem>
                  </div>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
      <FooterPart />
    </div>
  );
};
