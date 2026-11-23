 const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let url = 'https://raw.githubusercontent.com/cheeseburger4252/lesson-10/main/db.json'
let gaemsArray

let params = $('.filters input').serialize();
console.log(params);
$("#tog").attr('disabled', true);
$.ajax(`https://raw.githubusercontent.com/cheeseburger4252/lesson-10/main/db.json`,
    {
        dataType: 'json',
        success: function(result)
        {
            console.log(result);
            result.games.forEach(game => {
                $('.container').append(`
                    <div class="game">
                        <h3>${game.name}</h3>
                        <img src="${game.photo_url}" alt="">
                        <p><b>Developers:</b> ${game.developers}</p>
                        <p><b>Year:</b> ${game.release_date}</p>
                        <p><b>Description:</b${game.description}</p>
                        <a href="https://store.steampowered.com">Buy</a>
                    </div>`);  
            });
        },
        error: function(xhr)
        {
            console.log(xhr.statusText);
        }
    })
