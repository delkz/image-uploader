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
        <h2>Uploading</h2>
        <div className="mt-6 relative w-full bg-gray-200 rounded">
          <div className="loading-bar absolute top-0 h-4 rounded shim-blue"></div>
        </div>
      </div>
    );
  };
  const FinishedStage = () => {
    var res = JSON.parse(sessionStorage.imageValues);
    return (
      <div className="FinishedStage">
        <IKImage urlEndpoint={urlEndpoint} path={res.name} />
        <h2>Finished</h2>
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
      <div className="uploadBox text-center bg-white rounded-lg shadow-md max-w-md mx-auto p-4">
        <StageRender />
      </div>
    </div>
  );
}

export default App;
