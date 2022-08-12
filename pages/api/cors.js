import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'



// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
    methods: ['GET', 'POST', 'PUT','DELETE','OPTIONS'],
  })
)
export default cors

