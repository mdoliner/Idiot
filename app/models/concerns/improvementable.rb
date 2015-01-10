module Improvementable
  extend ActiveSupport::Concern

  included do
    has_many(
      :improvements,
      as: :improvementable,
      class_name: "Improvement",
      dependent: :destroy
    )
  end
end
