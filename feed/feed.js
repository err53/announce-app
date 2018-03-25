// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
  apiKey: "<your-api-key>",
  authDomain: "<your-project-id>.firebaseapp.com",
  databaseURL: "https://<your-project-id>.firebaseio.com",
  storageBucket: "<your-project-id>.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the announcements object in your Firebase database
var announcements = firebase.database().ref("announcements");


// Get the last 12 most recent announcements from the database and
// update the table with its values. This is called every time the child_added
// event is triggered on the announcements Firebase reference, which means
// that this will update EVEN IF you don't refresh the page. Magic.
announcements.limitToLast(12).on('child_added', function(childSnapshot) {
  // Get the announcement data from the most recent snapshot of data
  // added to the announcements list in Firebase
  announcement = childSnapshot.val();

  // Update the HTML to display the announcement text
  $("#title").innerhtml(announcement.title)
  $("#text").html(announcement.text)
  $("#").html(announcement.link)

  // Make the link actually work and direct to the URL provided
  $("#link").attr("href", announcement.link)
});

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id announcementForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#announcementForm").submit(submitRecommendation);

});