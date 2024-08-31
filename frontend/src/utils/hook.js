import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [filePreview, setFilePreview] = useState(null);
  const [fileError, setFileError] = useState(null);

  // const onDrop = useCallback((acceptedFiles) => {
  //   setFiles(acceptedFiles);
  //   setFilePreview(URL.createObjectURL(acceptedFiles[0]));
  // }, []);

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      setFilePreview(URL.createObjectURL(acceptedFiles[0]));
      setFileError(null);
    }
    if (rejectedFiles.length > 0) {
      setFilePreview(null);
      setFileError("File size exceeds the 1MB limit");
      toast.error("File size exceeds the 1MB limit");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 1048576, // 1MB
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    files,
    filePreview,
    fileError,
    getRootProps,
    getInputProps,
  };
};
