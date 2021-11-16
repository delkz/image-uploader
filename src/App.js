import { useState } from "react";

function App() {
  const [stage, setStage] = useState(1);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const StageRender = () => {
    if (stage === 1) {
      return UploadStage();
    } else if (stage === 2) {
      return UploadingStage();
    } else if (stage === 3) {
      return FinishedStage();
    } else {
      return ErrorStage();
    }
  };

  const UploadStage = () => {
    const onFileChange = (event) => {
      // Update the state
      setSelectedFile(event.target.files[0]);
    };

    const fileUploadedIsImage = () => {
      if (selectedFile) {
        switch (selectedFile.type) {
          case "image/png":
            return true;
          case "image/jpeg":
            return true;
          default:
            return false;
        }
      }
    };

    const onFileUpload = () => {
      if (selectedFile) {
        if (fileUploadedIsImage()) {
          // Create an object of formData
          const formData = new FormData();

          // Update the formData object
          formData.append("myFile", selectedFile, selectedFile.name);

          // Details of the uploaded file
          console.log(selectedFile);

          // Request made to the backend api
          // Send formData object
          setStage(2);
        } else {
          setStage(4);
          setError("Invalid file type, must be PNG or JPG");
        }
      }
    };

    const fileData = () => {
      if (selectedFile) {
        return (
          <div className="mt-4">
            <h2>File Details:</h2>

            <p>File Name: {selectedFile.name}</p>

            <p>File Type: {selectedFile.type}</p>

            <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    return (
      <div className="uploadStage">
        <h1>Upload your image</h1>
        <span>File should be Jpeg, Png,...</span>
        <div>
          <input type="file" name="" id="" onChange={onFileChange} />
          <button disabled={selectedFile === null} className="btn btn-blue my-4" onClick={onFileUpload}>
            Upload!
          </button>
        </div>
        {fileData()}
      </div>
    );
  };


  const resetState = () => {
    setStage(1);
    setSelectedFile(null);
  }

  const UploadingStage = () => {
    return (
      <div className="UploadingStage">
        <h2>Uploading</h2>
      </div>
    );
  }
  const FinishedStage = () => {
    return (
      <div className="FinishedStage">
        <h2>FinishedStage</h2>
      </div>
    );
  }
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
  }

  return (
    <div className="App container mx-auto py-4">
      <div className="uploadBox text-center bg-white rounded-lg shadow-md max-w-md mx-auto p-4">
        <StageRender />
      </div>
    </div>
  );
}

export default App;
