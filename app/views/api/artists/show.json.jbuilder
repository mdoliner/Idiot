json.(@artist, :biography, :name, :id)
json.image_url asset_path(@artist.photo.url)
json.pages @artist.pages.each do |page|
  json.id page.id
  json.title page.title
end
