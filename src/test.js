import firebase from 'firebase.app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('L4MsHlWSbVOVumWtEaq5').collection('cardItems').doc('8GOKE85lcejOjJuYCm3q');
firestore.doc('/users/L4MsHlWSbVOVumWtEaq5/cardItems/8GOKE85lcejOjJuYCm3q');
firestore.collection('/users/L4MsHlWSbVOVumWtEaq5/cardItems');