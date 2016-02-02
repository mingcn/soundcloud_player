console.log('hello');

SC.initialize({
  client_id: '862c17df6947105a242a233b11295428'
});

var track_url = 'https://soundcloud.com/thaddeus-trinh/sets/hm';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
  document.body.innerHTML = oEmbed.html;
});