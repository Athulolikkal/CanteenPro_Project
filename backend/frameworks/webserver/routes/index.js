import register from './register.js'
import login from './login.js'
import commonServices from './commonServices.js'
import packageRouter from './packages.js'
import canteenRouter from './canteen.js'
import wishRouter from './wish.js'
import userRouter from './user.js'
import bookingRouter from './booking.js'

export default function routes(app, express) {
    app.use('/api/usersignup', register(express))
    app.use('/api/userlogin', login(express))
    app.use('/api/service', commonServices(express))
    app.use('/api/canteen', packageRouter(express))
    app.use('/api/allcanteen', canteenRouter(express))
    app.use('/api/wish', wishRouter(express))
    app.use('/api/user', userRouter(express))
    app.use('/api/booking', bookingRouter(express))
}