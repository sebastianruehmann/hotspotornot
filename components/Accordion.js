import React, {useState} from "react";
import styled from "styled-components";

const Checkbox = styled.input`
  display: none;
  visibility: hidden;
`;

const Label = styled.label`
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  color: #686868;
  line-height: 1.15;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem;
  &:after {
    content: "${props => (props.isExpanded ? "\\02796" : "\\02795")}";
    font-size: 1.2rem;
    align-self: center;
    margin-left: auto;
  }
`;

const Wrapper = styled.div`
  border: 2px solid #f5f5f7;
`

const Content = styled.div`
  color: #686868;
  font-size: 1rem;
  padding-bottom: ${props => (props.isExpanded ? "1rem" : "0")};
  padding-left: ${props => (props.isExpanded ? "1rem" : "0")};
  padding-right: ${props => (props.isExpanded ? "1rem" : "0")};
  max-height: ${props => (props.isExpanded ? "100%" : "0")};
  overflow: hidden;
`;

export const Accordion = ({ itemId, label, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        id={itemId}
        name={itemId}
        onChange={() => setExpanded(expanded => !expanded)}
      />
      <Label isExpanded={expanded} htmlFor={itemId}>{label}</Label>
      <Content isExpanded={expanded}>
        {children}
      </Content>
    </Wrapper>
  );
}

export default {
  Accordion
};
