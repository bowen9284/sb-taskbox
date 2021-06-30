import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  TaskBox: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    backgroundColor: '#26c6da',
  },
  CheckBox: {
    borderColor: '#26c6da',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 1,
    backgroundColor: 'transparent',
    height: 18,
    width: 18,
  },
  GlowCheckbox: {
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 1,
    backgroundColor: '#eee',
    color: 'transparent',
    height: 20,
    width: 20,
  },
  GlowText: {
    backgroundColor: '#eee',
    color: 'transparent',
  },
  ListItem: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 48,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ListItemInputTask: {
    backgroundColor: 'transparent',
    width: '95%',
    padding: 10,
    fontFamily: 'NunitoSans',
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
  },
  ListItemInputTaskArchived: {
    color: '#aaa',
    width: '95%',
    padding: 10,
    fontFamily: 'NunitoSans',
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
  },
  LoadingItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flex: 1,
    height: 48,
    justifyContent: 'space-around',
    paddingLeft: 16,
    width: '100%',
  },
  ListItems: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: 288,
  },
  WrapperMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '40%',
    bottom: 'auto',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
  },
  PageListsShow: {
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  PageListsShowhead: {
    backgroundColor: '#d3edf4',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  TitleMessage: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'NunitoSans',
    fontWeight: '800',
    color: '#555',
  },
  SubtitleMessage: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    fontFamily: 'NunitoSans',
  },
  titlepage: {
    fontSize: 20,
    lineHeight: 24,
  },
  TitleWrapper: {
    fontFamily: 'NunitoSans',
    fontWeight: '800',
    color: '#1c3f53',
    maxWidth: '100%',
  },
});
