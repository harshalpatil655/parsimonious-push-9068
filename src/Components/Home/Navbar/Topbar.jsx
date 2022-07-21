import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
          <div style={{ display: "flex" }}>
            <div>
              <FaUser
                style={{ marginTop: "8px", color: "#86b8c8" }}
                size="1.5rem"
              />
            </div>
            <div>
              <Menu>
                <MenuButton
                  style={{ backgroundColor: "#f7f6f2", color: "#86b8c8" }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  My Account
                </MenuButton>
                <MenuList>
                  <MenuItem>Dashboard</MenuItem>
                  <MenuItem>Personal Profile</MenuItem>
                  <MenuItem>Addresses & Payments</MenuItem>
                  <MenuItem>Order History</MenuItem>
                  <MenuItem>Wish List</MenuItem>
                  <MenuItem>Registry</MenuItem>
                  <MenuItem>Signin</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div>
            <Menu>
              <MenuButton
                style={{ backgroundColor: "#f7f6f2", color: "#86b8c8" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                English ($)
              </MenuButton>
              <MenuList>
                <MenuItem>Currency</MenuItem>
                <p>USD($)</p>
                <MenuItem>Language</MenuItem>
                <select value="English">
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </MenuList>
            </Menu>
          </div>
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
              style={{ borderRight: "1px solid black", paddingRight: "20px" }}
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
      <Box margin="auto" w="93%" p={4}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eeece8",
            paddingBottom: "20px",
            fontSize: "13px",
          }}
        >
          <div>New!</div>
          <div>Dresses</div>
          <div>Clothing</div>
          <div>Shoes</div>
          <div>Accessories</div>
          <div>Gift & Candles</div>
          <div>Home & Furniture</div>
          <div>Beauty & Wellneww</div>
          <div>Garden & OutDoor</div>
          <div>Weddings</div>
        </div>
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
