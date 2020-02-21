

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/PL9627')
  .then((response) => {
    console.log(response);
    cards.appendChild(userCard(response.data));
  })
  .catch((err) => {
    console.log('This is an error', err);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards');
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['bayronpuac', 'joshaw66', 'tetondan', 'justsml', 'bigknell'];

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const card = userCard(res.data);
      const cards = document.querySelector('.cards');
      cards.appendChild(card);
    })
    .catch((err) => {
      console.log('This is an error', err);
    })
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const userCard = (user) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const createImg = document.createElement('img');
  createImg.src = user.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const createName = document.createElement('h3');
  createName.classList.add('name');
  createName.textContent = user.name;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = user.login;

  const loc = document.createElement('p');
  loc.textContent = `Location: ${user.location}`;

  const createProfile = document.createElement('p');
  createProfile.textContent = `Profile: `;

  const createAddress = document.createElement('a');
  createAddress.href = user.html_url;

  const createFollowers = document.createElement('p');
  createFollowers.textContent = `Followers: ${user.followers}`;

  const createFollowing = document.createElement('p');
  createFollowing.textContent = `Following: ${user.following}`;

  const createBio = document.createElement('p');
  createBio.textContent = `Bio: ${user.bio}`;

  card.appendChild(createImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(createName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(loc);
  cardInfo.appendChild(createProfile);
  createProfile.appendChild(createAddress);
  cardInfo.appendChild(createFollowers);
  cardInfo.appendChild(createFollowing);
  cardInfo.appendChild(createBio);

  return card;
};
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
