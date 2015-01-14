json.(@artist, :biography, :name, :id)
json.image_url asset_path(@artist.photo.url)
