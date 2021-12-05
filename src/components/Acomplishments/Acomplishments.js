import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 66, text: 'Github Commits in 2021'},
  { number: 18, text: 'Repositories', },
  { number: 8, text: 'Github Followers', },
  { number: 0, text: 'Github Stars', }
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
