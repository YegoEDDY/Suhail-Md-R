const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705677688";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_16_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDYwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9CbWZzMmNaNTU0YytERy82U0FMWXh1YjZiU2lKNEMxaGNWek9oeERkbFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFaanFWbWtiUUpXTk9uaTJTQUJlN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzM3YzRhMDUtYzFhNC00MzA2LThiNTMtM2I3NTkxMzI1MjViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE3NSxcbiAgICAgIDIzOCxcbiAgICAgIDksXG4gICAgICAxMzYsXG4gICAgICAxNjgsXG4gICAgICAyNTQsXG4gICAgICAyMDgsXG4gICAgICAxODUsXG4gICAgICAyMzQsXG4gICAgICA5NCxcbiAgICAgIDU3LFxuICAgICAgOSxcbiAgICAgIDM3LFxuICAgICAgODUsXG4gICAgICAyMTEsXG4gICAgICAxMDgsXG4gICAgICA4NSxcbiAgICAgIDc2LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxMTAsXG4gICAgICA4NixcbiAgICAgIDkzLFxuICAgICAgMjE2LFxuICAgICAgMTg1LFxuICAgICAgMjMyLFxuICAgICAgMjQ2LFxuICAgICAgMTYsXG4gICAgICAxMTYsXG4gICAgICA1NSxcbiAgICAgIDMsXG4gICAgICAxMjAsXG4gICAgICAyMDMsXG4gICAgICAxMjUsXG4gICAgICAyMTQsXG4gICAgICA0NixcbiAgICAgIDIwMCxcbiAgICAgIDE1MyxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05MY29zUURFT1d0cHJZR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidll5YlQwVkZqTWNKL3g5OWljVGgvN2FqVnM4Mnl1UHNxdG1nNGprNGFXND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBemcxcUhVeTBRdzJYb3lyTTJMWjJhVDBibXhGNUE2Q0hkSy9hVXpoWGd0cDVKV0NZUWtaWUVySGQ2TE01cEx2aElzaEtsT21WMjEwR2pZT1FVTjZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQK3BtcW9UNVNlenNiM3FMT0MxdGlFc3E2U2EzRmhVTGVmUzJaWUpGMEtaTE91RXdDbFpsQlhVSG5maldRd0l0U3Zud2UrYkJOM29JaXF2YXdPK09BQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNTY3NzY4ODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5NzgyODQwNTE2NjkxOjIxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA1Njc3Njg4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ0ODc0MDJcbn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
