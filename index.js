process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api')
const fetch = require('node-fetch');

var cron = require('node-cron');
const token='BOT_TOKEN'
const bot =new TelegramBot(token,{
    polling: {interval:3,
        autoStart:true,
        params:{
            timeout:1
        }
    }
            
});

bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
   
});

bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
    function good(){
        global.time= setInterval(request2,60000) 
       }
    async function request2(){
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<5;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
      
        //if((data.items.results[i].results[0].color==="grey")&& (data.items.results[i].results[0].color===data.items.results[i+1].results[0].color)) {
        //	 alert("раздача №"+i);}
         
        }
         console.log(arr);
         if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="black")||
         ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="red") ))
         { 
             sendMessageByBot(messageChatId, "Ставим:  ⬛ Чёрный  ⬜ Серый");
         }
         if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="red"  )
         ||((arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="black")))
         {
             sendMessageByBot(messageChatId, "Ставим: 🟥 Красный ⬜ Серый");
         }
     if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="black" )||
     ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="grey")))
         {
 
             sendMessageByBot(messageChatId, "Ставим:  ⬛ Чёрный 🟥 Красный");
         }
         
     if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="red" )||
     ( (arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="grey") ))
         {
             sendMessageByBot(messageChatId, "Ставим: 🟥 Красный ⬛ Чёрный");
         }
        
         
       
         if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="grey" )||
         ((arr[0]==="white") && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="black") ))
         {   
             sendMessageByBot(messageChatId, "Ставим: ⬜ Серый 🟥 Красный ");
       
         }
             if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="grey" )||
             ( (arr[0]==="white" ) && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="red")))
         {    
             sendMessageByBot(messageChatId, "Ставим:  ⬜Серый ⬛ Чёрный");
         }
        
        }
      
    if (messageText === '/start') {
        
        sendMessageByBot(messageChatId,"Цвета");       
          good(); 
          var cron = require('node-cron');

var task = cron.schedule('51 09 * * *', () =>  {
  console.log('stopped task');
}, {
  scheduled: false
});

task.start();
    }
    if (messageText === '/end') {
        

           clearInterval(time);
           sendMessageByBot(messageChatId,"Пока");  
    }
    console.log(msg);
});
 
function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}
//setInterval(request2, 30000);
async function request2(){
    const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
    const data = await response.json()
   let arr=[];
    for(let i=0; i<=5;i++){
 
    colors =data.items.results[i].results[0].color
   arr.push(colors);
  
    //if((data.items.results[i].results[0].color==="grey")&& (data.items.results[i].results[0].color===data.items.results[i+1].results[0].color)) {
	//	 alert("раздача №"+i);}
	 
	}
	
	 console.log(arr);

	if(arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="black"  && (arr[5]==="white" ||arr[5]==="red"))
	{
		alert("Ставим чёрный серый");
	}
	
	
if(arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="black"  && (arr[5]==="white" ||arr[5]==="grey"))
	{
		alert("Ставим чёрный красный ");
	}

	
if(arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="red"  && (arr[5]==="white" ||arr[5]==="grey"))
	{
		alert("Ставим  красный чёрный");
	}
	
	if(arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="red"  && (arr[5]==="white" ||arr[5]==="black"))
	{
		alert("Ставим  красный серый");
	}
	if(arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="grey"  && (arr[5]==="white" ||arr[5]==="black"))
	{
		alert("Ставим  Серый красный");
	}
		if(arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="grey"  && (arr[5]==="white" ||arr[5]==="red"))
	{
		alert("Ставим  Серый чёрный");
	}
				
	
    }
    /* if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="black")||
        ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="red") ))
        { 
            sendMessageByBot(messageChatId, "Ставим:  ⬛ Чёрный  ⬜ Серый");
        }
        if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="red"  )
        ||((arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="black")))
        {
            sendMessageByBot(messageChatId, "Ставим: 🟥 Красный ⬜ Серый");
        }
    if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="black" )||
    ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="grey")))
        {

            sendMessageByBot(messageChatId, "Ставим:  ⬛ Чёрный 🟥 Красный");
        }
        
    if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="red" )||
    ( (arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="grey") ))
        {
            sendMessageByBot(messageChatId, "Ставим: 🟥 Красный ⬛ Чёрный");
        }
       
        
      
        if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="grey" )||
        ((arr[0]==="white") && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="black") ))
        {   
            sendMessageByBot(messageChatId, "Ставим: ⬜ Серый 🟥 Красный ");
      
        }
            if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="grey" )||
            ( (arr[0]==="white" ) && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="red")))
        {    
            sendMessageByBot(messageChatId, "Ставим:  ⬜Серый ⬛ Чёрный");
        }*/
