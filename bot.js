const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Emad Plays',
     details: `Im Emad Im The Best`,
     url: 'http://twitch.tv/Streammingg',
     state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480353259978752`,
        small_text: ' Take This ! ' ,
        large_image: `377480353259978752`,
        large_text: `ENP FOREVER` }

  }
    });
});



client.login(""NDYwMTI1MDAzNzc4ODgzNTg1.DmnmRw.KXhxu89tnhUaeCzNNP2SAIblqtQ"");
