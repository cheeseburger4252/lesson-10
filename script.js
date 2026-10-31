
$('.activity').hide();
$('#tog').click(function () {
    let params = $('.filters input').serialize();
    console.log(params);
    $("#tog").attr('disabled', true);
    $.ajax(`https://bored.api.lewagon.com/api/activity/?${params}`,
        {
            dataType: 'json',
            success: function(result)
            {
                $('.activity').hide();
                $('.activity').html(`
                    <p>Activity: ${result.activity}</p>
                    <p>Price: ${result.price}$</p>
                    <p>Type: ${result.type}</p>`);
                $('.activity').show();
                $("#tog").attr('disabled', false);
                $("#tog").html('Randomize again');
            },
            error: function(xhr)
            {
                console.log(xhr.statusText);
            }
        })
});
