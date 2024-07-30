import React, { useEffect, useRef } from 'react';
/**
 * componente para convertir imagenes base64 a blob
 * 
 * Props:
 * - base64Images (array): se envia un array con las imagenes a convertir
 * - onBlobsReady (function): handle para el resultado de la conversion
 */
const Base64ToBlob = ({ base64Images, onBlobsReady }) => {
  const previousBase64ImagesRef = useRef([]);

  useEffect(() => {
    const arraysEqual = (arr1, arr2) => {
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
      }
      return true;
    };

    if (arraysEqual(base64Images, previousBase64ImagesRef.current)) return;

    const convertBase64ToBlob = async (base64) => {
      try {
        const byteString = atob(base64.split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
      } catch (error) {
        console.error('Error en la conversión de base64 a blob:', error);
        return null;
      }
    };

    const updateBlobs = async () => {
      const blobs = await Promise.all(base64Images.map(convertBase64ToBlob));
      onBlobsReady(blobs.filter(blob => blob !== null));
      previousBase64ImagesRef.current = base64Images;
    };

    updateBlobs();
  }, [base64Images, onBlobsReady]);

  return null;
};

export default Base64ToBlob;
