import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormikContext } from 'formik';

const InputFile = ({ ...props }: any) => {
  const [files, setFiles] = useState([]);
  const { setFieldValue } = useFormikContext();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );

      setFieldValue(props.name, acceptedFiles[0]);
    }
  });

  const thumbs = files.map((file: any, i: number) => (
    <div className="input-file--preview" key={file.name}>
      <img src={file.preview} data-img-src={file.preview} />

      <a className="remove" onClick={() => removeThumb(i)}>
        <i>close</i>
      </a>
    </div>
  ));

  const removeThumb = (i: number) => {
    const its = files.splice(0, i);
    setFiles(its);
  };

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="w-full h-full">
      <div {...getRootProps({ className: `dropzone ${props.className}` })}>
        <input {...getInputProps()} />
        <div>Add Photo</div>
      </div>

      <div className="flex flex-wrap mt-8">{thumbs}</div>
    </section>
  );
};

export default InputFile;
