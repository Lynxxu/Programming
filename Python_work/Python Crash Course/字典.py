#在py中，字典为一系列键-值对，每一个键都对于一个值
Dictonary={'wow':'awesome','this is my moment':6}
print(Dictonary['wow'])
#说简单点，字典就是一个键可以对应任意的值，string，number甚至另一个字典
Minecraft={'basic component':'dirt','price of a wheat':1}
villager_price =Minecraft['price of a wheat']
print("you've spent 10000 emeralds for "+ str(villager_price) + " wheat")
#在上代码内，我们创建了一个mc词典，其中将一个wheat键对应1，在下方将其对应的值化为string， 代入print里面
Minecraft['x coordinate']=11
Minecraft['y coordinate']= 100
print(Minecraft)#在此我们加入了x，y坐标，使用大括号和字典名可以直接添加键对值

Uni={}
Uni['UBC']= 'good'
Uni['alberta']= 99
print(Uni)
#类似列表，词典也可以后面再添加或者删除，改动
Uni['Sanit Francis Xavier']= 'great'
print("university of Sanit Francis Xavier is "+ Uni['Sanit Francis Xavier'])
Uni['Sanit Francis Xavier']= 'fantasti'
print("university of Sanit Francis Xavier is now "+ Uni['Sanit Francis Xavier'])
#字典内也可以修改值，只要将对应键的值重新输入即可
del Uni['UBC']
print(Uni)
#del函数用于删除字典内的值
Friends={
	'Richard':'rap',
	'Chalin':'running',
	'Oscar':'Perservence',
	'Alice':'weird'
}
print(Friends)
#字典的另一种写法qwq
print("Richard's favorite song is "+
	Friends['Richard'].title()+
	"."
	)