class CreateImprovements < ActiveRecord::Migration
  def change
    create_table :improvements do |t|
      t.text :content, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end
