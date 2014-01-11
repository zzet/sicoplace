class Api::CommentsController < Api::ApplicationController
  def index
    @comments = Comment.all

    respond_with @comments
  end

  def create
    @comment = Comment.new()
    @comment.name = params[:author]
    @comment.text = params[:text]
    @comment.save

    respond_with @comment, location: nil
  end

  def destroy
  end

  def update
  end
end
