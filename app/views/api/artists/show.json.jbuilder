json.(@artist, :biography, :name, :id)
json.image_url asset_path(@artist.photo.url)
json.pages @artist.pages.each do |page|
  json.id page.id
  json.title page.title
end
json.collections @artist.collections.each do |collection|
  json.(collection, :id, :title)
end
