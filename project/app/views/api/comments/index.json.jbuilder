json.array! @comments do |comment|
  json.author comment.name
  json.text comment.text
  json.created_at l(comment.created_at)
end
