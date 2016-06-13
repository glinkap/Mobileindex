range=[1..19]
range[-3..7]
newRange = range[..]
###объектные литералы###
user=
  name: "dsafd"
  age :24
  skills:
    html:10

### логические###
first && second
on || off

first and second
on or no 
not isREady or not isOnline
### операторы сравнения###
a==b
a!=b
a isnt b
a is not b 
10 <= i >7
12 > i > 2 <1
### присваивание###
[b1,b2,b3] = [1,2,3]

car=
  make:"porshe"
  s:12
  as: yes or no

user =
  name:"petr"
  age:20
  lastVisit: do Date.now
#роверка есть ли поле age
"age" of user

range = [10..20]
#сть ли такое значение в массиве
cda= 14 in range
#проверка на равенство с каждым элементом массива
country in ["Russia","USA","UK","Germany"] #литерал массива
#проверка на NULL и Indefinite
book = dsafdasf
open book if book? #экзистэнциальный оператор добавляет сравнение с null и Indefinite с приведением типов
open book if book isnt null #
open? book if book? #проверка является ли функцией
object ={}
#какието дествия над объектом
object.speed ?= 100  #проверка на  null и Indefinite и затем присвоение
#присвоить свойству age свойство age если свойство age истино иначе присвоить 10 (|| заменено на ?)
this.age = config.age ? 10
#оптимизация присвоения значений
object.speed = object.speed || 100  #как бы мы написали на яваскрипте
object.speed  ||= 100 #оптимизированный вариант ан кофе  



#--------------ФУНКЦИИ


greet = (name) -> 
  "hello, #{name}!"

greet = ->   
  do function1
  fund  #вставка функции
  do fund  #запуск функции и получение результата
  fund   # ретурн
  if a 
    b # ретурн
  else c # ретурн

greet = (name) ->  
  do asd 
  return do function2
  fund  
  "hello"

greet = (name) ->
  do sadas
  return
greet = (name = "sorax") ->   #если name == null присвоить sorax

#Если в функции есть неопределенное колво аргументов
normalize = (lenght, vectors...) ->

#------------------Вызов функций-------------
show update object
show update(object, 10 ,20), "fast"  #скобки нужны когда передается более одного аргумента
show()  #однно и тоже вызов функции со скобками
do show  #однно и тоже вызов функции со скобками

#бинарные операторы 
a         +        b
a+     b
a +b   # а это выражение вызова функции типа funcName(+argument)

#Ананимные самовызывающиеся функции
do -> do funcName


#Синтаксис по условиям  , в кофе это выражения
if isREady
  activate somthing
  if not isFull
    append somthing
else 
  do prepare

if isReady then activate somthing #одно и тоже
activate somthing if isReady #одно и тоже
do prepare unless isReady #одно и тоже
unless isReady then do prepare #одно и тоже

#тернарный оператор
action = if mode is "idle" then "sleep" else "wander"
show if message then m2 else m3  #вызов функции show с аргументом резкльтатом if


#---------------------SWITCH
#-----Вариант 1
switch state
  when 0 then message="ddsafdasfsd"
  when 1 then message="ddsafdasfsd"
  else message = "unknown state"
#-----Вариант 2 (обертывает в самовызывающуюся функцию и возвращает значение переменной)
message = switch state
  when 0 then "ddsafdasfsd"
  when 1 then "ddsafdasfsd"
  else "unknown state"

  #---------------------ЦЫКЛЫ-------------------
  #---------------------while
#------Вариант 1
while isReady  
  do somthing
#------Вариант 2
while isReady then do somthing
#------Вариант 3
do somthing while isReady

while not isReady then do somthing
until isReady then do prepare

  #---------------------for in
for i in [0..10]   # ... три точки исключают "=" из <=
  update i

for i in [0..10] then update i  

update i for i in [0..10]  

update i for i in [0..10]  by 4 #изменение инкремента

onsole.log i for i in [0..100] when isPrime i by 2   # "by 2" можно писать до и после when и  в конце выражения  

#анесения значений в массив prime из isPrime
prime = (i for i in [0..100] when isPrime i)

#переборы элементов массива http://www.youtube.com/watch?v=-a-ojl1C2Hc&list=PLwSSV-_L9sztYcaMbY2XlehMFeR8Khs0j&index=7
#9 минута
remove index for element, index in array when element in rightElements

  #---------------------for of  (в javascript for in)
#Вывод всех ключей в объекте object
console.log property for property of object  
#Вывод всех значений ключей в объекте object через переменную value
console.log value for property, value of object  


###  //------- ЛОГ ХЕЛПЕР ----------
  var array = {};
  function log (valueName,value){
    array[valueName] = value;
    $('.mi-status').clone();
    $('.mi-status').html("");
    for (var element in array) {
    $('.mi-status').append(element+": "+array[element]+'<br>');} }###
array={}
log = (valueName, value) ->
  array = valueName :  value
  $('.mi-status').clone()
  $('.mi-status').html("")
  for element of array
    $('.mi-status').append(element+": "+array[element]+'<br>')
  return  


#Создание класса
class Person
  constructor: (@name, @age) ->
  getInfo: ->
    "Name: #{@name}, Age: #{@age}"  

  @myStaticFunc: ->  
    do somthing
  @myStaticNum: 123456  

class webd extends Person



###
($(document).ready  -> 
  more993 : ($(document).width() >= 975)


  )
###
($(document).ready  => 
 class Nav
  constructor: (@elements) ->



)    