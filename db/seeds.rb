# Users
user_whitehat = User.create!({
  username: "whitehat",
  password: "whitehat",
  email: "imawhitehat@whitehat.com",
  level: "whitehat",
  biography: "Once I was a loser in real life. Now I'm just a loser online... yay..."
})
user_editor = User.create!({
  username: "editor",
  password: "editor",
  email: "imaneditor@editor.com",
  level: "editor",
  biography: "Once I was a loser in real life. Now I'm a celebrity online... Yay!"
})

# Genres
rap = Genre.create!({ name: 'Rap' })
rock = Genre.create!({ name: 'Rock' })
lit = Genre.create!({ name: 'Lit' })
pop = Genre.create!({ name: 'Pop' })
news = Genre.create!({ name: 'News' })
country = Genre.create!({ name: 'Country' })
rb = Genre.create!({ name: 'R&B' })
history = Genre.create!({ name: 'History' })
sports = Genre.create!({ name: 'Sports' })
law = Genre.create!({ name: 'Law' })
tech = Genre.create!({ name: 'Tech' })
x = Genre.create!({ name: 'X' })
meta = Genre.create!({ name: 'Meta' })

# Artists
kanye = Artist.create!({name: "Kanye West", biography: "The ubiquitous Kanye West. From his famous quip, “George Bush doesn’t care about black people” to “I'ma let you finish” to marrying Kim Kardashian, you can see that he’s a staple in the tabloids and blog posts.

  But that certainly doesn’t take anything away from his music. As matter of fact, it makes it better. For instance, his 2010 solo album, My Beautiful Dark Twisted Fantasy was universally praised by fans and critics alike; it was recorded during the backlash he received from the Swift interruption and during his break-up with then girlfriend Amber Rose.

  He has scored other well known hits as well from each of his previous studio albums, such as “Stronger,” “Homecoming,” and “Gold Digger.” Each of his albums have been massive critical and commercial successes, including his collaboration album with Jay-Z, Watch the Throne. Kanye’s most recent project was Yeezus, his sixth solo album, which polarized his fan base and the general public, but was heaped with rave reviews by music critics."})
genasis = Artist.create!({name: "O.T. Genasis"})
# Pages
rap1Desc = Annotation.create!({
  content:"This touching release depicts Kanye in a vulnerable state. He delivers the song from the perspective of his late mother, Dr. Donda West, as she looks upon her son from Heaven. Kanye couldn’t remember singing the song when lines were played back to him, and concluded Donda was sending him a message.

  The song is very similar to The Beatles' “Let It Be”, which Sir Paul McCartney wrote about the death of his mother. Paul had a similar “channelling” experience after George Harrison died, which resulted in “Friends To Go”.",
  page_id: 1,
  start_index: 0,
  end_index: 0
})
taylor = Artist.create!({name: "Taylor Swift"})
sturgill = Artist.create!({name: "Sturgill Simpson"})
marilyn = Artist.create!({name: "Marilyn Manson"})
cmpunk = Artist.create!({name: "CM Punk"})
kendrick = Artist.create!({name: "Kendrick Lamar"})
jefferson = Artist.create!({name: "Thomas Jefferson"})
khaled = Artist.create!({name: "DJ Khaled"})
melville = Artist.create!({name: "Herman Melville"})
sean = Artist.create!({name: "Big Sean"})
cole = Artist.create!({name: "J. Cole"})
minaj = Artist.create!({name: "Nicki Minaj"})
rae = Artist.create!({name: "Rae Sremmurd"})
rap1 =  Page.create!({genre_id: rap.id,
  title: "Only One",
  artist_id: kanye.id,
  text: "[Produced by Paul McCartney and Mike Dean]

  [Intro]
  As I lay me down to sleep
  I hear her speak to me

  [Verse 1]
  Hello 'Mari, how ya doin'?
  I think the storm ran out of rain, the clouds are movin'
  I know you're happy, cause I can see it
  So tell the voice inside ya head to believe it
  I talked to God about you, he said he sent you an angel
  And look at all that he gave you
  You asked for one and you got two
  You know I never left you
  Cause every road that leads to heaven's right inside you
  So I can say

  [Hook 1]
  Hello my only one, just like the mornin' sun
  You'll keep on risin' 'til the sky knows your name
  Hello my only one, remember who you are
  No you're not perfect but you're not your mistakes

  [Verse 2]
  Hey, hey, hey, hey
  Oh the good outweighs the bad even on your worst day
  Remember how I'd say
  Hey hey one day you'll be the man you always knew you could be
  And if you knew how proud I was
  You'd never shed a tear, have a fear, no you wouldn't do that
  And though I didn't pick the day to turn the page
  I know it's not the end every time I see her face, and I hear you say

  [Hook 2]
  Hello my only one, remember who you are
  You got the world cause you got love in your hands
  And you're still my chosen one
  So can you understand? One day you'll understand

  [Bridge]
  So hear me out, hear me out
  I won't go, I won't go
  No goodbyes, no goodbyes
  Just hello, just hello
  And when you cry, I will cry
  And when you smile, I will smile
  And next time when I look in your eyes
  We'll have wings and we'll fly

  [Hook 3]
  Hello my only one, just like the mornin' sun
  You'll keep on risin' 'til the sky knows your name
  And you're still my chosen one, remember who you are
  No you're not perfect but you're not your mistakes

  [Outro]
  Hey, hey, hey, hey
  Tell Nori about me, tell Nori ab-
  I just want you to do me a favor
  Tell Nori about me, tell Nori about me
  Tell Nori about me, tell Nori about me
  Tell Nori about me, tell Nori about me
  Tell Nori about me, tell Nori about me
  Tell Nori about me...",
  description_id: rap1Desc.id
})

rap2Desc = Annotation.create!({
  content:"O.T. Genasis first came to our attention through his affiliation with Busta Rhymes and collaborations with French Montana and Juicy J. Now Genasis is out to prove himself as a solo act. “CoCo” is the first single from his upcoming debut.

  OT with the help of Busta Rhymes released a new music video on Jan 4th:",
  page_id: 2,
  start_index: 0,
  end_index: 0
})
rap2 =  Page.create!({
  genre_id: rap.id,
  title: "CoCo",
  artist_id: genasis.id,
  description_id: rap2Desc.id,
  text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"
})
rap2_ann1 = Annotation.create!({
  content: "O.T. spoke to Complex Magazine about his love of cocaine, stating he got into it \“about seven years ago\”.",
  start_index: 11,
  end_index: 122,
  page_id: rap2.id
})
coll = Collection.create!({
  title: "Hybrid Theory",
  artist_id: 1,
  release_year: 2000
})
rap3 =  Page.create!({genre_id: rap.id, title: "I Don't Fuck With You", artist_id: sean.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
rap4 =  Page.create!({genre_id: rap.id, title: "No Role Modelz", artist_id: cole.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
rap5 =  Page.create!({genre_id: rap.id, title: "Only", artist_id: minaj.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
rap6 =  Page.create!({genre_id: rap.id, title: "No Type", artist_id: rae.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
rock1 = Page.create!({ genre_id: rock.id, title: "The Pale Emperor Tracklist", artist_id: marilyn.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
lit1 = Page.create!({ genre_id: lit.id, title: "Moby-Dick (Chap. 1: Loomings)", artist_id: melville.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
pop1 = Page.create!({ genre_id: pop.id, title: "Style", artist_id: taylor.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
news1 = Page.create!({ genre_id: news.id, title: "Writer At War: Kendrick Lamar's XXL Cover Story", artist_id: kendrick.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
country1 = Page.create!({ genre_id: country.id, title: "Turtles All The Way Down", artist_id: sturgill.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
rb1 = Page.create!({ genre_id: rb.id, title: "Hold You Down", artist_id: khaled.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
history1 = Page.create!({ genre_id: history.id, title: "The Declaration of Independence", artist_id: jefferson.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
screen1 = Page.create!({ genre_id: sports.id, title: "Pipe Bomb", artist_id: cmpunk.id, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
law1 = Page.create!({ genre_id: law.id, title: "Vosburg v. Putney", artist_id: 1, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
tech1 = Page.create!({ genre_id: tech.id, title: "Bitcoin: A Peer-to-Peer Electronic Cash System", artist_id: 1, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
x1 = Page.create!({ genre_id: x.id, title: "Twelve Jewels", artist_id: 1, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
meta1 = Page.create!({ genre_id: meta.id, title: "Contributor Guidelines", artist_id: 1, text:
  "[Hook x2]
  I'm in love with the coco
  I'm in love with the coco
  I got it for the low, low
  I'm in love with the coco

  [Verse 1]
  Hit my plug, that's my cholo (mi amigo)
  Cause he got it for the low, low
  If you snitchin' I go loco (go crazy)
  Hit you with that treinta ocho
  Niggas thinkin' that I'm solo
  Fifty deep, they like, \"oh, no\"
  Heard the feds takin' photos
  I know nothin', fuck the popo

  [Refrain]
  Bakin' soda, I got bakin' soda
  Bakin' soda, I got bakin' soda
  Whip it through the glass, nigga
  I'm blowin' money fast, nigga

  [Hook x2]

  [Verse 2]
  Thirty six, that's a kilo (aqui)
  Need a brick, miss my free throw
  I'm in love, just like Ne-Yo
  Bustin' shots, now he Neo
  Free my homies, fuck the C.O
  Fuck the judge, fuck my P.O
  All this coke, like I'm Nino
  Water whip, like I'm Nemo

  [Refrain + Hook x2]"})
