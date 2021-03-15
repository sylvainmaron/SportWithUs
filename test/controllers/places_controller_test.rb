require 'test_helper'

class PlacesControllerTest < ActionDispatch::IntegrationTest
  test "should get name" do
    get places_name_url
    assert_response :success
  end

end
