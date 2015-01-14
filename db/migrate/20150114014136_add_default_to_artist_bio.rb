class AddDefaultToArtistBio < ActiveRecord::Migration
  def change
    change_column_default :artists, :biography, "Biography is currently empty. Is this person even famous?"
  end
end
