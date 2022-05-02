#元组
#元素可变的是列表，不可变的是元组
Money=[2,3,5]#这是列表
dimensions=(200,50)#这是元组
print(dimensions[0])
print(dimensions[1])

#dimension[0]=250 如果这样写，则会报错
for dimension in dimensions:
	print(dimension)
#类似列表，元组也可以用for循环
dimensions=(400,20)
for dimension in dimensions:
	print(dimension)
#即使不能修改元组内元素的值，可以直接覆盖元组内的元素