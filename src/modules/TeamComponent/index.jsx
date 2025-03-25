import { Avatar, Card, Grid, Text, Title } from "@mantine/core";

import classes from "./teamComponent.module.css";
import { useMediaQuery } from "react-responsive";

const TeamComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <Grid mt={50} justify={isMobile ? "space-between" : "center"}>
        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
          <Avatar
            src="/Images/renas.webp"
            size={105}
            radius={80}
            mx="auto"
            mt={-55}
            className={classes.avatar}
          />
          <Card shadow="md" radius="md" padding="xl" className={classes.card}>
            <Title fz="xl" mb="10px">
              Renato Barros
            </Title>
            <Text fz="md" c="dimmed" mt="sm">
              Desenvolvedor web e designer gráfico apaixonado por criar
              experiências digitais que transformam ideias em realidade.
              Acredito na união de tecnologia e criatividade para entregar
              soluções autênticas que conectam pessoas e marcas.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
          <Avatar
            src="/Images/herbert.webp"
            size={105}
            radius={80}
            mx="auto"
            mt={-55}
            className={classes.avatar}
          />
          <Card shadow="md" radius="md" padding="xl" className={classes.card}>
            <Title fz="xl" mb="10px">
              Herbert Aciole
            </Title>
            <Text fz="md" c="dimmed" mt="sm">
              Empreendedor e formado em Comunicação Social, apaixonado por
              mídias sociais e gestão de tráfego. Acredito no poder do marketing
              digital para transformar negócios e fortalecer marcas, criando
              estratégias que gerem visibilidade e resultados.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
          <Avatar
            src="/Images/joselio.webp"
            size={105}
            radius={80}
            mx="auto"
            mt={-55}
            className={classes.avatar}
          />
          <Card shadow="md" radius="md" padding="xl" className={classes.card}>
            <Title fz="xl" mb="10px">
              Joselio Samy
            </Title>
            <Text fz="md" c="dimmed" mt="sm">
              Técnico em Informática que acredita na importância da tecnologia
              para a mudança de vida das pessoas. Além disso gestor de tráfego
              especialista em Meta Ads e um grande adimirador de processos
              criativos, aperfeiçoamentos e gestão de projetos.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default TeamComponent;
