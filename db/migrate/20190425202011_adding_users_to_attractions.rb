class AddingUsersToAttractions < ActiveRecord::Migration[5.2]
  def change
    change_table(:attractions) do |t|
      t.belongs_to :user, null: false
    end
  end
end
