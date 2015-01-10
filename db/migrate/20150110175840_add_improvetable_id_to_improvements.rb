class AddImprovetableIdToImprovements < ActiveRecord::Migration
  def change
    add_column :improvements, :improvementable_id, :integer, null: false
    add_column :improvements, :improvementable_type, :string, null: false

    add_index :improvements, :improvementable_id
    add_index :improvements, :improvementable_type
  end
end
