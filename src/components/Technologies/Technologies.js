import React from 'react';
import { DiFirebase, DiReact, DiCssTricks, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <SectionText>
      I have worked with a number of technologies related to software development with a focus on React.JS, Node.JS, Express, Redux, Axios and MongoDB.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle> 
          <ListParagraph>
             
            React.JS <br />
            Material-UI <br />
            TailwindCSS


          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            
            Node.JS <br />
            Express <br />
            Redux <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCssTricks size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            
            Figma <br />
            Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
