class SongsController < ApplicationController
  # before_action :authenticate_user!, only: :create
  skip_before_filter :verify_authenticity_token

  def index
    songs = Song.all.where("updated_at > '#{params[:last_updated_at] || Time.new(2000, 1, 1)}'")
    render json: {data: songs.to_json, time: Time.now.utc}
  end

  def create
    song = Song.new(title: params[:title], lyrics: params[:lyrics], chords: params[:chords], author: current_user)
    if song.save
      render json: true
    else
      render json: {errors: song.errors}
    end
  end
end
