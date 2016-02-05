Old School Sports Page 

Models and Backend : 

npm install --save pg lodash sequelize
createdb first_sequelize_app
sequelize init

//sequelize model:create --name User --attributes first_name:string,last_name:string,age:integer

sequelize model:create --name Data --attributes t1:data,a1:data,t2:data,a2:data,t3:data,a3:data,t4:data,a4:data,t5:data,a5:data,t6:data,a6:data,t7:data,a7:data,t8:data,a8:data,t9:data,a9:data,t10:data,a10:data,t11:data,a11:data,t12:data,a12:data

sequelize model:create --name Users --attributes email:string,passwordDigest:string

sequelize db:migrate
	
heroku addons:create heroku-postgresql:hobby-dev	
heroku config to see which database to put in config production 
heroku pg:push Old-School-Sports HEROKU_POSTGRESQL_YELLOW_URL --app oldschoolsports

To start: 

Run npm install 

type nodemon app.js in the terminal 

go to localhost:3000