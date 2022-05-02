#按顺序遍历字典
favorite_courses= {
	'Mr.C':'Global Geography',
	'Ms.Barns': 'Physcis',
	'Mr.Dey':'Chemistry',
	'Mrs.McNett':'English'
	}
for teachers in sorted(favorite_courses.keys()):
	print(teachers.title()+" Cool, you are the best teacher ever")
#在此处，用sort函数将列表的键用alphabetical 顺序表达
for courses in sorted(favorite_courses.values()):
	print(" This course is fantastic:\n"+ courses.title())
#在此处，用sort函数和.value来遍历整个字典的值

