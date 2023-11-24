import { useState } from 'react';
import './App.css';
import PDFViewer from './PDFViewer';

function App() {
  const [filePath, setfilePath] = useState("");
  
  return (
    <div className="App">
      <body>
        <button onClick={() => {setfilePath("./pdf/node-handbook.pdf")}}>button</button>
        <PDFViewer filePath={filePath}></PDFViewer>
      </body>
    </div>
  );
}

export default App;
