class UpdateAttractionsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :attractions, :image_url, :string, :default => "image.png"
  end
end
