json.(@artist, :biography, :name, :id)
json.image_url asset_path(@artist.image_url)
json.pages @artist.pages.each do |page|
  json.id page.id
  json.title page.title
end
json.collections @artist.collections.order(:title).each do |collection|
  json.(collection, :id, :title)
end
