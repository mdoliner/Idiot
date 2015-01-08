class AddStartEndIndicesToAnnotations < ActiveRecord::Migration
  def change
    add_index :annotations, :page_id
    add_column :annotations, :start_index, :integer
    add_column :annotations, :end_index, :integer
  end
end
