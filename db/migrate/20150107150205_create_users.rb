class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.text :biography, null: false
      t.string :level, default: "whitehat"
      
      t.timestamps
    end
  end
end
