class CreateProviders < ActiveRecord::Migration[6.0]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :bio
      t.string :profile_img
      t.string :specialty

      t.timestamps
    end
  end
end
