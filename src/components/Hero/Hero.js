import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { saveAs } from "file-saver";

const saveFile = () => {
  saveAs(
    "https://drive.google.com/u/0/uc?id=1fogXa6BisMBW3UOnpTClThJfMOoM25Za&export=download",
    "Peroy Nel Resume 2022.pdf"
  );
};


const Hero = (props) => (
    
  <Section row nopadding>
    
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> 
        My Portfolio

      </SectionTitle>
      <SectionText>
        I am a Software Developer.
      </SectionText>
      <Button onClick={saveFile}>Download Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;