import { ActionIcon, Container, Group, Text } from "@mantine/core";
import {
  IconBrandBehance,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

import classes from "./footerComponent.module.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={classes.footer}>
        <Container size="xl" className={classes.inner}>
          <Group
            gap={0}
            className={classes.links}
            justify="flex-end"
            wrap="nowrap"
          >
            <ActionIcon size="lg" color="white" variant="subtle">
              <IconBrandBehance size={20} stroke={2.0} />
            </ActionIcon>
            <ActionIcon size="lg" color="white" variant="subtle">
              <IconBrandInstagram size={20} stroke={2.0} />
            </ActionIcon>
            <ActionIcon size="lg" color="white" variant="subtle">
              <IconBrandYoutube size={20} stroke={2.0} />
            </ActionIcon>
          </Group>
          <Text className={classes.copyright}>
            &copy; {currentYear} Todos os direitos reservados.{" "}
          </Text>
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
