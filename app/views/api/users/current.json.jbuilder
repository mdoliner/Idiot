if @user
  json.logged_in true
  json.(@user, :username, :email, :id)
else
  json.logged_in false
end
