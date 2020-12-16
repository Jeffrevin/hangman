import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <h1>TEST</h1>
      </ChakraProvider>
    </div>
  );
}
