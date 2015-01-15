class AddPhotoToCollections < ActiveRecord::Migration
    def self.up
      add_attachment :collections, :photo
    end

    def self.down
      remove_attachment :collections, :photo
    end
end
