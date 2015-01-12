json.(@page, :title, :text, :id)
if @page.description
  json.description do
    json.id @page.description.id
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
json.improvements @page.improvements do |improvement|
  json.id improvement.id
  json.content improvement.content
  json.author improvement.author
  json.created_at improvement.created_at
  json.time_ago_posted time_ago_in_words(improvement.created_at)
  json.username improvement.username
end
