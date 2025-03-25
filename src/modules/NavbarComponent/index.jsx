import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import classes from "./navbarComponent.module.css";
import { useEffect, useState } from "react";
import {
  Anchor,
  Burger,
  Center,
  Container,
  Drawer,
  Group,
  Image,
  Stack,
} from "@mantine/core";

const mainLinks = [
  { link: "#hero", label: "Início" },
  { link: "#service", label: "Serviços" },
  { link: "#about", label: "Sobre nós" },
  { link: "#portfolio", label: "Nosso trabalho" },
  { link: "#contact", label: "Contatos" },
];

const NavbarComponent = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const smoothScrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const startY = window.scrollY;
    const targetY =
      targetElement.getBoundingClientRect().top + window.scrollY - 40;
    const distance = targetY - startY;
    const duration = 500; // Duração em milissegundos
    const startTime = new Date().getTime();

    const scrollStep = () => {
      const now = new Date().getTime();
      const timeElapsed = now - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    scrollStep();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = mainLinks.findIndex(
              (item) => item.link === `#${entry.target.id}`
            );
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    mainLinks.forEach(({ link }) => {
      const section = document.querySelector(link);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={!isMobile ? index === active || undefined : undefined}
      onClick={(event) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        setActive(index);
        smoothScrollTo(item.link);
        close();
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <>
      {!isMobile && (
        <header className={classes.header}>
          <Container size="xl" className={classes.inner}>
            <Image w={200} src="/Images/logo.png" />

            <Group
              gap={0}
              justify="flex-end"
              className={classes.mainLinks}
              visibleFrom="sm"
            >
              {mainItems}
            </Group>
          </Container>
        </header>
      )}
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        hiddenFrom="sm"
        color="#FFFF"
        style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}
      />
      <Drawer
        opened={opened}
        position="right"
        size="md"
        padding={0}
        withCloseButton={false}
        styles={{
          body: {
            height: "100%",
            backgroundColor: "rgb(26, 0, 51)",
            padding: 0,
            margin: 0,
          },
        }}
        onClose={close}
      >
        <Stack spacing={2} p="xl">
          {mainItems}
          <Center>
            <Image w={250} src="/Images/logo.png" alt="Logo" />
          </Center>
        </Stack>
      </Drawer>
    </>
  );
};

export default NavbarComponent;
