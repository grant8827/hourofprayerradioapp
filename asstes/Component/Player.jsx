import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  function onMessage(data) {
    alert(data.nativeEvent.data);
  }

  return (
    <SafeAreaView style={{flex: 1, width: 400, height: 200,}}>
      <WebView
        scalesPageToFit={false}
        mixedContentMode="compatibility"
        onMessage={onMessage}
        source={{
          html: ` 
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              background-color:#ffc439;
            "
          >
           
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
            </script>

            <iframe src="https://zeno.fm/player/the-hour-of-prayer-radio" width="auto" height="auto" frameborder="0" scrolling="no"allow="autoplay"></iframe><a href="https://zeno.fm/" target="_blank" style="display: block; font-size: 0.9em; line-height: 10px;"></a>
</div>


</body>
        </html>        
`,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;




