import { PDFDocument } from 'pdf-lib';
import download from 'downloadjs';

export const createPDf = async () => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  page.drawText('haha!');
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, 'pdf-file.pdf', 'application/pdf');
};
