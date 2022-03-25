import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Navbar/Navbar";
import Shop from "./Shop/Shop";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function App() {
  const [modal, setModal] = useState(false);

  // this is for modal
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  return (
    <div>
      <Navbar openModal={openModal}></Navbar>
      <Shop
        modal={modal}
        customStyles={customStyles}
        closeModal={closeModal}
      ></Shop>
    </div>
  );
}

export default App;
