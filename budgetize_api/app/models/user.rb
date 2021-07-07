class User < ApplicationRecord
    has_one :budget

    validates :email, presence: true, uniqueness: true

    has_secure_password
end
