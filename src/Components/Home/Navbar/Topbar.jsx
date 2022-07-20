import { Box, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

export const Topbar = () => {
  return (
    <div>
      <Box bg="#1d7c7a" w="100%" p={4} color="white">
        <HStack spacing="40px">
          <IoIosArrowBack style={{ marginRight: "15px" }} size="2rem" />
          <p style={{ marginLeft: "30px" }}>limited Time</p>
          <h2>EXTRA 40% OFF ALL SALE ITEMS!</h2>
          <p style={{ textDecoration: "underline", fontWeight: 200 }}>
            shop summer's hottest styles
          </p>
          <p style={{ textDecoration: "underline", fontWeight: 200 }}>
            all sales final-see details
          </p>
          <IoIosArrowForward style={{ marginLeft: "120px" }} size="2rem" />
        </HStack>
      </Box>
      <Box bg="#f7f6f2" w="100%" p={1}>
        <Stack
          justifyContent={"right"}
          direction={["column", "row"]}
          spacing="24px"
        >
          <FaUser size="2rem" />
          <select
            style={{ border: "none", backgroundColor: "#f7f6f2" }}
            value="English"
          >
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </Stack>
      </Box>
      <Box
        style={{ border: "1px solid lightgray" }}
        w="100%"
        p={3}
        color="white"
      >
        <HStack>
          <div
            style={{
              marginRight: "30px",
              marginLeft: "50px",
            }}
          >
            <img
              alt="img2"
              src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
            />
          </div>
          <div>
            <img
              alt="img1"
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
            />
          </div>
          <div>
            <input
              style={{
                border: "2px solid lightgray",
                borderRadius: "5px",
                height: "35px",
                marginLeft: "300px",
                paddingLeft: "10px",
              }}
              type="text"
              placeholder="Search Anthropologie"
            />
          </div>
          <div>
            <BsBag
              style={{ marginLeft: "20px", marginBottom: "5px" }}
              color="gray"
              size="2rem"
            />
          </div>
        </HStack>
      </Box>
      <Box
        style={{
          margin: "auto",
        }}
        w="93%"
        p={4}
      >
        <img
          alt="advertisement"
          src="https://images.ctfassets.net/5de70he6op10/4tWYuCwv5L2JfLs81bSPiC/e72919ba5d1bf6428d6403c0739ff146/071522_40offSOS_HPG_SecondaryBanner_LS_limitedtime.jpg?w=2882&q=80&fm=webp"
        />
      </Box>
    </div>
  );
};
