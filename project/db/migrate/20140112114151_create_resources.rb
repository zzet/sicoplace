class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :name
      t.integer :owner_id
      t.string :state
      t.string :token

      t.timestamps
    end
  end
end
