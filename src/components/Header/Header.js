import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
          <DiTerminal size="3rem" />  <span>&nbsp;Peroy Nel</span>

        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>

      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>

      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>

      </li>
      <li>
        <Link href="#acomplishments">
          <NavLink>Milestones</NavLink>
        </Link>

      </li>
      
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/PeroyNel">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/peroy-nel/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/peroynel/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;
