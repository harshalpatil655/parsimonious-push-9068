import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const FooterPart = () => {
  return (
    <div style={{ backgroundColor: "#f7f6f2", border: "2px solid #e7e4e0" }}>
      <Box
        style={{ borderBottom: "2px solid #e7e4e0 " }}
        margin={"auto"}
        w="93%"
        p={4}
      >
        <Flex>
          <Box style={{ textAlign: "start", width: "500px" }} p="4">
            <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
              Sign Up For Email{" "}
            </h1>
            <p>
              Receive early access to new arrivals, sales,exclusive
              content,events and much more!
            </p>
          </Box>
          <Spacer />
          <Box p="4" style={{ width: "430px" }}>
            <h1 style={{ textAlign: "start", fontSize: "30px" }}>
              Email Address*
            </h1>
            <div style={{ display: "flex" }}>
              <input
                style={{
                  border: "1px solid black",
                  height: "40px",
                  width: "300px",
                  marginTop: "20px",
                }}
                type="text"
              />
              <button
                style={{
                  color: "white",
                  backgroundColor: "#4b5666",
                  marginTop: "19px",
                  marginLeft: "15px",
                  width: "120px",
                  height: "40px",
                }}
              >
                Submit
              </button>
            </div>
          </Box>
        </Flex>
        <p
          style={{
            textAlign: "start",
            fontSize: "12px",
            marginLeft: "12px",
            marginTop: "26px",
          }}
        >
          By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s
          Privacy Policy. You may unsubscribe at any time.
        </p>
      </Box>
      <Box
        style={{ margin: "auto", textAlign: "start", fontSize: "12px" }}
        w="93%"
        p={4}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <div>
            <div style={{ width: "120px" }}>
              <h1 style={{ fontSize: "18px", fontWeight: "600" }}>Help</h1>
              <div>Track Your Order</div>
              <div>Start A Return Or Exchange (US)</div>
              <div>Returns & Exchanges</div>
              <div>Shipping</div>
              <div>Customer Service</div>
              <div>Current Promotions</div>
              <div>Product Recalls</div>
            </div>
          </div>
          <div>
            <div style={{ width: "120px" }}>
              <h1 style={{ fontSize: "18px", fontWeight: "600" }}>About Us</h1>
              <div>Our Story</div>
              <div>Events</div>
              <div>A Greater Good</div>
              <div>Diversity & Inclusion</div>
              <div>Stories</div>
            </div>
          </div>
          <div>
            <div style={{ width: "120px" }}>
              <h1 style={{ fontSize: "18px", fontWeight: "600" }}>Services</h1>
              <div>AnthroPerks</div>
              <div>Gift Cards</div>
              <div>AnthroLiving B2B</div>
              <div>Furniture: Guides & Services</div>
              <div>Store Pickup & Collection Points</div>
              <div>Klarna</div>
            </div>
          </div>
          <div>
            <div style={{ width: "120px" }}>
              <h1 style={{ fontSize: "18px", fontWeight: "600" }}>Connect</h1>
              <div>Contact Us</div>
              <div>Stay Connected</div>
              <div>Careers</div>
              <div>Styling Services</div>
              <div>Request A Catalog</div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", width: "120px" }}>
              <div>
                {" "}
                <GoLocation size="2rem" />
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                store locator
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "25px" }}>
              <div>
                <AiOutlineMail size="3em" />
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  marginTop: "8px",
                  marginLeft: "7px",
                }}
              >
                Get Email
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box margin="auto" w="93%" p={4}>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div
            style={{
              height: "50px",
              width: "100px",
              border: "1px solid black",
              borderRadius: "5px",
              marginLeft: "350px",
              marginRight: "25px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <BsApple size="2rem" style={{ marginTop: "7px" }} />
              </div>
              <div>
                <p style={{ fontSize: "8px", marginTop: "9px" }}>
                  Download on the
                </p>
                <h1 style={{ fontSize: "13px", fontWeight: 700 }}>App Store</h1>
              </div>
            </div>
          </div>
          <div>
            <BsInstagram
              style={{
                color: "#167a92",
                marginRight: "25px",
              }}
              size="3rem"
            />
          </div>
          <div>
            <AiFillFacebook
              style={{
                color: "#167a92",
                marginRight: "25px",
              }}
              size="3rem"
            />
          </div>
          <div>
            <AiOutlineTwitter
              style={{
                color: "#167a92",
                marginRight: "25px",
              }}
              size="3rem"
            />
          </div>
        </div>
      </Box>
      <Box w="93%" p={4} margin="auto">
        <img
          src="https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/20ea44a95fb361eaf034b42eec179d44/_site_footer__download_app_enable_push_.jpg"
          alt="footerimg"
        />
      </Box>
      <Box w="100%" p={4}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "10px" }}>US</div>
          <div style={{ marginRight: "10px" }}>France</div>
          <div style={{ marginRight: "10px" }}>Germany</div>
          <div style={{ marginRight: "10px" }}>Italy</div>
          <div style={{ marginRight: "10px" }}>Spain</div>
          <div style={{ marginRight: "10px" }}>UK</div>
        </div>
      </Box>
      <Box margin="auto" w="93%" p={4}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ fontSize: "12px", color: "#5fa2b0", marginRight: "8px" }}
            >
              Privacy Policy
            </div>
            <div
              style={{ fontSize: "12px", color: "#5fa2b0", marginRight: "8px" }}
            >
              Terms Of Use
            </div>
            <div
              style={{ fontSize: "12px", color: "#5fa2b0", marginRight: "8px" }}
            >
              CA Transparency
            </div>
            <div
              style={{ fontSize: "12px", color: "#5fa2b0", marginRight: "8px" }}
            >
              Accessibility
            </div>
            <div
              style={{ fontSize: "12px", color: "#5fa2b0", marginRight: "8px" }}
            >
              URBN.com
            </div>
            <div style={{ fontSize: "12px" }}>For CA Residents</div>
          </div>
          <div style={{ fontSize: "12px" }}>
            2022 URBN.com. All Rights Reserved.
          </div>
        </div>
      </Box>
    </div>
  );
};

export default FooterPart;
