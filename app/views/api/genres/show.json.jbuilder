json.(@genre, :id, :name)
json.pages @genre.pages.order(:created_at).reverse_order do |page|
  json.id page.id
  json.title page.title
  json.artist_name page.artist.name
end
json.recent_pages @genre.recent_pages
