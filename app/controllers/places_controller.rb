class PlacesController < ApplicationController
  
  private

  def article_params
    params.require(:article).permit(:name, :photo)
  end
end
