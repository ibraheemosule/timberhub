import { NavbarStyle } from "../assets/styles/NavbarStyle";
import { ContainerStyle } from "../assets/styles/ContainerStyle";
import ProjectLogo from "../assets/icons/ProjectLogo";

const Navbar: React.FC = () => {
  return (
    <NavbarStyle>
      <ContainerStyle>
        <ProjectLogo />
      </ContainerStyle>
    </NavbarStyle>
  );
};

export default Navbar;
