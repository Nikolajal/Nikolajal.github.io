# tainted?/taint were removed in Ruby 3.2; Liquid 4.0.3 still calls them on any object.
class Object
  def tainted?
    false
  end

  def taint
    self
  end
end
