#字符串 String
#在python内，用引号括起来的都是字符串，不论双引号还是单引号""''
"This is a string"
'This is also a string'
message="Hello Python world'okay'"
print(message)
#修改大小写：
name= "wILLIAM xu"
print(name.title())#name.title使python对name执行title操作（首字母大写，其他小写）
print(name.upper())#大写
print(name.lower())#小写
#合并字符串
first_name="xu"
last_name="william"
full_name=first_name+" "+last_name
print(full_name)