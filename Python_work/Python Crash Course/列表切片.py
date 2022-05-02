#列表切片
beverages=['Lemon tea','fruit juice','eastern tea','sprite','cola']
print(beverages[0:3])
#0：3切片指的是列表从1到3元素，即到eastern tea
print(beverages[1:4])
#如上，1，4则是第二个到第四个元素
print(beverages[:4])
#若未建立索引，则是从头开始
print(beverages[3:])
#若没建立结尾，则是从头一直到尾
print(beverages[-3:])
#从倒数到结尾
print("here are my favorite drinks")
for beverage in beverages[:3]:
	print(beverage)
#复制列表
drinks=beverages[:]
#去除起始和终止索引，将会复制整个列表
#若直接写出drinks=beverages，则会直接指向一个相同的列表，所以只能用[:]来直接拷贝列表
