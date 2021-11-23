import React, { useContext } from "react";
import { IKUpload } from "imagekitio-react";
import { StatusContext } from "../StatusContext";

export const FileUpload = () => {
  const { setStatus } = useContext(StatusContext);

  const onError = (err) => {
    console.log("Error", err);
    setStatus("error");
  };
  const onSuccess = (res) => {
    console.log("Success", res);
    sessionStorage.setItem("imageValues", JSON.stringify(res));
    setStatus("success");
  };
  const onChange = (res) => {
    console.log("Uploading");
    setStatus("loading");
  };

  return (
    <IKUpload
      fileName="test-upload.png"
      onError={onError}
      onSuccess={onSuccess}
      onChange={onChange}
    />
  );
};
