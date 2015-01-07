class RemovesNullFromUserBiography < ActiveRecord::Migration
  def change
    remove_column :users, :biography
    add_column :users, :biography, :text
  end
end
