import React, { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib';


const PDFViewer = ({ filePath }) => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const loadAndDisplayPDF = async () => {
      try {
        console.log(filePath);
        const response = await fetch(filePath);
        const pdfBytes = await response.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
        setPdfData(pdfDoc);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadAndDisplayPDF();
  }, [filePath]);

  return (
    <div>
      {pdfData ? (
        <div>
          {/* Display the first page of the PDF */}
          {pdfData.getPages(0).then((page) => (
            <iframe
              title="Test PDF Display"
              src={page.render()}
              type="application/pdf"
            />
          ))}
        </div>
      ) : (
        <div>Loading PDF...</div>
      )}
    </div>
  );
};

export default PDFViewer;