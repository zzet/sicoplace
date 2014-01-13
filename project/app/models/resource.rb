class Resource < ActiveRecord::Base

  #belongs_to :owner
  has_many :comments
  has_many :domains, class_name: ResourceUri

end
