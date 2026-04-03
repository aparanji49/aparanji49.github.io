// src/app/designs/page.jsx
import React from "react";
import Designs from "../components/Designs";

export const metadata = {
  title: "Designs",
  description:
    "UI/UX design work and Figma wireframes — portfolio, Lifeboard, and other product design explorations.",
};
const DesignsPage = () => {
  return (
    <>
      <Designs />
    </>
  );
};

export default DesignsPage;