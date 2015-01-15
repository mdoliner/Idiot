class RevampCollection < ActiveRecord::Migration
  def change
    remove_column :collections, :photo_url
    remove_column :collections, :description
    add_column :collections, :release_year, :integer
  end
end
