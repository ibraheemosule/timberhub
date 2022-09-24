import { ILayout } from "../assets/ts-types/compTypes";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
