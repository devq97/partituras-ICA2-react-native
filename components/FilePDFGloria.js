import * as React from 'react';
import { View } from "native-base";
import PdfReader from "rn-pdf-reader-js";
import { Asset } from 'expo-asset';

const FilePDFGloria = () => {

  const absolutePath = Asset.fromModule(require('../assets/gloria_compressed.pdf')).uri;

  return (
    <PdfReader
      source={{
        uri: absolutePath,
      }}
    />
  )
}

export default FilePDFGloria;