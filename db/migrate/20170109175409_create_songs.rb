class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.text :lyrics
      t.text :chords

      t.timestamps null: false
    end
  end
end
