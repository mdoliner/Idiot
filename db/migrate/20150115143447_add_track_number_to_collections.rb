class AddTrackNumberToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :track_number, :integer
  end
end
