class AddNameToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :name, :string, null: false
  end
end
