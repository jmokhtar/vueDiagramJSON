class DiagramController < ApplicationController

  def index
    @id1 = "1"
  end

  def save
    @data = params[:data]
    respond_to do |format|
      if @data
        format.html { redirect_to "/index", notice: 'JSON data successfully updated.' }
        format.json { render :show, status: :ok, location: "/index" }
      else
        format.html { render :save, notice: 'JSON data failed.' }
        format.json { render json: @data, status: :unprocessable_entity }
      end
    end



    #render plain: params[:data].inspect
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def data_params
    params.require(:data).permit(:id, :text, :parent)
  end

end
