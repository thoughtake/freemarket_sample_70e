class ItemsController < ApplicationController
  def index
    render :show
  end

  def new
    @item = Item.new
  end

  def show
  end

  def edit
  end
  
  def search
    respond_to do |format|
      format.html
      format.json do
       @children = Category.find(params[:parent_id]).children
       #親ボックスのidから子ボックスのidの配列を作成してインスタンス変数で定義
      end
    end
  end
end
