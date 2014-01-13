class Api::CommentsController < Api::ApplicationController
  def index
    @comments = Comment.all

    respond_with @comments
  end

  def create
    @origin_resource = request.domain
    @origin_resource = request.host if @origin_resource.nil?

    @resource_uri = ResourceUri.find_by(domain: @origin_resource)

    @comment = CommentEditType.new(params)

    if @resource_uri.present? # && add_check if resource valid
      @resource = @resource_uri.resource

      @comment.resource = @resource
      @comment.save
    end

    respond_with @comment, location: nil
  end

  def destroy
  end

  def update
  end
end
