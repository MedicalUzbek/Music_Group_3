const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const db2 = require('../cf/db');
