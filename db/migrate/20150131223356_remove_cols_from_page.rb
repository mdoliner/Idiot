class RemoveColsFromPage < ActiveRecord::Migration
  def change
    remove_column :pages, :soundcloud_url
    remove_column :pages, :youtube_url
    remove_column :pages, :is_locked
    remove_column :pages, :release_date

  end
end
