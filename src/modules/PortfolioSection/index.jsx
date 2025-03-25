import { Carousel } from "@mantine/carousel";
import { Card, Container, Image, Text, Title } from "@mantine/core";
import "@mantine/carousel/styles.css";
import classes from "./portfolioSection.module.css";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const PortfolioSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  const titleSize = isMobile ? "25px" : isTablet ? "30px" : "40px";
  const descriptionSize = isMobile ? "11px" : isTablet ? "16px" : "13px";

  const autoplay = useRef(Autoplay({ delay: 7000 }));

  return (
    <>
      <div className={classes.container} id="portfolio">
        <Container size="lg">
          <div className={classes.title}>
            <Text
              className={classes.description}
              style={{ fontSize: descriptionSize }}
            >
              Nosso Trabalho
            </Text>
            <Title font-weigth={600} size={titleSize}>
              Portfólio
            </Title>
          </div>
          <div>
            <Carousel
              slideSize={{ base: `${100 / slidesPerView}%` }}
              slideGap="md"
              align="start"
              withControls={false}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              {/* Slide 1 */}
              <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.instagram.com/mcl.tour/"
                  target="_blank"
                >
                  <Image
                    src="/Images/mcl.svg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MCL TOUR</Text>
                    <Text className={classes.cardDescription}>Turismo</Text>
                  </div>
                </Card>
              </Carousel.Slide>

              {/* Slide 2 */}
              <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.youtube.com/watch?v=LVhtxfAT4tg"
                  target="_blank"
                >
                  <Image
                    src="/Images/ilberto.svg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>ILBERTO CANUTO</Text>
                    <Text className={classes.cardDescription}>
                      Full Stack Developer
                    </Text>
                  </div>
                </Card>
              </Carousel.Slide>

              {/* Slide 3 */}
              <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.instagram.com/marizacibulski.adv/"
                  target="_blank"
                >
                  <Image
                    src="/Images/mcadv.svg"
                    alt="mcadv"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MARIZA CIBULSKI</Text>
                    <Text className={classes.cardDescription}>Advogada</Text>
                  </div>
                </Card>
              </Carousel.Slide>

              {/* Slide 4 */}
              {/* <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.youtube.com/watch?v=LVhtxfAT4tg"
                  target="_blank"
                >
                  <Image
                    src="https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/wordpress/wp-content/uploads//2023/02/Novo-Virtus-Highline-scaled.jpg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />

                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MCL TOUR</Text>
                    <Text className={classes.cardDescription}>Modelo 2023</Text>
                  </div>
                </Card>
              </Carousel.Slide> */}

              {/* Slide 5 */}
              {/* <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.youtube.com/watch?v=LVhtxfAT4tg"
                  target="_blank"
                >
                  <Image
                    src="https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/wordpress/wp-content/uploads//2023/02/Novo-Virtus-Highline-scaled.jpg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MCL TOUR</Text>
                    <Text className={classes.cardDescription}>Modelo 2023</Text>
                  </div>
                </Card>
              </Carousel.Slide> */}

              {/* Slide 6 */}
              {/* <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.youtube.com/watch?v=LVhtxfAT4tg"
                  target="_blank"
                >
                  <Image
                    src="https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/wordpress/wp-content/uploads//2023/02/Novo-Virtus-Highline-scaled.jpg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MCL TOUR</Text>
                    <Text className={classes.cardDescription}>Modelo 2023</Text>
                  </div>
                </Card>
              </Carousel.Slide> */}
              {/* Slide 6 */}
              {/* <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.youtube.com/watch?v=LVhtxfAT4tg"
                  target="_blank"
                >
                  <Image
                    src="https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/wordpress/wp-content/uploads//2023/02/Novo-Virtus-Highline-scaled.jpg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MCL TOUR</Text>
                    <Text className={classes.cardDescription}>Modelo 2023</Text>
                  </div>
                </Card>
              </Carousel.Slide> */}
              {/* Slide 6 */}
              {/* <Carousel.Slide>
                <Card
                  className={classes.card}
                  component="a"
                  href="https://www.youtube.com/watch?v=LVhtxfAT4tg"
                  target="_blank"
                >
                  <Image
                    src="https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/wordpress/wp-content/uploads//2023/02/Novo-Virtus-Highline-scaled.jpg"
                    alt="MCL TOUR"
                    className={classes.cardImage}
                  />
                  <div className={classes.cardContent}>
                    <Text className={classes.cardTitle}>MCL TOUR</Text>
                    <Text className={classes.cardDescription}>Modelo 2023</Text>
                  </div>
                </Card>
              </Carousel.Slide> */}
            </Carousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PortfolioSection;
