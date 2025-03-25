import { Container, Image, Text, Title } from "@mantine/core";
import classes from "./aboutComponent.module.css";
import { useMediaQuery } from "react-responsive";
import TeamComponent from "../TeamComponent";

const AboutComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const titleSize = isMobile ? "25px" : isTablet ? "30px" : "40px";
  const descriptionSize = isMobile ? "11px" : isTablet ? "16px" : "13px";

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
              <Image src="/Images/call.svg" />
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
