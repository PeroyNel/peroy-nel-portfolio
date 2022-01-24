import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 201, text: 'Github Commits'},
  { number: 27, text: 'Github Repositories', },
  { number: 14, text: 'Github Followers', },
  { number: 1, text: 'Years of Experience', }
];

const Acomplishments = () => (
  <Section id="acomplishments">
    <br />
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Milestones</SectionTitle>
    <br />
    
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
