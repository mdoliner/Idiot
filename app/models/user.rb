class User < ActiveRecord::Base
  USER_LEVELS = ["whitehat", "editor", "moderator", "regulator", "verified"]

  validates :username, :password_digest, :email, :level, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :level, inclusion: {in: USER_LEVELS}

  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }#, default_url: "https://s3.amazonaws.com/idiotco/users/photos/missing.png?X-Amz-Date=20150114T210036Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=06818708e909ae5c525da229b42570ad215467476a12b2ccdccc8b0afd44826d&X-Amz-Credential=ASIAJBTWRELIDAQVPXEQ/20150114/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEMb//////////wEagAJdvDqev2KybiqWsgAHKqwzZBeIwJI4SPG0VX0jcBKtNDpTHPv30Ax6sWHXPBlwhTOz7MHdYI37yN%2B%2BY0vFn%2BptPO0fxhne6twi1gYBZc1xureGVqsV%2Bdy01KGC6Y3GRNhTkgE5QD6lUu4kgY5pZfSUA3BBHMogXpGR/z4srB8oDHMDvvknTyBHcVD4pGQ1/2q0AdgrNWSsMq79H7dnNNZv9ZngI5AEFvFbShsMg561e6hatXE6jhJpCuwuf3EIZA70GlO/iVc3r5bNazRcgiedNSNKP2hu5qpt8rn9IcEAIhxUFofJexs4eBCgQ1/h2kdGij/skHuHg/tsWUB1ErSbIIWx26UF"
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/


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
