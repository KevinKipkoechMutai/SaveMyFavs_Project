class MyFavoriteSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :image_url
end
