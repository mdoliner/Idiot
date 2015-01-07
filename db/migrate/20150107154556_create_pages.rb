class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.integer :genre_id, null: false
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.date :release_date
      t.string :soundcloud_url
      t.string :youtube_url
      t.integer :collection_id
      t.text :text
      t.boolean :is_locked, default: false
      t.integer :description_id

      t.timestamps
    end
  end
end
