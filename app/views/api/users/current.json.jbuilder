if @user
  json.logged_in true
  json.(@user, :username, :email, :id, :level)
else
  json.logged_in false
end
