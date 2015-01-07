class AddIndicesToUser < ActiveRecord::Migration
  def change
    add_index :users, :session_token, unique: true
    add_index :users, :password_digest
  end
end
