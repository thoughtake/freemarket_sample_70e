class ItemsController < ApplicationController
  def index
    
  end

  def new
    @item = Item.new
    @item.item_images.new
    @categories = Category.all
    @brands = Brand.all
  end

  def show
  end

  def edit
  end
end
