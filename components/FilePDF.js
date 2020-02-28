import * as React from 'react';
import { View } from "native-base";
import PdfReader from "rn-pdf-reader-js";
import { Asset } from 'expo-asset';

const FilePDF = () => {

  const absolutePath = Asset.fromModule(require('../assets/cena.pdf')).uri;

  return (
      <PdfReader
        source={{
          uri: absolutePath,
        }}
      />
  )
}

export default FilePDF;