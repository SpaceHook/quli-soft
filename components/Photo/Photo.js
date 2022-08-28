import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export const Photo = ({route}) => {
  const [loading, setLoading] = useState(true);

  function onLoading(value) {
    setLoading(value);
  }

  return (
    <View style={{flex: 1}}>
      {loading &&
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      }
      <Image
        style={styles.image}
        source={{uri: route.params.urls.full}}
        onLoadEnd={() => onLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#323232',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});