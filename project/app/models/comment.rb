class Comment < ActiveRecord::Base

  belongs_to :resource
  #belongs_to :author

end
