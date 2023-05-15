import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  function onMessage(data) {
    alert(data.nativeEvent.data);
  }

  return (
    <SafeAreaView style={{flex: 1, width: 300, height: 350,}}>
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
              background-color:rgba(159,5,0, 0.8);
            "
          >
           
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
            </script>

            <div>
            <iframe width="100%" height="350px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowtransparency="true" src="https://chatroll.com/embed/chat/hour-of-prayer-radio?id=dqfP4CJUyl1&platform=html"></iframe>

            
            </div>


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