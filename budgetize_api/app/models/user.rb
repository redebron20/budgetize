class User < ApplicationRecord
    has_one :budget
    has_many :expenses, through: :budget

    validates :email, presence: true, uniqueness: true

    has_secure_password
end
