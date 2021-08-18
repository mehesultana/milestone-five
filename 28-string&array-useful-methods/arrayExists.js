//28-4 Check an Array using isArray, indexOf, includes, concat
function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(1245);
console.log(myBigBuddy);
