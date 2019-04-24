class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null:false
      t.integer :rating, null:false

      t.timestamps

      t.belongs_to :attraction
    end
  end
end
