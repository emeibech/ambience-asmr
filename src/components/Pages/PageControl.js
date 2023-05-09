import './PageControl.css';
import React from 'react';
import Beach from './Beach';
import Forest from './Forest';
import Garden from './Garden';
import Cafe from './Cafe';

const PageControl = ({navStatus}) => {

  if (navStatus.forest) return (
    <>
      <Forest />
    </>
  )

  if (navStatus.garden) return (
    <>
      <Garden />
    </>
  )

  if (navStatus.cafe) return (
    <>
      <Cafe />
    </>
  )

  return (
    <>
      <Beach />
    </>
  )
}

export default PageControl;
