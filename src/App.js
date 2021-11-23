import { IKImage } from "imagekitio-react";
import { useContext, useState } from "react";
import { urlEndpoint } from "./api";
import { FileUpload } from "./components/fileUpload";
import { StatusContext } from "./StatusContext";

function App() {
  const { status, setStatus } = useContext(StatusContext);
  const [error] = useState("");
  const [setSelectedFile] = useState(null);

  const StageRender = () => {
    if (status === "initial") {
      return UploadStage();
    } else if (status === "loading") {
      return UploadingStage();
    } else if (status === "success") {
      return FinishedStage();
    } else {
      return ErrorStage();
    }
  };

  const UploadStage = () => {
    return (
      <div className="uploadStage">
        <h1 className="my-8 title defaultText">Upload your image</h1>
        <h2 className="mb-10 subtitle defaultText">File should be Jpeg, Png,...</h2>
        <FileUpload></FileUpload>
      </div>
    );
  };

  const resetState = () => {
    setStatus("initial");
    sessionStorage.clear();
  };

  const UploadingStage = () => {
    return (
      <div className="UploadingStage">
        <h1 className="my-6 text-left uploading defaultText">Uploading...</h1>
        <div className="my-6 relative w-full bg-gray-200 rounded-lg">
          <div className="loading-bar absolute top-0 h-2 rounded-lg shim-blue"></div>
        </div>
      </div>
    );
  };
  const FinishedStage = () => {
    var res = JSON.parse(sessionStorage.imageValues);
    return (
      <div className="FinishedStage">
        <h1 className="my-6 text-center uploading defaultText">Uploaded Successfully!</h1>
        <IKImage className="rounded-xl mb-10" urlEndpoint={urlEndpoint} path={res.name} />
        
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" readOnly  type="text" id="url" name="url" value={res.url}/>
        <br/>
        <button className="btn btn-blue my-4" onClick={resetState}>
          Return
        </button>
      </div>
    );
  };
  const ErrorStage = () => {
    return (
      <div className="errorStage">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button className="btn btn-blue my-4" onClick={resetState}>
          Return
        </button>
      </div>
    );
  };

  return (
    <div className="App container mx-auto py-4">
      <div className="uploadBox text-center bg-white rounded-xl shadow-lg max-w-md mx-auto px-8 py-6">
        <StageRender />
      </div>
    </div>
  );
}

export default App;
