class FixDefaultCollectionNumber < ActiveRecord::Migration
  def change
    remove_column :pages, :collection_numer, :integer
    add_column :pages, :collection_number, :integer, default: 0
  end
end
