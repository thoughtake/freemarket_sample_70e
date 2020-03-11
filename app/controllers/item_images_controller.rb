class ItemImagesController < ApplicationController
  def new
    @parents = Category.all.order("id ASC").limit(1000)
  end
end
