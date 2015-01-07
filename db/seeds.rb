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

# Pages
rap1 =  Page.create!({genre_id: rap.id, title: "Only One", artist_id: 1})
rap2 =  Page.create!({genre_id: rap.id, title: "CoCo", artist_id: 1})
rap3 =  Page.create!({genre_id: rap.id, title: "I Don't Fuck With You", artist_id: 1})
rap4 =  Page.create!({genre_id: rap.id, title: "No Role Modelz", artist_id: 1})
rap5 =  Page.create!({genre_id: rap.id, title: "Only", artist_id: 1})
rap6 =  Page.create!({genre_id: rap.id, title: "Fire Squad", artist_id: 1})
rock1 = Page.create!({ genre_id: rock.id, title: "Take Me to Church", artist_id: 1})
lit1 = Page.create!({ genre_id: lit.id, title: "Moby-Dick (Chap. 1: Loomings)", artist_id: 1})
pop1 = Page.create!({ genre_id: pop.id, title: "Style", artist_id: 1})
news1 = Page.create!({ genre_id: news.id, title: "Writer At War: Kendrick Lamar's XXL Cover Story", artist_id: 1})
country1 = Page.create!({ genre_id: country.id, title: "Turtles All The Way Down", artist_id: 1})
rb1 = Page.create!({ genre_id: rb.id, title: "Hold You Down", artist_id: 1})
history1 = Page.create!({ genre_id: history.id, title: "The Declaration of Independence", artist_id: 1})
screen1 = Page.create!({ genre_id: sports.id, title: "Pipe Bomb", artist_id: 1})
law1 = Page.create!({ genre_id: law.id, title: "Vosburg v. Putney", artist_id: 1})
tech1 = Page.create!({ genre_id: tech.id, title: "Bitcoin: A Peer-to-Peer Electronic Cash System", artist_id: 1})
x1 = Page.create!({ genre_id: x.id, title: "Twelve Jewels", artist_id: 1})
meta1 = Page.create!({ genre_id: meta.id, title: "Contributor Guidelines", artist_id: 1})
