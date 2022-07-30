// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "morning"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
  //["what language is that", "language", "what are you speaking"]
]

// Possible responses, in corresponding order

const replies = [
  ["Haller!", "Ay teh, 'musta ka na?"],
  [
    "Ako na, ang baklang tomboy",
    "Puyat akesh. Antokyojapan pa",
    "Ma, beki akesh."
  ],
  [
    "Beks, pa-kiss sa jowa mesh. Char!",
    "Sorry di kaya ng powers ko i-update ito lagi.",
    "Hoy ang gugulo niyo! Anesh na namang kembular itich?"
  ],
  ["Look sa fez ni afam. Havey!"],
  ["Wagelya ang tsunami walk ni Shamcey. Havey sa alindog!"],
  ["Im! Di nanalo si Jessica Sanchez sa AI! Imbyernadette sembrano byuti ko!"],
  ["Kaloka ang joutfit ni manash.", "Kalurkey mag-reyna elena! Pagoda byuti ko!"],
  ["Ayoko na magtrabaho! Pagoda tragedy na!", "Wa agawan ng jowa. Warla 'yan!"],
  ["Wag ka ngang apurado!", "Aray! Napaso daliri ko!"],
  ["Mahal nya kaya ako?", "Ate, pwede po bang pautang ng bente?", "Baboy ka!"],
  ["Bahala na ang Dyos", "Bayot . . ."],
  ["Bokya ang show kagabi", "Uy oh! May boylet dun! ", "Tanggalin mo na 'yang mga burloloy mo sa katawan"],
  ["Baboosh", "Teh, tara na", "Halika na, Alicia Mayer na tayo"],
  ["Jootlong ", "Nyorkchop", "Adobochi", "Imbutidey"],
  ["May-I-walk ako sa Pride March sa Baguio this June 24 beks!"],
  ["Naku, pag na-julisima ka ng georgia, bahala ka sa buhay mo."],
  ["Ay, keri ko ’yan","Portuguesa daw siya","Alam mo, echoserang frog ka"],
  ["PAfraid ako dyan, skuala lumpur"],
  ["jaja!"]
  //["swardspeak", "salitang beki", "gay lingo na filipinas"]

]

// Random for any other user input

const alternative = [
  "Wag ka ngang mag-cryola dyan gurl.",
  "Nega mo beks. Chaks 'yan.",
  "Anesh ang chorva ditich?",
  "Hoy ang gugulo niyo! Anesh na namang kembular itich?",
  "Haba naman ng shpluk na yo!",
  "Ano ba?!",
  "Wagelya talaga ang concert ni Lady Gaga!",
  "Gosh, ang mahaliajackson ng tickets sa concert ni Madonna.",
  "Wala na kong pera. Teka kekembot muna ko para makadilihensiya.",
  "Break na kami. Cryola na naman akesh!",
  "May-I-walk ako sa Pride March sa Baguio this June 24 beks!",
  "Gora na mga sisteret",
  "Ang laki na ng Chanda Romero ko! ",
  "Tara lafang! Tom Jones na akez",
  "Alicia Mayer na akez",
  "Hagardo Versoza na ang lola mes",
  "PAfraid ako dyan, skuala lumpur",
  "Bayot . . .",
  "Hindi ako puwede today. Bahamas kasi sa labas.",
  "Kaloka ang joutfit ni manash.",
  "Ako na, ang baklang tomboy",
  "Ano na namang chuva yan?",
  "Chaka ng fez ni ati.",
"OMG Chaka Khan ang gown ng lola mo! Divi shopping teh?",
"Dami mo namang chorva moments",
"Dedma na sa chorvaness nila!",
"Nalurkey akey sa shpluk ni Pacquiao sa mga gays!",
"Wag mo siyang lalapitan! Kembot ko 'yan!",
"Imbyerna ang araw na ito. Pagoda coldwave lotion levels."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]