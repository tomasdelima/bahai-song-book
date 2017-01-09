class AddAuthorToSongs < ActiveRecord::Migration
  def change
    add_reference :songs, :author, index: true, foreign_key: true
  end
end
