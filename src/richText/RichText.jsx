import React, { useEffect, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import Delta from 'quill-delta';
import Button from '../button/Button';
import Base64ToBlob from '../helper/Base64ToBlob';

/**
 * RichText componente
 * 
 * Props:
 * - onFinalObjectChange (function): handle para obtener el un objeto con las imagenes y el texto del rich text
 */

const RichText = ({onFinalObjectChange} ) => {
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);
    const [base64Images, setBase64Images] = useState([]);
    const [blobs, setBlobs] = useState([]);
    const quillRef = useRef();
    const [contentTXT, setContentTXT] = useState('');
    const [finalObject, setFinalObject] = useState(null);
    

    const handleBlobsReady = (blobsArray) => {
        setBlobs(blobsArray);
    };

    const handleButtonClick = () => {
        const content = quillRef.current.root.innerHTML;
        const texts = content.replace(/<img[^>]*>/gi, '<img />');
        const base64Images = Array.from(
            content.matchAll(/<img[^>]+src="(data:image\/[^;]+;base64,[^"]+)"/g)
        ).map(match => match[1]);
        setBase64Images(base64Images);
        setContentTXT(texts);
    };
    
    useEffect(() => {
        const updateFinalObject = async () => {
          if (contentTXT) {
            const finalObject = {
              images: blobs,
              content: contentTXT
            };
            setFinalObject(finalObject);
          }
        };
    
         updateFinalObject();
      }, [blobs, contentTXT]);


      useEffect(() => {
        if (finalObject) {
          onFinalObjectChange(finalObject);
        }
      }, [finalObject, onFinalObjectChange]);
    return (
        <div className='bg-white text-black border border-black'>

            <Editor
                ref={quillRef}
                readOnly={readOnly}
                defaultValue={new Delta()
                    .insert('Hello')
                    .insert('\n', { header: 1 })
                    .insert('Some ')
                    .insert('initial', { bold: true })
                    .insert(' ')
                    .insert('content', { underline: true })
                    .insert('\n')}
                onChange={setLastChange}
            />
            <Base64ToBlob
                    base64Images={base64Images}
                    onBlobsReady={handleBlobsReady}
                />
            <div className="flex justify-around p-4">
                <Button
                    text="Enviar"
                    color="primary"
                    onClick={handleButtonClick}
                />
                <Button
                    text="Cancelar"
                    color="danger"
                    onClick={handleButtonClick}
                />
            </div>
                
        </div>
    )
}

export default RichText