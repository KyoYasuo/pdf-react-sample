import './App.css';
import PDFViewer from './PDFViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <PDFViewer filePath={"./pdf/pdf-lib_modification_example.pdf"}></PDFViewer>
      </body>
    </div>
  );
}

export default App;
