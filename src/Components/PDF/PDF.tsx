import React from 'react';
import style from './PDF.module.scss';
import { createPDf } from './../../Functions/PDF-CRUD';

const PDF = () => {
  return <div onClick={() => createPDf()}>PDF</div>;
};

export default PDF;
