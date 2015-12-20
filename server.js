var express = require('express.io');
var _ = require('lodash');

var app = express();


app.http().io();

function Player (coins, landmarks, establishments){
	this.coins = coins
	this.landmarks = landmarks
	this.establishments = establishments
}

function Establishment (color, activation_number, name, type, effect, construction_cost){
	this.color = color
	this.activation_number = activation_number
	this.name = name
	this.type = type
	this.effect = effect,
	this.construction_cost = construction_cost
}

function Landmark (name, construction_cost, effect, under_construction){
	this.name = name
	this.construction_cost = construction_cost
	this.effect = effect
	this.under_construction = under_construction
}

function create_cards (){
	// Wheat fields
	var wheat_fields = repeat(6,new Establishment('blue',[1],'Wheat Field','wheat',null,1))
	// Ranch
	var ranches = repeat(6,new Establishment('blue',[2],'Ranch','cattle',null,1))
	// Bakery
	var bakeries = repeat(6,new Establishment('green',[2,3],'Bakery','bread',null,1))
	// Cafe
	var cafes = repeat(6,new Establishment('red',[3],'Cafe','coffee',null,2))
	// Convenience Store
	var convenience_stores = repeat(6, new Establishment('green',[4],'Convenience Store','bread',null,2))
	// Forest
	var forests = repeat(6,new Establishment('blue',[5],'Forest','gear',null,3))
	// TV-Station
	var tv_stations = repeat(4,new Establishment('purple',[6],'TV-Station','special',null,7))
	// Business Center
	var business_centers = repeat(4,new Establishment('purple',[6],'Business Center','special',null,8))
	// Stadium
	var stadiums = repeat(4,new Establishment('purple',[6],'Stadium','special',null,6))
	// Cheese Factory
	var cheese_factories = repeat(6,new Establishment('green',[7],'Cheese Factory','factory',null,5))
	// Furniture Factory
	var furniture_factories = repeat(6,new Establishment('green',[8],'Furniture Factory','factory',null,3))
	// Mine
	var mines = repeat(6,new Establishment('blue',[9],'Mine','gear',null,6))
	// Family Restaurant
	var family_restaurants = repeat(6,new Establishment('red',[9,10],'Family Restaurant','coffee',null,3))
	// Apple Orchard
	var apple_orchards = repeat(6,new Establishment('blue',[10],'Apple Orchard','wheat',null,3))
	// Fruit and Vegetable Market
	var fruit_and_vegetable_markets = repeat(6,new Establishment('green',[11,12],'Fruit and Vegetable Market','apple',null,2))

	var cards = []

	return [wheat_fields, ranches, bakeries,cafes,convenience_stores
			,forests,tv_stations,business_centers,stadiums,cheese_factories
			,furniture_factories,mines,family_restaurants,apple_orchards,fruit_and_vegetable_markets]
}

function init_player(){
	var coins = 3
	var landmarks = [new Landmark('Train Station',4,null,true)
		   			,new Landmark('Shopping Mall',10,null,true)
		   			,new Landmark('Amusement Park',16,null,true)
		   			,new Landmark('Radio Tower',22,null,true)]
	var establishments = [new Establishment('blue',[1],'Wheat Field','wheat',null,1)
						 ,new Establishment('green',[2,3],'Bakery','bread',null,1)]
	return new Player(coins,landmarks,establishments);
}

function start_game(number_of_players){
	var supply_establishments = create_cards()
	var players = repeat(number_of_players,init_player())
}

function roll_dice(){
	return Math.floor((Math.random() * 6) + 1)
}

function repeat(n, func){
	var rv =[]
	for(var i = 0;i<n;i++){
		rv.push(func)
	}
	return rv;
}

console.log(create_cards());

app.listen(7076);
