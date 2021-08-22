function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);

    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // });
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    // console.log(player);
    player.innerHTML = ` <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias repellat fuga neque iure ipsa quaerat et ut praesentium repudiandae, ullam omnis debitis quasi vero deserunt aliquam, ab perspiciatis est!</p>`;

    //console.log(player);
    setPlayerStyle(player);
    playersContainer.appendChild(player);

    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // });
}

//29_5-5 (advanced) Event Bubble in a semi complex situation
document.getElementById('players').addEventListener('click', function (event) {
    //console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    } else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
});
