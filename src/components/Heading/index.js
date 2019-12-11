import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const H1 = styled.h1`
  font-size: 12px;
`;
export const H2 = styled.h2`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: futura-pt, sans-serif;
  letter-spacing: 0px;
  color: ${props => props.primary ? "black" : "white"}
`;
export const H3 = styled.h3`
  font-size: 18px;
`;
export const H4 = styled.h4`
  font-size: 16px;
`;
export const Separator = styled.div`
  border-bottom: ${props => props.primary ? "1px solid #0097CE" : "1px solid black"};
`
export const Paragraph = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${props => props.primary ? "#0097CE" : "black"};
`
export const Title = props => {
  return (
    <>
      <div className="row px-5">{props.style == "light" ? <H2 primary>{props.title}</H2> : <H2>{props.title}</H2>}</div>
      <div className="row ">{props.style == "dark" ? <Separator primary>{props.title}</Separator> : <Separator>{props.title}</Separator>}</div>
      <div className="row">{props.style == "light" ? <Paragraph primary>{props.paragraph}</Paragraph> : <Paragraph>{props.paragraph}</Paragraph>}</div>
    </>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  style: PropTypes.string.isRequired,


};

H2.propTypes = {
  primary: PropTypes.string.isRequired,
}