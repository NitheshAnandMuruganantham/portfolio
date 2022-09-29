import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img
            src="/favicon.ico"
            style={{
              height: "25px",
              marginRight: "10px",
            }}
          />{" "}
          <span>Nithesh Anand</span>
        </a>
      </a>
    </Div1>
    <Div2>
      <li>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech">
          <NavLink>Technologies</NavLink>
        </a>
      </li>
      <li>
        <a href="#about">
          <NavLink>About</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/NitheshAnandMuruganantham/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nithesh-anand-0a9451166">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/nithesh_anand_muruganandham/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
