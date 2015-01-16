json.(@collection, :title, :release_year, :id)
json.artist do
  json.name @collection.artist.name
  json.id @collection.artist.id
end
json.pages @collection.pages.order(:collection_number) do |page|
  json.(page, :title, :collection_number, :id)
  json.artist_name page.artist.name
end
json.image_url asset_path(@collection.image_url)
