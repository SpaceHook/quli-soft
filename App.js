import { View } from 'react-native';
import Gallery from './navigation';
import { globalStyle } from './styles/style';

export default function App() {
  return (
    <View style={globalStyle.main}>
      <Gallery/>
    </View>
  );
}
