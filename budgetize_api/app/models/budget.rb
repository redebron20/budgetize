class Budget < ApplicationRecord
    belongs_to :user
    has_many :transactions, :dependent => :destroy

    validates :name, presence: true, uniqueness: true
end
