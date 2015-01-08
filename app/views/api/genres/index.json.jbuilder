json.array! @genres do |genre|
  json.(genre, :id, :name)
  json.most_recent_page genre.most_recent_page
end
