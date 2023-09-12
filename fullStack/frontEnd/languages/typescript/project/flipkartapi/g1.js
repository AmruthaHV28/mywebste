// URL for the GitHub users API endpoint
const apiUrl = 'https://api.github.com/users';

console.log('github accounts')

// Fetch list of users from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(usersData => {
    // Get the DOM element where you want to display the user list
    const userListElement = document.getElementById('user-list');

    // Create an unordered list to display the user profile links and avatar images
    const ulElement = document.createElement('ul');
    ulElement.style.color="black"
    ulElement.style.size="5px"

    // Add each user's profile link and avatar as a list item to the unordered list
    usersData.forEach(user => {
      const liElement = document.createElement('li');


      const username = document.createElement('name');
      username.textContent = user.login;
      username.style.fontSize="30px"
      username.style.fontStyle='bold'
      username.style.color="red"
      liElement.appendChild(username);
      
      
      // Create a link to the user's GitHub profile
      const profileLinkElement = document.createElement('a');
      profileLinkElement.href = user.html_url; // Set the URL from the API response
      profileLinkElement.target = '_blank'; // Open the link in a new tab
      profileLinkElement.textContent = user.login;
      profileLinkElement.style.margin="100px"
      profileLinkElement.style.fontSize="bold" // Display the username as the link text
      liElement.appendChild(profileLinkElement);
      
      // Create an image element for the user's avatar
      const avatarElement = document.createElement('img');
      avatarElement.src = user.avatar_url; // Set the avatar URL from the API response
      avatarElement.alt = `${user.login}'s Avatar`; // Set alt text for the image
      liElement.appendChild(avatarElement);
      avatarElement.style.width="  200px"
      avatarElement.style.height="200px"
      avatarElement.style.padding="40px"
      avatarElement.style.borderRadius= "150px 150px "
      
      
      
      ulElement.appendChild(liElement);
    });

    // Append the unordered list to the user list element in the DOM
    userListElement.appendChild(ulElement);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
