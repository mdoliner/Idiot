class AddUsernameAndEmailToImprovements < ActiveRecord::Migration
  def change
    add_column :improvements, :username, :string
  end
end
