import { useState, useEffect, useCallback, useRef } from "react";
import {
  TextInput,
  Button,
  Card,
  ScrollArea,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import emailjs from "emailjs-com";
import classes from "./chatComponent.module.css";
import { IconBrandHipchat } from "@tabler/icons-react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { text: "Olá, seja bem-vindo(a).", fromUser: false },
    { text: "Qual é o seu nome?", fromUser: false },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    fone: "",
    nicho: "",
  });
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o loading
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = useCallback(() => {
    const { name, email, fone, nicho } = clientData;
    if (!name || !email || !nicho) {
      alert("Preencha todos os campos corretamente!");
      setIsLoading(false); // Desativa o loading em caso de erro
      return;
    }
    if (!isValidEmail(email)) {
      alert("Por favor, insira um e-mail válido!");
      setIsLoading(false); // Desativa o loading em caso de erro
      return;
    }
    const templateParams = { name, email, fone, nicho };
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
        setTimeout(() => {
          const message = `Olá, meu nome é ${name}, meu e-mail é ${email}, meu telefone é ${fone} e meu nicho é ${nicho}.`;
          const encodedMessage = encodeURIComponent(message);
          const whatsappUrl = `https://wa.me/5583998603740?text=${encodedMessage}`;
          window.location.href = whatsappUrl; // Redireciona para o WhatsApp
        }, 2500); // Aguarda 3 segundos antes de redirecionar
      })
      .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error);
        setIsLoading(false); // Desativa o loading em caso de erro
      });
  }, [clientData]);

  useEffect(() => {
    if (shouldSubmit) {
      setShouldSubmit(false);
      setIsLoading(true); // Ativa o loading antes de enviar
      handleSubmit();
    }
  }, [clientData, shouldSubmit, handleSubmit]);

  const handleSendMessage = (text) => {
    if (!text.trim()) {
      setMessages((prev) => [
        ...prev,
        { text: "Você não pode enviar uma mensagem vazia.", fromUser: false },
      ]);
      return;
    }
    setMessages((prev) => [...prev, { text, fromUser: true }]);
  };

  const handleNextStep = (field, value) => {
    if (field === "email") {
      if (!isValidEmail(value)) {
        setMessages((prev) => [
          ...prev,
          { text: "Por favor, insira um e-mail válido.", fromUser: false },
        ]);
        return;
      }
    }
    setClientData((prev) => {
      const newData = { ...prev, [field]: value };
      if (field === "name") {
        setMessages((prev) => [
          ...prev,
          { text: `Então ${value}, nos fala seu e-mail?`, fromUser: false },
        ]);
      } else if (field === "email") {
        setMessages((prev) => [
          ...prev,
          { text: "E o seu número de contato?", fromUser: false },
        ]);
      } else if (field === "fone") {
        setMessages((prev) => [
          ...prev,
          { text: "Agora nos fala seu nicho de atuação:", fromUser: false },
        ]);
      } else if (field === "nicho") {
        setMessages((prev) => [
          ...prev,
          {
            text: "Gratidão por compartilhar, vou te encaminhar para o WhatsApp",
            fromUser: false,
          },
        ]);
        setShouldSubmit(true);
      }
      return newData;
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Função para lidar com o envio de mensagens
  const sendMessage = () => {
    if (!input.trim()) {
      handleSendMessage("Você não pode enviar uma mensagem vazia.");
      return;
    }
    handleSendMessage(input);
    if (!clientData.name) handleNextStep("name", input);
    else if (!clientData.email) handleNextStep("email", input);
    else if (!clientData.fone) handleNextStep("fone", input);
    else if (!clientData.nicho) handleNextStep("nicho", input);
    setInput("");
  };

  return (
    <>
      <ActionIcon
        variant="filled"
        color="#ff8b1f"
        className={classes.chatbotButton}
        onClick={() => setOpen(!open)}
      >
        <IconBrandHipchat stroke={1.5} size={35} />
      </ActionIcon>
      {open && (
        <Card className={classes.chatbotContainer} shadow="xl">
          <ActionIcon
            variant="transparent"
            color="#ff8b1f"
            className={classes.chatbotClose}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          ></ActionIcon>
          <ScrollArea h={250} className={classes.chatbotMessages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.fromUser
                    ? classes.userMessageWrapper
                    : classes.botMessageWrapper
                }
              >
                <Avatar
                  src={
                    msg.fromUser
                      ? "/user-avatar.png"
                      : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                  }
                  alt={msg.fromUser ? "Usuário" : "Bot"}
                  size={35}
                  radius="xl"
                  className={classes.avatar}
                />
                <div
                  className={
                    msg.fromUser ? classes.userMessage : classes.botMessage
                  }
                >
                  <span className={classes.messageText}>{msg.text}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>
          <TextInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua resposta..."
            className={classes.chatInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(); // Chama a função de envio ao pressionar Enter
              }
            }}
          />
          <Button
            onClick={sendMessage} // Reutiliza a função de envio
            mt="sm"
            fullWidth
            className={classes.chatButton}
            loading={isLoading} // Controla o estado de loading do botão
            loaderProps={{ type: "dots" }}
          >
            Enviar
          </Button>
        </Card>
      )}
    </>
  );
};

export default ChatComponent;
