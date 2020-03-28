//connecting to firebase is done here. 

//we dont have to import sdk in a script tag since we install it locally 


//this caused warnings, so i used below method ↓
//import * as firebase from 'firebase'; //imports all named exports from firebase to a var

//this one ←
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBz1NbwEPEC6LFw3Xrympw0iOjjBZoguiE",
  authDomain: "expensifyusa.firebaseapp.com",
  databaseURL: "https://expensifyusa.firebaseio.com",
  projectId: "expensifyusa",
  storageBucket: "expensifyusa.appspot.com",
  messagingSenderId: "982486225047",
  appId: "1:982486225047:web:3ee00a364ae9e7524599d2"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const createExpense = (desc, note, amnt, createdAt) =>{
  return {
    description: desc,
    note:note,
    amount:amnt,
    createdAt:createdAt
  };
};

//writing data 
// database.ref('expenses').push(createExpense('A',' this a ', 1431 , 424));
// database.ref('expenses').push(createExpense('B',' this b ', 32423, 3525));
// database.ref('expenses').push(createExpense('C',' adsada ', 3636 , 12312));

console.log('Watching for changes ... ');
//reading data 
database.ref('expenses').once('value')
  .then((snapshot) =>{
    const expenses = [];

    snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id:childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

database.ref('expenses').on('value',(snapshot)=>{
  const expenses = [];

  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id:childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log('on value', expenses);
});

database.ref('expenses').on('child_removed',(snapshot)=>{
 
  console.log('child_removed',snapshot.key ,snapshot.val() );
});

database.ref('expenses').on('child_changed',(snapshot)=>{
 
  console.log('child_changed',snapshot.key ,snapshot.val() );
});

//fires at already added 
database.ref('expenses').on('child_added',(snapshot)=>{
 
  console.log('child_added',snapshot.key ,snapshot.val() );
});
 
/**
//================================================fetching section =======================
//watching for changed 
//why not promise and a callback?
//because promise is called just once 
const onValueChange = database.ref().on('value', (snapshot)=>{
  const val = snapshot.val();
  console.log('On', val);
}, (e)=>{
  console.error('Error Fetching data', e);
});

const personalInfo = database.ref().on('value', (snapshot)=>{
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);

}, (e)=>{
  console.error('Error Fetching data', e);
});
//cancel subscription
//database.ref().off(onValueChange);

//getting data once 
database.ref().
  once('value').
  then((snapshot)=>{
    const val = snapshot.val();
    console.log(val);
  }).
  catch((e) => {
    console.error('Error fetching data ', e);
  });
*/




//================================================writing section =======================
// database.ref().set({
//   name: 'ali Agha',
//   age: 26,
//   isOk: true,
//   stressLevel: 6,
//   job:{
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Mashhad',
//     country: 'Persia'
//   }
// }).then(()=>{
//   console.log('Data is saved ');
// }).catch((e)=>{
//   console.error('Failed ', e);

// });
// /*
// database.ref('age').set(55);
// database.ref('location/city').set('Here');
// */

// const chngAgeQuery = (age) =>{
//   database.ref('age').set(age).then(()=>{
//     console.log('age is changed to  ', age);
//   }).catch((e)=>{
//     console.error('Failed changing age to ', age, e);
//   });
// }
// console.log("Requested Query")

// chngAgeQuery(85);

// //setting null is equivalent to remove
// database.ref('isOk').remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'Seattle' //notice this one, this is valid! & only updates city from location
// });

//Raw data from firebase site
/***
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
   https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBz1NbwEPEC6LFw3Xrympw0iOjjBZoguiE",
  authDomain: "expensifyusa.firebaseapp.com",
  databaseURL: "https://expensifyusa.firebaseio.com",
  projectId: "expensifyusa",
  storageBucket: "expensifyusa.appspot.com",
  messagingSenderId: "982486225047",
  appId: "1:982486225047:web:3ee00a364ae9e7524599d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
</script>
 */