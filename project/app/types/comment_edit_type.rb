class CommentEditType < Comment
  include ApplicationType

  permit :author, :text

  def author=(name)
    write_attribute(:name, name)
  end
end
