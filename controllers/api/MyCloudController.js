const randomstring = require("randomstring");

const methods = {

	async getToken(req, res, next) {
		res.send({ token: randomstring.generate(500) });
	},

	async getOrderDetail(req, res, next) {
		const fakeData = {
			"success": true,
			"message": "Order with ID 2104843",
			"data": {
				"attributes": {
					"id": 3506616,
					"mc_number": "MC2108236908",
					"customer_id": "",
					"delivery_mode_id": 37,
					"address": "202 ถนน นางลิ้นจี่ ช่องนนทรี ยานนาวา กรุงเทพมหานคร",
					"billing_title": "",
					"customer_reference": "",
					"email": "",
					"name": "วิชญาพร",
					"note": "",
					"order_number": "2104843",
					"can_pick": 1,
					"postcode": "10120",
					"total_price": 11990,
					"phone_number": "0640379471",
					"payment_amount": "",
					"payment_date": "",
					"payment_time": "",
					"weight": 0,
					"bitly_code": "g235FqIXhK",

					"interface_type": "INTERFACE_TYPE",
					"delivery_date": "",
					"status": "APPROVED",
					"urgent": false,
					"payment_bank": "",
					"payment_method": "UNKNOWN",
					"payment_slip": "",
					"tracking_number": "",
					"create_date": "2021-08-27",
				},
				"delivery_mode": {
					"attributes": {
						"id": 37,
						"code": "SCG Express",
						"name": "SCG Express",
						"contact": "https://www.scgexpress.co.th/tracking",
						"available": true,
					}
				},
				"order_items": {
					"0":
					{
						"attributes":
						{
							"id": 7309165,
							"line_no": "",
							"price": 0,
							"quantity": 1,
						},
						"product":
						{
							"attributes":
							{
								"id": 164162,
								"sku": "GI003I-0001",
								"shop_sku": "MC01",
								"name": "สินค้าทดสอบ MyCloud 001",
								"cost": 0,
								"price": 0,
								"description": "",
								"supplier_reference": "",
								"client_references":
								{
									0: "",
									1: "",
									2: "",
									3: "",
								},
								"active": true,
								"available": true,
								"photo_url": "https://api.mycloudfulfillment.com/img/default-item-image.svg",
								"category_id": 4396,
								"physical_inventory": 95,
								"reserved_inventory": 0,
								"waitpayment_inventory": 0,
								"recvpayment_inventory": 0,
								"approved_inventory": 8,
								"available_inventory": 87,
							},
						},
					},
				},
				"raw_delivery_status": "",
				"raw_delivery_status_name": "",
			}
		}
		res.send(fakeData)
	},
}

module.exports = { ...methods }