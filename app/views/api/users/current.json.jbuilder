if @user
  json.logged_in true
  json.username @user.username
else
  json.logged_in false
end
