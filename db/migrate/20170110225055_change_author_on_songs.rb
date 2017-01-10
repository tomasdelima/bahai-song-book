class ChangeAuthorOnSongs < ActiveRecord::Migration
  def change
    add_column :songs, :author, :string
    remove_reference :songs, :author
  end
end
