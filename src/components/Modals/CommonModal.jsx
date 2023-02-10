import React from "react";
import "../../styles/CommonModal.css";

const CommonModal = ({ headerName }) => {
  return (
    <>
      <header className="Modal-Header">{headerName.value}</header>
    </>
  );
};

export default CommonModal;
