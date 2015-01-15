json.array! @genres.order('random()') do |genre|
  json.(genre, :id, :name)
  json.most_recent_page do
    json.title genre.most_recent_page.title
    json.id genre.most_recent_page.id
    json.image_url asset_path(genre.most_recent_page.photo.url)
  end
end
