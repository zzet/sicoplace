class CreateResourceUris < ActiveRecord::Migration
  def change
    create_table :resource_uris do |t|
      t.integer :resource_id
      t.string :domain
      t.string :state

      t.timestamps
    end
  end
end
