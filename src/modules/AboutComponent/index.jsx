import { Container, Image, Text, Title } from "@mantine/core";
import classes from "./aboutComponent.module.css";
import { useMediaQuery } from "react-responsive";
import TeamComponent from "../TeamComponent";

import { motion } from "framer-motion";

const AboutComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const titleSize = isMobile ? "25px" : isTablet ? "30px" : "40px";
  const descriptionSize = isMobile ? "11px" : isTablet ? "16px" : "13px";

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 }, // Estado inicial (escondido)
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 }, // Transição suave
    },
  };

  return (
    <>
      <div className={classes.container} id="about">
        <Container size="lg">
          <div className={isMobile ? classes.innerMobile : classes.inner}>
            <div className={classes.content}>
              <div className={classes.title}>
                <Text
                  className={classes.description}
                  style={{ fontSize: descriptionSize }}
                >
                  Nossa missão
                </Text>
                <Title font-weight={600} size={titleSize}>
                  Nossa missão é elevar e potencializar a sua empresa!
                </Title>
              </div>
            </div>
            <div className={classes.image}>
              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "20px 0", // Espaçamento
                }}
                initial="hidden" // Estado inicial da animação
                whileInView="visible" // Aciona a animação quando o elemento entra na tela
                viewport={{ once: true }} // Executa a animação apenas uma vez
                variants={imageVariants} // Define as variantes da animação
              >
                <Image src="/Images/call.svg" />
              </motion.div>
            </div>
          </div>
          <div>
            <TeamComponent />
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutComponent;
