import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
export default class Algebra1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }
  render() {
    let preview_images = {
      image_1: require('../assets/alg1bg.png'),
      image_2: require('../assets/Linalg1.png'),
      image_3: require('../assets/Exalg1.png'),
      image_4: require('../assets/Qfalg1.png'),
      image_5: require('../assets/Qfgalg1.png'),
      image_6: require('../assets/Dasalg1.png')
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Algebra 1</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <Image
            source={preview_images[this.state.previewImage]}
            style={styles.previewImage}></Image>
          <View
            style={
              ({ height: RFValue(this.state.dropdownHeight) },
              { marginTop: 10 })
            }>
            <DropDownPicker
              items={[
                { label: 'Linear Equations', value: 'image_2' },
                { label: 'Exponential Functions', value: 'image_3' },
                { label: 'Quadratic Formulas', value: 'image_4' },
                { label: 'Quadratic Formulas - Graphing', value: 'image_5' },
                { label: 'Data Analysis/Statistics', value: 'image_6' },
              ]}
              defaultValue={this.state.previewImage}
              open={this.state.dropdownHeight == 170 ? true : false}
              onOpen={() => {
                this.setState({ dropdownHeight: 170 });
              }}
              onClose={() => {
                this.setState({ dropdownHeight: 40 });
              }}
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'white',
              }}
              textStyle={{
                color: this.state.dropdownHeight == 170 ? 'black' : 'white',
                fontFamily: 'Bubblegum-Sans',
              }}
              onSelectItem={(item) =>
                this.setState({
                  previewImage: item.value,
                })
              }
            />
          </View>
        </View>
        <View>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
    marginLeft: 100,
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
    marginTop: 20,
  },
  backText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  }
});
