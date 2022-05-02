#遍历字典
Cities={
	'dali':0,
	'dalian': 1,
	'Enshi': 2,
	'sanya': 3,
	'qingdao': 4
}
for city, rank in Cities.items():
	print("\nCity: "+ city.title())
	print("rank: "+ str(rank))
	#在这里面，用for循环对字典的每个键和值换成新的变量，然后再使用print打出语句(记住用items函数来特指列表)
	
