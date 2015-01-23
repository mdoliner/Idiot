class AddDefaulCollectionNumber < ActiveRecord::Migration
  def change
    remove_column :pages, :collection_number
    add_column :pages, :collection_numer, :integer, default: 0
  end
end
