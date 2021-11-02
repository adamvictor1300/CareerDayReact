import { firebase, FieldValue } from '../lib/firebase';

// check if user exists in firestore
export async function doesUsernameExist(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

    //console.log(result);

    return result.docs.map((user) => user.data().length > 0);   
}