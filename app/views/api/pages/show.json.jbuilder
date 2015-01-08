json.(@page, :title, :text)
json.description do
  json.content @page.description.content
end
json.artist do
  json.name @page.artist.name
end
json.annotations @page.annotations do |annotation|
  json.id annotation.id
  json.content annotation.content
  json.start_index annotation.start_index
  json.end_index annotation.end_index
end
