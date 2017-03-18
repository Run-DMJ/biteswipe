import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    elevation: 2,
    flex: 1,
    backgroundColor: '#ffffff'
  },
  card: {
    elevation: 2,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 15
  },
  cardTitleContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 24,
    padding: 16,
  },
  container: {
    flex: 1
  },
  cardImage: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.5
  },
  reviewImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  tabContainer: {
    flex: 1
  },
  tab: {
    width: Dimensions.get('window').width * 1,
    padding: 15
  },
  scrollItem: {
    flex: 1
  },
  tabTitle: {
    color: 'black'
  },
  reviewHeader: {
    flex: 1,
    flexDirection: 'row'
  },
  reviewName: {
    marginLeft: 40
  },
  pushDown: {
    marginTop: 12
  },
  link: {
    color: 'blue'
  }
});
