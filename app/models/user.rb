class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable #, :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :songs
  validates :name, presence: true
end
