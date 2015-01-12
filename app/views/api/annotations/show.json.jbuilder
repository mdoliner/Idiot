json.(@annotation, :content, :id)
json.page_id @annotation.page.id
json.improvements @annotation.improvements do |improvement|
  json.id improvement.id
  json.content improvement.content
  json.author improvement.author
  json.created_at improvement.created_at
  json.time_ago_posted time_ago_in_words(improvement.created_at)
  json.username improvement.username
end
