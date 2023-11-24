import { useState } from 'react';
import './App.css';
import PDFViewer from './PDFViewer';

function App() {
  const [filePath, setfilePath] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <button onClick={() => {setfilePath("./pdf/pdf-lib_modification_example.pdf")}}>button</button>
        <PDFViewer filePath={filePath}></PDFViewer>
      </body>
    </div>
  );
}

export default App;
