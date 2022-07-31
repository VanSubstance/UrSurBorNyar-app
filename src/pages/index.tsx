import React from "react";
import Config from "react-native-config";
import { WebView } from "react-native-webview"

const MainWebView = () => {
  return (
    <WebView
      originWhitelist={['https://*', 'http://*']}
      source={{
        uri: Config.CLIENT_URL ?? `http:/localhost:3000/`
      }} />
  );
};

export default {
  Index: MainWebView
};