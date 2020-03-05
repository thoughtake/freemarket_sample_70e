# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|evaluation_list|string||
|points|integer||
|password|string|null: false|
### Association
- has_many :item_users
- has_many :items through: :item_users
- has_many :comments
- has_many :favorites
- has_one  :profile
- has_one  :user_address
- has_many  :credit_cards

## profilesテーブル
|Column|Type|Options|
|------|----|-------|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|birth_year|date|null: false|
|birth_month|date|null: false|
|birth_day|date|null: false|
|introduction|text||
|image|string||
|phone_number|string||
|user_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user

## user_addressesテーブル
|Column|Type|Options|
|------|----|-------|
|post_code|integer|null: false|
|prefecture_code|string|null: false|
|city|string|null: false, foreign_key: true|
|house_number|string||
|building_name|string||
|user_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user

## categories_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :items

## brands_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :items

## items_table
|Column|Type|Options|
|------|----|-------|
|buyer|string||
|size|string||
|item_condition|string||
|postage_payer|string||
|postage_type|string||
|prefecture_code|string||
|estimated_shipping_date|string||
|item_description|text||
|trading_status|string||
|price|integer||
|category_id|string|foreign_key: true|
|brand_id|string|foreign_key: true|
### Association
- has_many :item_users
- has_many :item_images
- has_many :items through: :item_users
- has_many :comments
- has_many :favorites
- belongs_to :brand
- belongs_to :category

## comments_table
|Column|Type|Options|
|------|----|-------|
|user_id||foreign_key: true|
|item_id||foreign_key: true|
|comment|text|null: false|
### Association
- belongs_to :user
- belongs_to :item

## favorites_table
|Column|Type|Options|
|------|----|-------|
|user_id|string|foreign_key: true|
|item_id|string|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :item

## credit_cards table
|Column|Type|Options|
|------|----|-------|
|card_number|integer||
|expiration_year|integer||
|expiration_month|integer||
|security_code|integer||
|user_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user

## item_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|string|foreign_key: true|
|item_id|string|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :item

## item_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|url|string||
|item_id|string|null: false, foreign_key: true|
### Association
- belongs_to :item