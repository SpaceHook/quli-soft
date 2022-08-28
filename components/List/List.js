import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const List = ({navigation}) => {
  const [photos, setPhotos] = useState([]);
  const loadPhoto = (photo) => {
    navigation.navigate('Photo', photo);
  };
  
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
      .then(res => res.json()).then(data => {
        setPhotos(data);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        {photos.map((photo) => (
          <View style={styles.photoBlock} key={photo.id}>
            <TouchableOpacity style={{marginBottom: 10}} onPress={() => loadPhoto(photo)}>
              <Image
                style={styles.image}
                source={{uri: photo.urls.small}}
              />
            </TouchableOpacity>

            <Text style={[styles.text, {fontWeight: 'bold'}]}>{photo.id}</Text>
            <Text style={styles.text}>{photo.user.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#212121'
  },
  main: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  photoBlock: {
    width: '45%',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  image: {
    height: 200,
    borderRadius: 15,
  }
});