json.(@improvement, :author, :content, :created_at, :username)
json.time_ago_posted time_ago_in_words(@improvement.created_at)
