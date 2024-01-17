for i in range(1,6,2):
    print(i)

count = 0
word = "Hello World!"
for i in word:
    if  i == "W":
      count +=1

print("Count:", count)






i = 5

isHasCar = True

while isHasCar:
    if input("Enter data: ") == "Stop":
        isHasCar = False






for i in range(1,11):
    if i == 5:
        break

    if i % 2 == 0:
        continue

    print(i)




found = None
for i in "Hello":
    if i == "r":
        found = True
        break
else:
    found = False

print(found)








nums = [5, 7, 2, 4, 7, True, "Hello", 6.7, [5,7]]

nums[0] = 50
nums[5] = 1

print(nums[-1][1])

numbers =[5,2,7]
numbers.append(100)
numbers.insert(1,50)

numbers.extend([9,9,9,9,9])
numbers.sort()
# numbers.reverse()

# numbers.pop(0)
numbers.remove(5)

# print(numbers.count(9))
print(len(numbers))









nums =[5,2,7, "50", False]

for el in nums:
    el *= 2
    print(el)








n = int(input("Enter Length: "))

user_list =[]

i = 0
while i < n:
    string = "Enter element #" + str(i + 1) + ": "
    user_list.append(input(string))
    i += 1

print(user_list)





