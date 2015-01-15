json.array! @genres.order('random()') do |genre|
  next if genre.name == "Meta" || genre.name == "Law" || genre.name == "Tech" || genre.name == "X"
  json.(genre, :id, :name)
  json.most_recent_page do
    json.title genre.most_recent_page.title
    json.id genre.most_recent_page.id
    json.image_url asset_path(genre.most_recent_page.photo.url)
    json.artist_name genre.most_recent_page.artist.name
    json.annotation_count genre.most_recent_page.annotations.length
  end
end
