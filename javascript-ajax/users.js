var $userList = document.querySelector('#user-list');

function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let index = 0; index < xhr.response.length; index++) {
      const { name } = xhr.response[index];
      var $user = document.createElement('li');
      $user.textContent = name;
      $userList.appendChild($user);
    }
  });
  xhr.send();
}

getUserData();
