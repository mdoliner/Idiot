if @user
  json.logged_in true
  json.(@user, :username, :email, :id, :level, :session_token)
  json.image_url asset_path(@user.photo.url)
else
  json.logged_in false
end
