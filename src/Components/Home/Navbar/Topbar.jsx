import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import styles from "../Navbar/CSS/Topbar.module.css";

export const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box style={{ height: "60px" }} bg="#1d7c7a" w="100%" p={4} color="white">
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

                  <div>
                    <Button onClick={onOpen}>Sign In</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader style={{ fontSize: "30px" }}>
                          Create An Account
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <div style={{ borderTop: "1px solid gray" }}></div>
                          <p style={{ textAlign: "center", fontSize: "14px" }}>
                            Welcome to Anthropologie! It's quick and easy to set
                            up an account.
                          </p>
                          <FormControl isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input type="text" placeholder="First name" />
                            <FormLabel style={{ marginTop: "10px" }}>
                              Email
                            </FormLabel>
                            <Input type="email" placeholder="Enter Email" />
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type="number" placeholder="Enter Number" />
                            <FormLabel>Date Of Birth</FormLabel>
                            <Input type="date" />
                            <FormLabel>Set Password</FormLabel>
                            <Input type="password" placeholder="Set Password" />
                          </FormControl>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button variant="ghost">Sign In</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
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
            <NavLink to="/">
              <img
                style={{ borderRight: "1px solid black", paddingRight: "20px" }}
                alt="img2"
                src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
              />
            </NavLink>
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
          <div className={styles.nav1}>New!</div>
          <div className={styles.nav2}>Dresses</div>
          <div className={styles.nav3}>Clothing</div>
          <div className={styles.nav4}>Shoes</div>
          <div className={styles.nav5}>Accessories</div>
          <div className={styles.nav6}>Gift & Candles</div>
          <div className={styles.nav7}>Home & Furniture</div>
          <div className={styles.nav8}>Beauty & Wellness</div>
          <div className={styles.nav9}>Garden & OutDoor</div>
          <div className={styles.nav10}>Weddings</div>
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
          className={styles.advert}
          alt="advertisement"
          src="https://images.ctfassets.net/5de70he6op10/4tWYuCwv5L2JfLs81bSPiC/e72919ba5d1bf6428d6403c0739ff146/071522_40offSOS_HPG_SecondaryBanner_LS_limitedtime.jpg?w=2882&q=80&fm=webp"
        />
      </Box>
    </div>
  );
};
