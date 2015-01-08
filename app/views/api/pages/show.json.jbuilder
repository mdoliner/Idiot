json.(@page, :title, :text)
json.artist do
  json.name @page.artist.name
end
