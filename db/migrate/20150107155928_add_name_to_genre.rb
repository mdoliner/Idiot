class AddNameToGenre < ActiveRecord::Migration
  def change
    add_column :genres, :name, :string, null: false
  end
end
