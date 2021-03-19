class ChatroomsController < ApplicationController
  def show
    @chatroom = Chatroom.find(params[:id])
    @offer = Offer.find(params[:id])
    @offer.chatroom = @chatroom
    @message = Message.new
  end
end
