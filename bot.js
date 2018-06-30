const Discord = require('discord.js');
var x; // new
var stage0 = "You wake up in a lush forest. It's in the middle of the night and you notice a light somewhere in the distance to your right.";
var quest0 = "Do you go (left) to go deeper into the dark forest or (right) towards the light?";
var stage0L="You head deeper into the woods. You can't see anything, and suddenly, a spear protrudes from your chest.";
var gameOver="You fall down, writhing in pain. You have died";
var stage01="You find an abandoned warehouse, with a bright yellow light beaming from within";
var quest01="Do you (go inside), or (wait) outside?";
var stage01L="You walk inside, quietly. You hear some footsteps behind you and you feel a blunt blow to the back of your head.";
var stage02="You wait outside and hear some sort of screaming from the inside. Shortly after, you see a man in a cloak run out.";
var quest02="Do you (chase) after the man in the cloak, or (sneak) into the warehouse to peep on what was going on?";
var stage02L="You chase after him, but you soon lose him in the dense forest. You have no idea where you are. Suddenly, a bright light appears behind you and you are engulfed in flames";
var stage03="You sneak in quietly. You see a woman being tied to a chair. You untie her. She tells you to follow her to her village and that it has been corrupted by evil mages";
var quest03="Do you (follow her) or (refuse) her request?";
var stage04="You follow her into the village. You see multiple people begging. They tell you to kill the mage. His head disappears.";
var stage03R="You refuse her and leave the warehouse. In the forest, a blue gleaming light appears. You follow it. Suddenly, blood starts gushing out of your mouth.";
var quest04="You challenge the mage. Before he accepts, the woman you rescued gave you a one-time-use charm. What does it do?";
var pTurn;
var enemyH;
var defX;
var dmgG;
var ans;
var damageTook;

//battles
var battle=" challenges you!";
var playerTurn;
//weapons
var fist=5;
var stick=7;
var sword=10;
var spellbook=20;
var weapon;
var dmg;
//armor
var glove=1;
var chainmail=5;

const client = new Discord.Client();

var squid;
var hugh;
var mafu;
var kono;
var save5;
var save;
var load;
var delet;
var damage;
var health;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var turn;


client.on('ready', () => {


   console.log('I am ready!');


});



   

client.on('message', message => {

   if (message.content === 'ping') {


      message.reply('pong');

   }

  
   if (message.content==="resetH"){//heal
      health=100;
      message.reply("Healed you back to 100 HP!");
   }
   if (message.content==="k;stats"){
     if (dmg===5){
       weapon= "fists";
     }
     if (dmg===7){
       weapon="stick";
     }
     
      message.reply("Health: "+health);
      message.reply("Weapon: "+weapon);
      message.reply("Damage: "+dmg);
   }
   
   if (message.content==="testH"){//test health
      //health=100;
      //message.reply(health=health-getRandomInt(10));
      damageTook=getRandomInt(10);
     
      message.reply("took "+damageTook+" damage");
      health=health-damageTook;
      message.reply("Health remaining: " +health);
   }
   if (message.content==="deleteSave"){//delete save
      message.reply("which save?");
      delet=1;
   }
   
   
   
if (message.content==="squid"&&delet===1){//delete save process
         squid=0;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="hugh"&&delet===1){
         hugh=0;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="mafu"&&delet===1){
         mafu=x;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="kono"&&delet===1){
         kono=x;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="save5"&&delet===1){
         save5=x;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
   if (message.content==="gameSave"){//game saving NEW
      message.reply("which save file?");
      save=1;
      
   }
   if (damage===1){
      health=health-Math.floor(Math.random()*10)+1;
      message.reply(health);
   }
   if (message.content==="squid"&&save===1){//save procces
         squid=x;
         x=-1;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="hugh"&&save===1){
         hugh=x;
         x=-1;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="mafu"&&save===1){
         mafu=x;
         x=-1;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="kono"&&save===1){
         kono=x;
         x=-1;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="save5"&&save===1){
         save5=x;
         x=-1;
         message.reply("save confirmed");
      }
   if (message.content==='gameStart'&&x===-1){//game startup
      message.reply("give me your save code so I can resume your game!");
      load=1;
      
      
   }
   if (message.content==="gameStart"&&x!=-1){
      if (x===0){
         message.reply(stage0);
         message.reply(quest0);
         health=100;
      }
      if (x===01){
         message.reply(stage01);
         message.reply(quest01);
      }
      if (x===02){
         message.reply(stage02);
         message.reply(quest02);
      }
      if (x===03){
         message.reply(stage03);
         message.reply(quest03);
      }
   }
   if (message.content==="squid"&&load===1){
         x=squid;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="hugh"&&load===1){
         x=hugh;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="mafu"&&load===1){
         x=mafu;
         x=0;
         message.reply("load confirmed");
      } if (message.content==="kono"&&load===1){
         x=kono;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="save5"&&load===1){
         x=save5;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="new") {
         x=0;
         load=0;
        message.reply("New game starting. Type gameStart to continue");
      }
  //GAME RESULTS--------------------------------------------------------------------------------------------------------
   if (message.content==="right"&&x===0){//stage0 results
         message.reply(stage01);
         message.reply(quest01);
         x++;
         dmg=3;
   }
   if (message.content==="left"&&x===0){
      message.reply(stage0L);
      message.reply(gameOver);
      //message.channel.send("https://i.ytimg.com/vi/Kr9rIx7MVvg/maxresdefault.jpg");
   }
   if (message.content==="stick"&&x===0){
      message.reply("You break a branch off of a tree");
      message.reply("Your max dmg is increased by two (7)");
      dmg=7;
      message.reply(quest0);
   }
   if (message.content==="wait"&&x===1){//stage01 results
         message.reply(stage02);
         message.reply(quest02);
         x++;
   }
   if (message.content==="go inside"&&x===1){
         message.reply(stage01L);
         message.reply(gameOver);
        //message.channel.send("https://i.ytimg.com/vi/Kr9rIx7MVvg/maxresdefault.jpg");
         x=0;
   }
   if (message.content==="chase"&&x===2){//stage2 results
         message.reply(stage02L);
         message.reply(gameOver);
        //message.channel.send("https://i.ytimg.com/vi/Kr9rIx7MVvg/maxresdefault.jpg");
         x=0;
   }
   if (message.content==="sneak"&&x===2){
         message.reply(stage03);
         message.reply(quest03);
        //message.channel.send("https://i.ytimg.com/vi/Kr9rIx7MVvg/maxresdefault.jpg");
         x++;
   }
   if (message.content==="follow her"&&x===3){//stage3 results
         message.reply(stage04);
         message.reply(quest04);
        //message.channel.send("https://i.ytimg.com/vi/Kr9rIx7MVvg/maxresdefault.jpg");
         x++;
     ans=0;
     pTurn=1;
     enemyH=20;
   }      
   if (message.content==="refuse"&&x===3){
         message.reply(stage03R);
         message.reply(gameOver);
         x=0;
   }      
  //BATTLE MECHANICS----------------------------------------------------------------------------------------------------
   if (pTurn===1&&ans===0&&enemyH>0){
         message.reply("Remaining HP: " + health+"/100");
         message.reply("attack|defend|health pot");
         ans++;                   
   }        
   
      if (health<=0){//gameover combat
       x=-1;
     message.display(gameOver);
     dmg=3;
  }
  if (message.content==="displayDMG"){
    message.reply("Your dmg is currently "+dmg);
  }
  
  if (enemyH<=0){
    message.display("Enemy was defeated");
  }
  
  if (pTurn===0&&ans===1){
    message.reply("Turn: enemy");
    damageTook=getRandomInt(20);
    health=health-damageTook;
    message.reply("Took "+damageTook+"dmg");
    
    ans--;
    pTurn++;
  }
   if (message.content==="attack"&&pTurn===1){
         dmgG=getRandomInt(dmg);
         dmgG=dmgG+dmg;
         enemyH=enemyH-dmgG;  
         message.reply("Did "+dmgG+"dmg");
         message.reply("Mage remaining health: " +enemyH);
         pTurn--;
   }      
   if (message.content==="defend"&&pTurn===1){
         dmgG=getRandomInt(10);
         if (dmgG>=0&&dmgG<=4){
           message.reply("Turn: enemy");
           message.reply("You failed to defend the attack");
           damageTook=getRandomInt(10);
           health=health-damageTook;
           message.reply("Took "+damageTook+"dmg");
            if (health<=0){                //NEW
               x=-1;
               message.display(gameOver);
               dmg=3;
           }
         }
         if (dmgG>=5&&dmgG<=8){
           message.reply("Turn: enemy");
           message.reply("You successfully defended the attack");
           damageTook=getRandomInt(5);
           health=health-damageTook;
           message.reply("Took "+damageTook+"dmg");
           dmgG=getRandomInt(dmg);
           enemyH=enemyH-dmgG;  
           message.reply("Did "+dmgG+"dmg");
           message.reply("Mage remaining health: " +enemyH);
            if (health<=0){                //NEW
               x=-1;
               message.display(gameOver);
               dmg=3;
           }
         }
         if (dmgG===9){
           message.reply("Turn: enemy");
           message.reply("Critcal hit CHANCE");
           damageTook=getRandomInt(2);
           health=health-damageTook;
           message.reply("Took "+damageTook+"dmg");
           dmgG=getRandomInt(dmg);
           dmgG=dmgG*3;
           enemyH=enemyH-dmgG;  
           message.reply("Did "+dmgG+"dmg");
           message.reply("Mage remaining health: " +enemyH);
            if (health<=0){                //NEW
               x=-1;
               message.display(gameOver);
               dmg=3;
           }
         }
           ans--;
   }           
   });
