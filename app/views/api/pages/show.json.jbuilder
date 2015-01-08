json.(@page, :title, :text)
json.description do
  json.content @page.description.content
end
json.artist do
  json.name @page.artist.name
end
