#空白
#泛指任何非打印符号，比如制表符，换行符，空格
print("hello world")
print("\thello world")
#可从上看出\t为制表符，给前面带来空格
print("Language:\nEnglish\nFrench\nChinese")
#从上看出\n为换行符
message="I am handsome     "#后面有空格
message=message.rstrip()#通过这一步，将暂存的message.rstrip变为永久的message,去掉右边的空格
print(message)
JoJo="   Star platinium, The World!   "
print(JoJo.rstrip())#rstrip去除右边空格
print(JoJo.lstrip())#lstrip为左边空格
print(JoJo.strip())#strip左右空格都去除
