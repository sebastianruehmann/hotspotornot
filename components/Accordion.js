import React from "react";
import styled from "styled-components";

export const Checkbox = styled.input`
  display: none;
  visibility: hidden;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  padding: 3px;
  font-weight: bold;
  cursor: pointer;
  &:after {
    content: "\u25BA";
    transform: ${props => (props.isExpanded ? "rotate(90deg)" : "none")};
    transition: 100ms linear all;
  }
`;

export const Accordion = ({ onAccordionClick, itemId, expanded }) => (
  <React.Fragment>
    <Checkbox
      type="checkbox"
      id={itemId}
      name={itemId}
      onClick={() => onAccordionClick(itemId)}
    />
    <Label isExpanded={expanded} htmlFor={itemId} />
  </React.Fragment>
);

export default {
  Accordion
};
