1.**创建一个数据库abccs**   

```
mysql> CREATE DATABASE 库名;
mysql> USE 库名;
mysql> CREATE TABLE 表名 (字段名 VARCHAR(20), 字段名 CHAR(1));
```

2.创建表  

```
#创建表
use demo;
create table pet(
        name varchar(20),        #名字
        species varchar(20),     #种类
        sex char(1),             #性别
)
```



3.查询表  

```
SELECT * FROM `表名` WHERE 条件
例：select income-outcome  from salary
例：select * 	from employees where name like'王%' 
```



4.表中插入数据  

```
INSERT INTO `表名`(`filmId`, `filmName`) VALUES (值1,值2)
例：insert employees values('990210','张英','本科','1982-03-24',0,4,'南京市镇江路号','8497534','2')

```



5.表中删除数据  

```
DELETE FROM `表名` WHERE 条件
```



6.表中修改数据

```
UPDATE `表名` SET `filmId`=[value-1],`filmName`=[value-2] WHERE 条件
例：update Employees 
	set DepartmentID='1' where EmployeeId='2'
```

