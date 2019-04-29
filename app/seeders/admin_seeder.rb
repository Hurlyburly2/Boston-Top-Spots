class AdminSeeder
  ADMIN_DATA = [
    {username: "BorisMargarian", email: "margarian.boris@gmail.com", password: "letsnotshout", role: "admin"},
    {username: "HeatherGarcia", email: "heather.michelle.garcia@gmail.com", password: "letsnotshout", role: "admin"},
    {username: "AllisonKemmerle", email: "allison.kemmerle@gmail.com", password: "letsnotshout", role: "admin"},
    {username: "DouglasSimon", email: "dougdougmann@gmail.com", password: "letsnotshout", role: "admin"},
    {username: "NewUser", email: "new.user@gmail.com", password: "letsnotshout", role: "user"}
  ]

  def self.seed!
    ADMIN_DATA.each do |user|
      email = user[:email]
      admin = User.find_or_initialize_by(email: email)
      admin.assign_attributes(user)
      admin.save!
    end
  end
end
