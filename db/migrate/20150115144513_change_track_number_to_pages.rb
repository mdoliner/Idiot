class ChangeTrackNumberToPages < ActiveRecord::Migration
  def change
    remove_column :collections, :track_number
    add_column :pages, :collection_number, :integer
  end
end
