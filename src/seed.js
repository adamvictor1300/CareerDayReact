/* eslint-disable no-plusplus */
// NOTE: replace 'aNBn59REVzUFyUsMNdpxllov8BI3' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'aNBn59REVzUFyUsMNdpxllov8BI3',
      username: 'avictor',
      fullName: 'Adam Victor',
      emailAddress: 'adamvictor@roboretail.us',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: 'qq46qn101YPRQ17b3gjxIjVzyRI2',
      username: 'ddavid',
      fullName: 'David DiMeo',
      emailAddress: 'daviddimeo@roboretail.us',
      following: ['12'],
      followers: ['15', '23', '7'],
      dateCreated: Date.now()
    },
    {
      userId: '1UTb05Egh1RwKc1xfpCSd0pvR4j1',
      username: 'dpramila',
      fullName: 'Pramila Devadas',
      emailAddress: 'pramiladevadas@roboretail.us',
      following: ['42'],
      followers: ['14','10','11'],
      dateCreated: Date.now()
    },
    {
      userId: 'J8u4NMYauVcQlXDXckJaxZ1tffK2',
      username: 'kalex',
      fullName: 'Alex Kaump',
      emailAddress: 'alexkaump@roboretail.us',
      following: ['14'],
      followers: ['20','15','17'],
      dateCreated: Date.now()
    },
    {
      userId: 'YRcNh31IjEaMn2JGF5wSfDb4UP83',
      username: 'fmarc',
      fullName: 'Marc Fecker',
      emailAddress: 'marcfecker@roboretail.us',
      following: ['16'],
      followers: ['24','12','19'],
      dateCreated: Date.now()
    },
    {
      userId: 'dnHcCQByV6OOGGcK0YMHDxBGYnW2',
      username: 'meduardo',
      fullName: 'Eduardo Montemayor',
      emailAddress: 'eduardomontemayor@roboretail.us',
      following: ['18'],
      followers: ['27','15','19'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}