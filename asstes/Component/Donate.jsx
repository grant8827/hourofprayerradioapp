import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  function onMessage(data) {
    alert(data.nativeEvent.data);
  }

  return (
    <SafeAreaView style={{ width: 400, height:50,  }}>
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

            <form action="https://www.paypal.com/donate" method="post" target="_top">

            <input type="hidden" name="hosted_button_id" value="ZB6KFTJYEDDYE" />

            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" width="150px" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />

            <img alt="" border="0" src="https://www.paypal.com/en_JM/i/scr/pixel.gif" width="1" height="1" />

        </form>

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