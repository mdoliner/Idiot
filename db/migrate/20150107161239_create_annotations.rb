class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.text :content, null: false
      t.integer :page_id, null: false

      t.timestamps
    end
  end
end
