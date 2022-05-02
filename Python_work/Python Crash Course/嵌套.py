#嵌套
#即，将多个词典何为一个列表
Grade10={'EAL': 'James'}
Grade11={'Precalculus': 'jackson'}
Grade12={'calculus':'Lee'}

Courses=[Grade12, Grade11, Grade10]
for teachers in Courses:
	print(teachers)

new_course= {'Economics': 'Thiessen'}
Courses.append(new_course)
