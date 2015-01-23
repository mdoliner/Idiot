json.array! @pages do |page|
  json.(page, :id, :title)
  json.artist_name page.artist.name
end
