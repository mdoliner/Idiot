json.(@genre, :id, :name)
json.pages @genre.pages.order(:created_at).reverse_order do |page|
  json.id page.id
  json.title page.title
  json.artist_name page.artist.name
  json.image_url asset_path(page.image_url)
end
json.recent_pages @genre.recent_pages do |page|
  json.id page.id
  json.title page.title
  json.artist_name page.artist.name
  json.image_url asset_path(page.image_url)
  json.artist do
    json.name page.artist.name
  end
end
