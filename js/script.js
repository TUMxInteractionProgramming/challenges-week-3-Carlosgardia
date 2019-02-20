console.log('app is alive')

/*SWITCH CHANNELS WITH (*) */
function switchChannel(channelName,star){
    console.log('Tunning into channel '+channelName);
    $('#chat-title').html(channelName);
    $('#chat-location').html('upgrading.never.helps');
    $('#link-location').attr("href","https://map.what3words.com/upgrading.never.helps");
    $('#chat-star').attr("src","http://ip.lfe.mw.tum.de/sections/"+star+".png");
    $('li').removeClass('selected');
    $('li:contains(' +channelName+')').addClass('selected');
}

/*TOGGLE CHANNEL TO FAVORITE*/
function toggletoFavorite(){
    $('#chat-star').attr("src","http://ip.lfe.mw.tum.de/sections/star.png");
}

/*SELECT TABS*/
function selectTab(tabId){
    console.log('Changing to tab '+tabId);
    $('#tab-bar-New').removeClass('selected');
    $('#tab-bar-Trend').removeClass('selected');
    $('#tab-bar-Fav').removeClass('selected');
    $('#tab-bar-'+tabId).addClass('selected');
}

/*TOGGLE EMOJIBOX*/
function emojiBox(){
    $('#emojis').toggle();
}