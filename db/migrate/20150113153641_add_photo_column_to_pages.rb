class AddPhotoColumnToPages < ActiveRecord::Migration
  def self.up
    add_attachment :pages, :photo
  end

  def self.down
    remove_attachment :pages, :photo
  end
end
