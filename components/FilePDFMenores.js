import * as React from 'react';
import { View } from "native-base";
import PdfReader from "rn-pdf-reader-js";
import { Asset } from 'expo-asset';

const FilePDFMenores = () => {

  const absolutePath = Asset.fromModule(require('../assets/jovenes.pdf')).uri;

  return (
    <PdfReader
      source={{
        uri: absolutePath,
      }}
    />
  )
}

export default FilePDFMenores;