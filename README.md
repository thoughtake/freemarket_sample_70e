# 概要
テックキャンプの最終課題にて作成したフリーマーケットのアプリケーションです  
また本資料では、自身で実装した箇所、および開発を通じて得られた経験についても紹介します<br>

### 接続先情報
[フリマ](http://18.180.41.211/)
ID/Pass
ID: admin
Pass: 2222

**テスト用アカウント等**
購入者用
  メールアドレス: test1@gmail.com
  パスワード: 1234567
購入用カード情報
  番号：4242424242424242
  期限：12/20
  セキュリティコード：123
出品者用
  メールアドレス名: test2@gmail.com
  パスワード: 1234567

# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|encrypted_password|string|null: false| -->
### Association
- belongs_to_active_hash :birth_year
- belongs_to_active_hash :birth_month
- belongs_to_active_hash :birth_day
- belongs_to_active_hash :prefecture
- devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
- has_many :items
- has_many :comments
- has_many :favorites
- has_one  :profile
- has_one  :user_address
- has_many :cards

## profilesテーブル
|Column|Type|Options|
|------|----|-------|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|birth_year|integer|null: false|
|birth_month|integer|null: false|
|birth_day|integer|null: false|
|introduction|text||
|image|string||
|phone_number|string||
|user_id|string|null: false, foreign_key: true| -->
### Association
- belongs_to :user

## user_addressesテーブル
|Column|Type|Options|
|------|----|-------|
|post_code|string|null: false|
|prefecture_code|string|null: false|
|city|string|null: false|
|house_number|string||
|building_name|string||
|user_id|string|null: false, foreign_key: true| -->
### Association
- belongs_to :user

## categories_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :items
- has_ancestry

## brands_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :items

## items_table
|Column|Type|Options|
|------|----|-------|
|name|string||
|buyer_id|references|foreign_key: true|
|size|string||
|item_condition|string||
|postage_payer|string||
|postage_type|string||
|prefecture_code|string||
|estimated_shipping_date|string||
|item_description|text||
|trading_status|string||
|price|integer||
|category_id|references|foreign_key: true|
|brand_id|references|foreign_key: true|
|user_id|string|foreign_key: true|
### Association
- belongs_to_active_hash :prefecture
- belongs_to_active_hash :item_size
- belongs_to_active_hash :condition
- belongs_to_active_hash :postage_pay
- belongs_to_active_hash :shipping_date
- belongs_to_active_hash :postage_ty
- has_many :item_images, dependent: :destroy
- has_many :comments, dependent: :destroy
- has_many :favorites
- belongs_to :user
- belongs_to :brand, optional: true
- belongs_to :category, optional: true

## comments_table
|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|item_id|references|foreign_key: true|
|message|text|null: false|
### Association
- belongs_to :user
- belongs_to :item

## cards table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|customer_id|string|null: false|
|card_id|string|null: false|
### Association
- belongs_to :user

## item_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|src|string||
|item_id|references|null: false, foreign_key: true|
### Association
- belongs_to :item



