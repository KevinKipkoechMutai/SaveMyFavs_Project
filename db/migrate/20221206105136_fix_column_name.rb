class FixColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :my_favorites, :type, :category
  end
end
