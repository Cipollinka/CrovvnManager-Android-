import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface CardOneProps {
  setPageCard?: ((page: any) => void) | undefined;
}

export const CardOne = ({setPageCard}: CardOneProps) => {
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
          source={require('../../../assets/image/cardOne.png')}>
            <Image style={{flex: 1, width:'100%', height: '100%', borderRadius: 24, backgroundColor:'black', opacity: 0.4, position: 'absolute'}}/>
          <SafeAreaView style={{paddingTop: 10,
            paddingLeft: 10,}}>
            <Text style={styles.card_text_block}>
              1. Do not step on the gas
            </Text>
            <Text style={styles.card_text_block}>
              2. Cook in the multicooker
            </Text>
            <Text style={styles.card_text_block}>
              3. Create your own rental income
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card_text_block: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
  },
});
