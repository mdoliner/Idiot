json.array! @artists do |artist|
  json.(artist, :id, :name)
end
