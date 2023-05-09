// Firebaseの設定
var firebaseConfig = {
apiKey: "AIzaSyDvIL9X-qSqsw6i3Rp4TK98uygSfmI0v4A",
authDomain: "chat-a1eca.firebaseapp.com",
databaseURL: "https://chat-a1eca-default-rtdb.firebaseio.com",
projectId: "chat-a1eca",
storageBucket: "chat-a1eca.appspot.com",
messagingSenderId: "872682257719",
appId: "your-app-id",
measurementId: "1:872682257719:web:efdf8105ece4e019516eb2"
};

firebase.initializeApp(firebaseConfig);

// ファイルアップロード処理
var form = document.getElementById('file-upload-form');
var fileInput = document.getElementById('file-input');
var uploadProgress = document.getElementById('upload-progress');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var file = fileInput.files[0];
  var storageRef = firebase.storage().ref('uploads/' + file.name);
  var uploadTask = storageRef.put(file);

  uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    uploadProgress.innerText = 'アップロード中... ' + progress.toFixed(2) + '%';
  }, function(error) {
    console.error(error);
  }, function() {
    uploadProgress.innerText = 'アップロードが完了しました！';
  });
});
