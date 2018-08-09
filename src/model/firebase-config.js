var config = {
    apiKey: "AIzaSyCzeQLMssN15noRvJCRMZpd77fGOJAn_PI",
    authDomain: "wework-93e51.firebaseapp.com",
    databaseURL: "https://wework-93e51.firebaseio.com",
    projectId: "wework-93e51",
    storageBucket: "",
    messagingSenderId: "811538399021"
  };
  firebase.initializeApp(config);

  window.referenceDatabase = firebase.database();
  