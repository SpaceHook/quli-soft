import { StyleSheet, View } from 'react-native';
import List from './navigation';
import { globalStyle } from './styles/style';

export default function App() {
  return (
    <View style={globalStyle.main}>
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({

});
