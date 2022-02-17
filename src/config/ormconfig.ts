import keys from "./keys";

const config: any = {
   "type": "mysql",
   "host": (keys.NODE_ENV === "production") ? "db" : "localhost",
   "port": 3306,
   "username": keys.MYSQL_USER,
   "password": keys.MYSQL_PASSWORD,
   "database": keys.MYSQL_DATABASE,
   "synchronize": true,
   "logging": true,
   "entities": (keys.NODE_ENV === "production") ? [
      "build/entity/**/*.js"
   ] : [
      "src/entity/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "build/entity"
   }
}

export = config
