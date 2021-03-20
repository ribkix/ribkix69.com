axios.get("https://www.googleapis.com/youtube/v3/search?channelId=UCZX2Bzb_b58hdsthBWU3PDg&part=snippet,id&order=date&maxResults=100000&key=AIzaSyBCUyecId_AlBcnXg7p3xfuwSMR-5GKZX4")
    .then((response) => {
        var videos = response.data;
        var output = "";
        var players = [];

        $.each(videos.items,(index, video) => {
            if (video.id.kind == "youtube#video"){
                output += `
                <div class="youtube-video">
                    <iframe width="640" height="480" src="https://www.youtube.com/embed/${video.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                `;
                players.push("player-" + index);
            }
        });

        $("#videos").html(output);

        $.each(players,(index,player) => {
            new Plyr("#" + player);
        });
    })
    .catch((err) => {
        console.error(err);
    });