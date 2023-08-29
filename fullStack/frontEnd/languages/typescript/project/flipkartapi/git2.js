// URL for the GitHub users API endpoint
const apiUrl = 'https://api.github.com/users';

// Fetch list of users from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(usersData => {
    // Get the DOM element where you want to display the user table body
    const tableBody = document.querySelector('#user-table tbody');

    // Loop through each user and create a table row
    usersData.forEach(user => {
      const row = document.createElement('tr');
      
      // Create table data cells for user login, profile link, and avatar
      const loginCell = document.createElement('td');
      loginCell.style.fontSize="40px"
      const profileCell = document.createElement('td');
      profileCell.style.fontSize="30px"
      const avatarCell = document.createElement('td');
      avatarCell.style.fontSize="40px"


      const username = document.createElement('name');
      username.textContent = user.login;
      username.style.fontSize="30px"
      username.style.fontStyle='bold'
      username.style.color="Black"
      loginCell.appendChild(username);

      // Create a link to the user's GitHub profile
      const profileLinkElement = document.createElement('a');
      profileLinkElement.href = user.html_url; // Set the URL from the API response
      profileLinkElement.target = '_blank'; // Open the link in a new tab
      profileLinkElement.textContent = user.login; // Display the username as the link text
      profileLinkElement.style.margin="100px"
      profileLinkElement.style.fontSize="bold"
      profileCell.appendChild(profileLinkElement);

      // Create an image element for the user's avatar
      const avatarElement = document.createElement('img');
      avatarElement.src = user.avatar_url; // Set the avatar URL from the API response
      avatarElement.alt = `${user.login}'s Avatar`;
      avatarElement.style.width="  200px"
      avatarElement.style.height="200px"
      avatarElement.style.padding="30px"
      avatarElement.style.borderRadius= "150px 150px " // Set alt text for the image
      avatarCell.appendChild(avatarElement);

      // Append table cells to the row
      row.appendChild(loginCell);
      row.appendChild(profileCell);
      row.appendChild(avatarCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
