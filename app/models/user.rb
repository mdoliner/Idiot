class User < ActiveRecord::Base
  USER_LEVELS = ["whitehat", "editor", "moderator", "regulator", "verified"]

  validates :username, :password_digest, :email, :level, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :level, inclusion: {in: USER_LEVELS}

  after_initialize :ensure_session_token

  attr_reader :password

  has_many(
    :authored_improvements,
    class_name: "Improvement",
    foreign_key: :author_id
  )

  def self.find_by_credentials(usernameOrEmail, password)
    user = User.find_by( username: usernameOrEmail ) || User.find_by( email: usernameOrEmail)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

end
