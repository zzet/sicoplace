class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :name
      t.string :text
      t.string :email
      t.integer :parent_id
      t.integer :resource_id

      t.timestamps
    end
  end
end
