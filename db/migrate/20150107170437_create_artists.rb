class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :biography
      t.string :instagram_url
      t.string :twitter_url
      t.string :facebok_url
      t.integer :veried_account_id
      t.string :photo_url
      
      t.timestamps
    end
  end
end
