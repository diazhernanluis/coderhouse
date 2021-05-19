const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require("./src/routers/loginRouter");
const cors = require("cors");

app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: 'unaSecret',
    resave: false,
    saveUninitialized: false
}));

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout:'main.hbs'}));
app.set('view engine', '.hbs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(router);


app.listen(5000, () => { console.log("Running")});