#使用If 来处理列表：
#若某人来买手机
Requested_phones=["Redmi note7","Redmi note8","Redmi K20pro","Redmi note8 pro","mi9"]
for Requested_phone in Requested_phones:
	if Requested_phone == "Redmi note8":
		print("sorry, Redmi note8 is to popular. please come next time")
	else:
		print("Here's your "+ Requested_phone)
#这里模拟的是一个人要买所有的手机，py会自动检索每个元素并且执行判断，如果没货的是note8，就自动print没有，其他的就ok
wanted_breads=[]
if wanted_breads:
		print("here's your bread")
else:
		print("are you sure you dont want a marconie？")
#因为空集本身判断为false，所以可以直接if list
