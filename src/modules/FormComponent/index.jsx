import {
  Button,
  CheckIcon,
  Flex,
  InputBase,
  Paper,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "react-responsive";
import { notifications } from "@mantine/notifications";
import classes from "./formComponent.module.css";
import emailjs from "emailjs-com";

function FormComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const buttonSize = isMobile ? "sm" : isTablet ? "md" : "md";
  const cardSize = isMobile ? "100%" : isTablet ? "100%" : "600px";

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", fone: "", nicho: "" },
    validate: {
      name: (value) => (value.length < 2 ? "Digite seu nome" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "E-mail inválido"),
      fone: (value) => (value.length < 15 ? "Digite seu contato" : null),
    },
  });

  const handleSubmit = (values) => {
    if (!values.name || !values.email || values.fone.length < 15) {
      form.validate();
      return;
    }
    console.log(values);

    const templateParams = {
      to_email: "luminus.age@gmail.com",
      name: values.name,
      email: values.email,
      fone: values.fone,
      nicho: values.nicho,
    };

    emailjs.send(
      "service_ljq4tmv",
      "template_adp3zsg",
      templateParams,
      "3vjQRnQFfs1pVyLJ7"
    );
    emailjs
      .send(
        "service_ljq4tmv",
        "template_oe2y4f9",
        templateParams,
        "3vjQRnQFfs1pVyLJ7"
      )
      .then((response) => {
        console.log("E-mail de confirmação enviado!", response);

        notifications.show({
          title: "Dados enviados!",
          message: "Você será direcionado para whatsapp.",
          color: "green",
          icon: <CheckIcon size={18} />,
          position: "top-center",
          className: classes.notification,
          autoClose: 3000,
          withCloseButton: false,
          styles: {
            title: { color: "#fff" },
            message: { color: "#fff" },
          },
        });

        console.log("Notificação foi chamada.");

        setTimeout(() => {
          const whatsappMessage = ` Olá, meu nome é ${values.name}! 
    Gostaria de mais informações. 
    E-mail: ${values.email} 
    Celular: ${values.fone} 
    Nicho: ${values.nicho}`;
          const whatsappLink = `https://wa.me/+5583998603740?text=${encodeURIComponent(
            whatsappMessage
          )}`;
          window.open(whatsappLink, "_blank");
        }, 3200);
      });

    form.reset();
  };

  return (
    <>
      <Flex>
        <Paper className={classes.card} shadow="md" w={cardSize}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              variant="filled"
              size="sm"
              radius="sm"
              required
              label="Nome:"
              placeholder="Digite seu nome"
              mb="sm"
              key={form.key("name")}
              {...form.getInputProps("name")}
              error={form.errors.name}
              classNames={{
                wrapper: classes.wrapper,
                input: classes.input,
                label: classes.label,
              }}
            />
            <TextInput
              variant="filled"
              size="sm"
              radius="sm"
              label="E-mail:"
              required
              placeholder="Seu e-mail"
              mb="md"
              key={form.key("email")}
              {...form.getInputProps("email")}
              error={form.errors.email}
              classNames={{
                wrapper: classes.wrapper,
                input: classes.input,
                label: classes.label,
              }}
            />
            <InputBase
              variant="filled"
              size="sm"
              radius="sm"
              label="Celular:"
              required
              placeholder="Seu whatsapp"
              mb="md"
              component={IMaskInput}
              mask="+55 (00) 00000-0000"
              key={form.key("fone")}
              {...form.getInputProps("fone")}
              classNames={{
                wrapper: classes.wrapper,
                input: classes.input,
                label: classes.label,
              }}
            />
            <Textarea
              variant="filled"
              size="sm"
              radius="sm"
              label="Nicho:"
              placeholder="Conte-nos qual é o seu nicho"
              mb="md"
              key={form.key("nicho")}
              {...form.getInputProps("nicho")}
              classNames={{
                wrapper: classes.wrapper,
                input: classes.input,
                label: classes.label,
              }}
            />
            <div className={classes.buttonContainer}>
              <Button
                variant="filled"
                size={buttonSize}
                radius="xl"
                className={classes.control}
                type="submit"
                ke8i
              >
                Enviar
              </Button>
            </div>
          </form>
        </Paper>
      </Flex>
    </>
  );
}

export default FormComponent;
