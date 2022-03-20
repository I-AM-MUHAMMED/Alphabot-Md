const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "ꭲꭺꮜꭱꮜꮪ🅫" //namabot kalian
global.ownername= "「ᴍͥᴜͭʜᷤᴀᴍͫᴍͤᴇᴅ」" //nama kalian
global.myweb ="https://api-alphabot.herokuapp.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/TAURUSEDITS" //bebas asal jan hapus
global.github = "www.github.com/I-AM-MUHAMMED" //bebas
global.email = "taurusser6@gmail.com" //bebas
global.region = "india" //bebas
global.ownernomer = "919961050829" // nomor wa kalian
global.ownernomerr = "+919961050829" //nmr wa kalian
global.thumbnail = "./image/Taurus.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/ndonasi.jpg" // foto donasi di folder image
global.background_welcome="https://i.imgur.com/89UwiBi.jpeg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["919961050829','918157849715"] //ganti agar fitur owner bisa di gunakan
global.packname = '' //sticker wm ubah
global.author = 'ꭲꭺꮜꭱꮜꮪ🅫' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '*_SUCCESS_*',
    admin: 'ONLY FOR ADMIN !',
    botAdmin: 'BOT IS NOT ADMIN !',
    owner: 'ONLY FOR OWNER !',
    group: 'ONLY WORK ON GROUP!',
    private: 'ONLY WORK ON PRIVATE !',
	bot: 'ONLY BOT CAN USE THIS COMMAND',
    errtoimg: 'Sorry At This Time Not Support Sticker Gif!',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Features Not Enabled By Owner!',
	example1: 'Welcome to @user In Group @subject Don't Forget to Read Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name) '
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
