class Network {

  getLastMessages(callback, lastMessageId) {
    console.log('getting messages');
    let url = 'http://localhost:8080/getLastMessages';
    if (lastMessageId) url += `?id=${lastMessageId}`;

    let myHeaders = new Headers();
    let myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    fetch(url, myInit)
    .then((response) => response.json())
    .then((data) => {
      let messages = [];
      if (data.length) {
        let lastMessageId = data[data.length-1]._id;
        for (var i = 0; i < data.length; i++) {
          messages[i] = data[i].msg;
        }
        callback(messages, lastMessageId)
      }
    })
  }

  addNewMessage(message) {
    console.log('add message');

    let myHeaders = new Headers();

    let data = new FormData();
    data.append( 'value', message);

    let myInit = { method: 'POST',
                   headers: myHeaders,
                   mode: 'cors',
                   body: data,
                   cache: 'default' };
    fetch('http://localhost:8080/addNewMessage', myInit)
  }

}

export default Network;
