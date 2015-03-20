json.array! @genres do |genre|
  next if genre.name == "Meta"
  json.(genre, :id, :name)
end
