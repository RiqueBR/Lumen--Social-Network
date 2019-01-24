import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC3N1w23RUSfNC0myKC-D2Xd-pJBrx_fC4',
  authDomain: 'lumen-837c4.firebaseapp.com',
  databaseURL: 'https://lumen-837c4.firebaseio.com',
  projectId: 'lumen-837c4',
  storageBucket: 'lumen-837c4.appspot.com',
  messagingSenderId: '404012941247'
};
const fire = firebase.initializeApp(config);
export default fire;