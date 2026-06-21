function authenticateUser(userId, callback) {
  setTimeout(() => {
    if (userId === "user123") {
      console.log("User Authenticated.");
      callback(null, { authToken: "xyz-abc-123" });
    } else {
      callback("Authentication failed: Invalid user ID", null);
    }
  }, 1000);
}


function fetchUserProfile(token, callback) {
  setTimeout(() => {
    if (token.authToken === "xyz-abc-123") {
      console.log("Profile Fetched.");
      callback(null, { name: "John Doe", email: "[john.doe@example.com](mailto:john.doe@example.com)" });
    } else {
      callback("Fetching profile failed: Invalid token", null);
    }
  }, 1000);
}


function getAuthenticatedUserProfile(userId, callback) {
  authenticateUser(userId, (error, token) => {
    if (error) callback(error, userId);
    else fetchUserProfile(token, (error, profile) => {
      callback(error, profile);
    })
  });
}


// Successful case:

getAuthenticatedUserProfile("user123", (error, profile) => {
  if (error) {
    console.error(error);
  } else {
    console.log("User Profile:", profile);
  }
});

/* Expected output after ~2 seconds:
User Authenticated.
Profile Fetched.
User Profile: { name: 'John Doe', email: '[john.doe@example.com](mailto:john.doe@example.com)' }
*/


/*
// Failure case:
getAuthenticatedUserProfile("user456", (error, profile) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("User Profile:", profile);
  }
});
*/
/* Expected output after ~1 second:
Error: Authentication failed: Invalid user ID
*/