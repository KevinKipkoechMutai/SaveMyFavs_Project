class CreateMyFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :my_favorites do |t|
      t.string :title
      t.string :type
      t.string :description

      t.timestamps
    end
  end
end
