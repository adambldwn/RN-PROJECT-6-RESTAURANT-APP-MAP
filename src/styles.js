import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    top: 10,
    alignSelf: 'center',
    left: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    padding: 0,
    marginLeft: 5
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    color:'#424242'
  },
});

export const detailStyle = StyleSheet.create({
  container: {

  },
  name: {

  },
  address: {

  },
  phone: {

  },
});