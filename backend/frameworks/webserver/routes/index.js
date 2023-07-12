import register from './register.js'
import login from './login.js'
import commonServices from './commonServices.js'
import packageRouter from './packages.js'
import canteenRouter from './canteen.js'
import wishRouter from './wish.js'
import userRouter from './user.js'
import bookingRouter from './booking.js'

export default function routes(app, express) {
    app.use('/usersignup', register(express))
    app.use('/userlogin', login(express))
    app.use('/service', commonServices(express))
    app.use('/canteen', packageRouter(express))
    app.use('/allcanteen', canteenRouter(express))
    app.use('/wish', wishRouter(express))
    app.use('/user', userRouter(express))
    app.use('/booking', bookingRouter(express))
}