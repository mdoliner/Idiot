json.(@page, :title, :text)
if @page.description
  json.description do
    json.content @page.description.content
  end
end
json.artist do
  json.name @page.artist.name
  json.id @page.artist.id
end
json.annotations @page.annotations.order(:start_index).reverse_order do |annotation|
  json.id annotation.id
  json.content annotation.content
  json.start_index annotation.start_index
  json.end_index annotation.end_index
end
