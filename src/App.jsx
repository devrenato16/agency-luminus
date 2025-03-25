import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import Home from "./views";
import { Notifications } from "@mantine/notifications";
import Loading from "./modules/LoadingComponent";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider>
      <Notifications />
      {isLoading ? <Loading /> : <Home />}
    </MantineProvider>
  );
}
