import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Button, IconButton, Paper } from "@mui/material";
import { Close } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Image from "next/image";

const DropZone = ({ className }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <form>
        <Box
          {...getRootProps({
            className: className,
            sx: {
              border: "2px dashed #aaaaaa",
              borderRadius: "4px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: isDragActive ? "#e0e0e0" : "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            },
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Typography variant="body1">Drop the files here ...</Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CloudUploadIcon sx={{ fontSize: 50 }} />
              <Typography variant="body1">
                Drag and drop files here, or click to select files
              </Typography>
            </Box>
          )}
          <Button variant="contained" color="primary">
            Select a File
          </Button>{" "}
        </Box>
        {files.length > 0 && (
          <>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Files
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {files.map((file) => (
                <li key={file.name} style={{ marginBottom: "10px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        marginRight: "10px",
                        overflow: "hidden",
                      }}
                    >
                      {file.type.startsWith("image/") ? (
                        <Image
                          src={file.preview}
                          alt={file.name}
                          width={100}
                          height={100}
                          onLoad={() => {
                            URL.revokeObjectURL(file.preview);
                          }}
                        />
                      ) : (
                        <InsertDriveFileIcon sx={{ fontSize: 100 }} />
                      )}
                    </Box>
                    <Box>
                      <Typography variant="body1">{file.name}</Typography>
                      <Typography variant="body2">
                        {Math.round(file.size / 1024)} KB
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => removeFile(file.name)}
                      color="error"
                    >
                      <Close />
                    </IconButton>
                  </Box>
                </li>
              ))}
            </ul>
          </>
        )}
      </form>
    </Paper>
  );
};

export default DropZone;
