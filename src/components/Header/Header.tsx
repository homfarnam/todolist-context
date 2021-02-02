import * as React from "react";
import { Header } from "./styles";

const PageHeader: React.FC = ({ children }) => {
  return (
    <Header>
      {children}
      <hr />
    </Header>
  );
};

export default PageHeader;
