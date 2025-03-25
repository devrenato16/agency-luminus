import { Button, Container, Image, Text, Title } from "@mantine/core";
import classes from "./heroComponent.module.css";

import { IoIosArrowDown } from "react-icons/io";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function HeroComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const titleSize = isMobile ? "50px" : isTablet ? "35px" : "70px";
  const descriptionSize = isMobile ? "15px" : isTablet ? "18px" : "20px";
  const buttonSize = isMobile ? "sm" : isTablet ? "md" : "lg";

  const smoothScrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <>
      <div className={classes.hero} id="hero">
        <Container size="lg">
          <div className={isMobile ? classes.innerMobile : classes.inner}>
            <div className={isMobile ? classes.imageMobile : classes.image}>
              <Image src="/Images/pc1.svg" />
            </div>
            <div className={classes.content}>
              <Title className={classes.title} size={titleSize}>
                Luminus
              </Title>
              <Text
                className={classes.description}
                style={{ fontSize: descriptionSize }}
                mt="xl"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book .
              </Text>

              <Button
                variant="filled"
                size={buttonSize}
                radius="xl"
                className={classes.control}
                mt={isMobile ? "20px" : "50px"}
                mb={isMobile ? "30px" : "auto"}
                onClick={() => smoothScrollTo("#contact")}
              >
                Chamada para ação!
              </Button>
            </div>
          </div>
          {!isMobile && (
            <motion.div
              className={classes.icon}
              animate={{ y: [-50, 10, -50] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <IoIosArrowDown size="40px" color="#940ce2" />
            </motion.div>
          )}
        </Container>
      </div>
    </>
  );
}

export default HeroComponent;
