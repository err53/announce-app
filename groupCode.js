var login = function() {
  var groupCode = document.getElementById('groupCode').value;

  if (groupCode === 'bob') {
    ons.notification.alert('Congratulations!');
  } else {
    ons.notification.alert('Invalid Code');
  }
};