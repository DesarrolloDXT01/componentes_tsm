import React, { useState, useRef } from 'react';

/**
 * InputFile Component
 * 
 * Props:
 * - onFileChange (function): Callback function to handle file change.
 * - color (string): Tailwind CSS class for border color.
 * - multiple (boolean): If true, allows multiple file selection.
 * 
 * Usage:
 * <InputFile
 *   onFileChange={handleFileChange}
 *   color="border-primary"
 *   multiple={true}
 * />
 */
//ToDo que el simbolo el area de arrastrar  y Crop image
const InputFile = ({ onFileChange, color }) => {
const colors = {
    primary : `border-dashed border-2 border-${color} p-4 rounded cursor-pointer`,
    secondary : `border-dashed border-2 border-${color} p-4 rounded cursor-pointer`,
    danger : `border-dashed border-2 border-${color} p-4 rounded cursor-pointer`,
    warning : `border-dashed border-2 border-${color} p-4 rounded cursor-pointer`
}
    
    const [files, setFiles] = useState([]);
    const inputRef = useRef(null);

    const handleFiles = (fileList) => {
        const filesArray = Array.from(fileList);
        setFiles(filesArray);
        if (onFileChange) onFileChange(filesArray);
    };

    const handleChange = (e) => {
        handleFiles(e.target.files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const triggerInputFile = () => {
        inputRef.current.click();
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        if (onFileChange) onFileChange(updatedFiles);
    };

    const inputBaseStyles = `px-4 py-2 rounded font-semibold border-2 ${color}`;

    const renderPreview = (file, index) => {
        const fileType = file.type.split('/')[1].toLowerCase();
        if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png') {
            return <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="w-32 h-32 object-cover" />;
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            );
        }
    };

    return (
        <div>
            <div
                className={`border-dashed border-2 ${colors[color]} p-4 rounded cursor-pointer`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={triggerInputFile}
            >
                <p className="text-center">Arrastra o Click para seleccionar archivo</p>
                <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4">
                {files.length > 0 && (
                    <div className="">
                        {files.map((file, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                <div className="border-2 p-2 rounded">
                                    {renderPreview(file, index)}
                                </div>
                                <p className="mt-2">{file.name}</p>
                                <button
                                    className="mt-2"
                                    onClick={() => removeFile(index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputFile;
