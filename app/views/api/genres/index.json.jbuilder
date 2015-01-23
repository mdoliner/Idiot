json.array! @genres.order('random()') do |genre|
  next if genre.name == "Meta" || genre.name == "Law" || genre.name == "Tech" || genre.name == "X"
  json.(genre, :id, :name)
  json.most_recent_page do
    page = genre.most_recent_page
    json.(page, :title, :id)
    json.image_url asset_path(page.image_url)
    json.artist_name page.artist.name
    json.annotation_count page.annotations.to_a.length
  end
end
