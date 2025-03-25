import { Container, Text, Title } from "@mantine/core";

import classes from "./contactComponent.module.css";
import { useMediaQuery } from "react-responsive";
import ChatComponent from "../ChatComponent";
import FormComponent from "../FormComponent";

const ContactComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const titleSize = isMobile ? "25px" : isTablet ? "30px" : "70px";
  const descriptionSize = isMobile ? "11px" : isTablet ? "16px" : "13px";

  return (
    <>
      <div className={classes.container} id="contact">
        <Container size="lg">
          <div className={isMobile ? classes.innerMobile : classes.inner}>
            <div className={classes.content}>
              <div className={classes.title}>
                <Text
                  className={classes.description}
                  style={{ fontSize: descriptionSize }}
                >
                  Contato
                </Text>
                <Title font-weight={600} size={titleSize}>
                  Entrar em contato
                </Title>
              </div>
            </div>

            <FormComponent />
            <ChatComponent />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactComponent;
