json.(@user, :username, :biography, :id)
json.image_url asset_path(@user.photo.url)
