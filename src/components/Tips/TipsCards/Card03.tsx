import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface CardThreeProps {
  setPageCard?: ((page: any) => void) | undefined;
}

export const CardThree = ({setPageCard}: CardThreeProps) => {
  return (
    <View>
      <TouchableOpacity onPress={setPageCard}>
        <ImageBackground
          style={{
            minWidth: '75%',
            height: 90,
            overflow: 'hidden',
            borderRadius: 24,
          }}
          source={require('../../../assets/image/cardThree.png')}>
            <Image style={{flex: 1, width:'100%', height: '100%', borderRadius: 24, backgroundColor:'black', opacity: 0.4, position: 'absolute'}}/>
          <Text style={styles.card_text_block}>
            The U.S. economy couldn't digest $6 trillion
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card_text_block: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    width: 250,
    paddingTop: 10,
    paddingLeft: 10,
  },
});
