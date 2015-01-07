class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :photo_url
      t.text :description

      t.timestamps
    end
  end
end
