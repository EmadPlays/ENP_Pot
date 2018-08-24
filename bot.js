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





var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("Ready");   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


       if(message.content ===("باك")){
          message.channel.send('وِلْكُمْ يْا عَسَلْ');
          }
           if(message.content ===("برب")){
          message.channel.send('تِيْت يْا عَسَل');
             }
              if(message.content ===("عماد")){
                 message.channel.send('امر يا عيوني ؟');
                    }
              if(message.content ===("قناتك")){
                 message.channel.send('https://www.youtube.com/channel/UCvyErysTMO68eyLit_XYQhQ?sub_confirmation=1');
                                     }
              if(message.content ===("السلام عليكم")){
                 message.channel.send('وعليكم السلام نورت ♥');

                                           }
              if(message.content ===("هلا")){
                 message.channel.send('هلا فيك');

                                                    }
              if(message.content ===("ممكن طلب")){
                 message.channel.send('اطلب من عيوني ♥');

              if(message.content ===("كل زق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              if(message.content ===("كلزق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              
              
           
         } 

    });





client.login("NDYwMTI1MDAzNzc4ODgzNTg1.DmDSww.kGnSt3WOzbqqCycxXRjoAr9InnE");
