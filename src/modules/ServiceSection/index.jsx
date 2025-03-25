import { Card, Container, Grid, Text, Title } from "@mantine/core";
import { RiPaletteLine, RiShapesLine } from "react-icons/ri";
import { IconDevicesCode } from "@tabler/icons-react";
import classes from "./serviceSection.module.css";
import { useMediaQuery } from "react-responsive";

const ServiceSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 764, maxWidth: 1023 });

  const titleSize = isMobile ? "25px" : isTablet ? "30px" : "40px";
  const descriptionSize = isMobile ? "11px" : isTablet ? "16px" : "13px";

  return (
    <>
      <div className={classes.container} id="service">
        <Container size="lg" fluid={isMobile || isTablet}>
          <div className={classes.title}>
            <Text
              className={classes.description}
              style={{ fontSize: descriptionSize }}
            >
              Melhores Características
            </Text>
            <Title font-weight={600} size={titleSize}>
              Serviços
            </Title>
          </div>
          <Grid mt={60}>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                shadow="md"
                radius="md"
                padding="xl"
                className={classes.card}
              >
                <RiShapesLine className={classes.icons} />
                <Title fz="xl" mb="10px">
                  Marketing Digital
                </Title>
                <Text fz="md" c="dimmed" mt="sm">
                  Alavanque sua marca com estratégias inovadoras e resultados
                  concretos. Desenvolvemos estratégias inovadoras para conectar
                  sua marca ao público certo, impulsionar seu engajamento e
                  maximizar resultados, garantindo uma presença digital
                  impactante.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                shadow="md"
                radius="md"
                padding="xl"
                className={classes.card}
              >
                <IconDevicesCode
                  stroke={2}
                  size={70}
                  className={classes.icons}
                />
                <Title fz="xl" mb="10px">
                  Desenvolvimento Web
                </Title>
                <Text fz="md" c="dimmed" mt="sm">
                  Oferecemos soluções de desenvolvimento web sob medida para
                  atender às suas necessidades específicas. Criamos sites e
                  plataformas altamente funcionais, otimizadas e responsivas,
                  para que sua presença online seja impressionante em qualquer
                  dispositivo.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                shadow="md"
                radius="md"
                padding="xl"
                className={classes.card}
              >
                <RiPaletteLine className={classes.icons} />
                <Title fz="xl" mb="10px">
                  Design e Branding
                </Title>
                <Text fz="md" c="dimmed" mt="sm">
                  Destacamos sua marca no mercado com designs únicos e
                  memoráveis. Nossa expertise em identidade visual e branding
                  garante que sua empresa tenha uma presença visual marcante e
                  que comunique seus valores de forma criativa e impactante.
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ServiceSection;
