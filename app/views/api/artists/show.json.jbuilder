json.(@artist, :biography, :name)
json.image_url asset_path(@artist.photo.url)
