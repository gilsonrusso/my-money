import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewModalTransaction() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewModalTransaction() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpneNewTransactionModal={handleOpenNewModalTransaction} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewModalTransaction}
      />

      <GlobalStyle />
    </>
  );
}
