class ChangeAvatarToPhotoArtists < ActiveRecord::Migration
  def self.up
    remove_attachment :artists, :avatar
    add_attachment :artists, :photo
  end

  def self.down
    remove_attachment :artists, :photo
    add_attachment :artists, :avatar
  end
end
